import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

interface TransactionTypes {
  id: number,
  title: string,
  type: 'deposit' | 'withdraw',
  category: string,
  amount: number,
  createdAt: string,
}

export const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionTypes[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
     
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr> 
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' ? '- ' : ''}
                {new Intl.NumberFormat('pt-Br', {
                  style: 'currency',
                  currency: 'USD',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-Br').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
            )
          })}
         
       
        </tbody>
      </table>
    </Container>
  );
}
