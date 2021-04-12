import React, { useContext } from 'react';

import iconmeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionContext';

import { Container } from './styles';

export function Summary ()  {

  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
  
      <div>
        <header>
          <p>Entrada</p>
          <img src={iconmeImg} alt="Entradas"/>
        </header>
        <strong> US$ 7000,00 </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong> US$ -2000,00 </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong> US$ 5000,00 </strong>
      </div>

    </Container>
  );
}

