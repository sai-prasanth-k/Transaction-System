import React from 'react'
import { IoWalletOutline } from "react-icons/io5";
import FormCard from '../FormCard'
import TransactionViewCard from '../TransactionViewCard'
import { HomePage, IntroContainer, MainContentContainer, SummaryContainer, SummaryItemContainer } from './styledComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTransaction } from '../../api';

const Home = () => {
  const [transactionList, setTransactionList] = useState([])
  useEffect( () => {
    const fetchTransaction = async () => {
      try {
        const response = await getTransaction();
        setTransactionList(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTransaction()
  }, [])
  return (
    <HomePage>
      <IntroContainer>
        <h2>Welcome to Transaction Management.</h2>
      </IntroContainer>
      <SummaryContainer>
        <SummaryItemContainer>
          <IoWalletOutline className='wallet-icon' />
          <div>
            <p className='summary-text-heading'>Your Balance</p>
            <p className='summary-text-rs'>RS 1000</p>
          </div>
        </SummaryItemContainer>
        <SummaryItemContainer>
          <IoWalletOutline className='wallet-icon' />
          <div>
            <p className='summary-text-heading'>Total Deposit</p>
            <p className='summary-text-rs'>RS 1000</p>
          </div>
        </SummaryItemContainer>
        <SummaryItemContainer>
          <IoWalletOutline className='wallet-icon' />
          <div>
            <p className='summary-text-heading'>Total Withdrawal</p>
            <p className='summary-text-rs'>RS 1000</p>
          </div>
        </SummaryItemContainer>
      </SummaryContainer>
      <MainContentContainer>
        <FormCard />
        <TransactionViewCard transactionList = {transactionList} />
      </MainContentContainer>
    </HomePage>
  )
}

export default Home