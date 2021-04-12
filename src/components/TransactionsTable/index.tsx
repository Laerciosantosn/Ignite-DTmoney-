import React, { useContext } from 'react';
import { TransactionsContext } from '../../TransactionContext';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const transactions = useContext(TransactionsContext);

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
