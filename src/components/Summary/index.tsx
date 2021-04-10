import React from 'react';

import iconmeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary ()  {
  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={iconmeImg} alt="Entradas"/>
        </header>
        <strong> U$ 7000,00 </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong> U$ -2000,00 </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong> U$ 5000,00 </strong>
      </div>

    </Container>
  );
}
