import {React, useEffect, useState} from 'react'
import TransactionCard from './../TransactionCard/index';
import { getTransaction, updateTransaction } from '../../api'
import { TransactionTableContainer, TransactionViewCardContainer } from './styledComponent';

const TransactionViewCard = (props, transaction_id) => {
  const {transactionList} = props
  const [transaction, setTransaction] = useState(null)
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await getTransaction(transaction_id);
        setTransaction(response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransaction();
  }, [transaction_id])
  const updateTransactionFn = async (status) => {
    try {
      const response = await updateTransaction(transaction_id, status);
      setTransaction(response)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TransactionViewCardContainer>
      <h2>History</h2>
      <TransactionTableContainer>
        <div className='transaction-row-container transaction-row-heading'>
          <h3 className='row-items-text'>User</h3>
          <h3 className='row-items-text'>Amount</h3>
          <h3 className='row-items-text'>Type</h3>
          <h3 className='row-items-text'>Status</h3>
          <h3 className='row-items-text'>Delete</h3>
        </div>
        {
          transactionList.map(
            each_transaction => <TransactionCard transaction={transaction} updateTransactionFn = {updateTransactionFn} each_transaction = {transaction} />
          )
        }
        
      </TransactionTableContainer>
    </TransactionViewCardContainer>
  )
}

export default TransactionViewCard