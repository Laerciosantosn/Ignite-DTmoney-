import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const {transactions } = useTransactions();

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
                {formatCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {formatDate(transaction.createdAt)}
              </td>
            </tr>
            )
          })}
         
       
        </tbody>
      </table>
    </Container>
  );
}
