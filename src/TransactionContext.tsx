import { createContext, ReactNode, useEffect, useState } from  'react';
import { api } from './services/api';

interface TransactionTypes {
  id: number,
  title: string,
  type: 'deposit' | 'withdraw',
  category: string,
  amount: number,
  createdAt: string,
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionTypes[]>([]);

export function TransactionsProvide({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<TransactionTypes[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
     
  }, []);


  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}