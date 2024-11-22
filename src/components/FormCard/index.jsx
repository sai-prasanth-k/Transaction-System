import React from 'react'
import { useState } from 'react';
import { FormCardPage, FormContainer, InputContainer } from './styledComponent'
import { createTransaction } from '../../api';

const FormCard = () => {
  const [formData, setformData] = useState({
    amount: '',
    transaction_type: 'DEPOSIT',
    user: '',
  });

  const handleChanges = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTransaction(formData);
      console.log(response);
      setformData({amount: '', transaction_type: 'DEPOSIT', user: ''});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormCardPage>
      <FormContainer onSubmit={handleSubmit}>
        <h2 className='add-transaction-heading'>Add Transaction</h2>
        <InputContainer>
          <label htmlFor="user">USER</label>
          <input className='input-field' type="number" id="user" name="user" onChange={handleChanges} value={formData.user} placeholder='Enter the user id' />
        </InputContainer>
        <InputContainer>
          <label htmlFor="amount">AMOUNT</label>
          <input className='input-field' type="number" id="amount" name="amount" value={formData.amount} onChange={handleChanges} placeholder='Enter the amount' />
        </InputContainer>
        <InputContainer>
          <label htmlFor="type">TYPE</label>
          <select className='input-field' name="transaction_type" value={formData.transaction_type} onChange={handleChanges} id="type">
            <option value="DEPOSIT">DEPOSIT</option>
            <option value="WITHDRAWAL">WITHDRAWAL</option>
          </select>
        </InputContainer>
        <button className='add-btn' type='submit'>ADD</button>
      </FormContainer>
    </FormCardPage>
  )
}

export default FormCard