import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'

const TransactionCard = (props) => {
  const {each_transaction, updateTransactionFn, transaction} = props
  const {user, amount, transaction_type} = each_transaction
  
  const handleChange = (e) => {
    e.preventDefault();
    updateTransactionFn(e.target.value)
  };

  return (
    <div className="transaction-row-container">
        <p className='row-items-text'>{user}</p>
        <p className='row-items-text'>{amount}</p>
        <p className='row-items-text'>{transaction_type}</p>
        <select className='row-items-text select-option' onChange={handleChange} name="status" value={transaction} id="status">
            <option value="PENDING">PENDING</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="FAILED">FAILED</option>
        </select>
        <MdDeleteOutline className='row-items-text delete-icon' />
    </div>
  )
}

export default TransactionCard