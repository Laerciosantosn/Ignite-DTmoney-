import { createContext, ReactNode, useContext, useEffect, useState } from  'react';
import { api } from '../services/api';

interface TransactionTypes {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string,
}

// Formas de crias interface
// interface TransactionInput {
//   title: string,
//   type: 'deposit' | 'withdraw',
//   category: string,
//   amount: number,
// }

// Forma de aproveitar dados de uma interface
// type TransactionInput = Pick<TransactionTypes, 'title' | 'type' | 'category' | 'amount'>;

type TransactionInput = Omit<TransactionTypes, 'id' | 'createdAt'>;


interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionTypes[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvide({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<TransactionTypes[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
     
  }, []);

  async function createTransaction(transactionInput : TransactionInput){
   
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })

    const { transaction } = response.data;


    setTransactions([...transactions, transaction]);
  }


  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

// Crindo um contexto proprio para redizir importações
export function useTransactions () {
  const context =  useContext(TransactionsContext);

  return context;
}