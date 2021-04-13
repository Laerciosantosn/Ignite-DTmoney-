import { useTransactions } from '../../hooks/useTransactions';
import { formatCurrency } from '../../utils/formatCurrency';

import iconmeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary ()  {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
 
  return (
    <Container>
  
      <div>
        <header>
          <p>Deposit</p>
          <img src={iconmeImg} alt="Entradas"/>
        </header>
        <strong> {formatCurrency(summary.deposits)} </strong>
      </div>

      <div>
        <header>
          <p>Withdraw</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong> -{formatCurrency(summary.withdraws)} </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong> {formatCurrency(summary.total)} </strong>
      </div>

    </Container>
  );
}

