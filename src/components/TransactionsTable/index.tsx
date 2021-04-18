import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <header>
        <strong>Listagen</strong>
        <p>{transactions.length} itens</p>

        <nav>
          <p>Title</p>
          <p>Value</p>
          <p>Category</p>
          <p>Date</p>
        </nav>

      </header>
      
      {transactions.map(transaction => {
        return (
          <section key={transaction.id}>
            <p>{transaction.title}</p>
            <p className={transaction.type}>
              {transaction.type === 'withdraw' ? '- ' : ''}
              {formatCurrency(transaction.amount)}
            </p>
            <p>{transaction.category}</p>
            <p>{formatDate(transaction.createdAt)}</p>
          </section>
        )
      })}
    </Container>
  );
}
