import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { ContainerForm, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void ;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type,
    })

  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
     >
       <button 
        type="button" 
        className="react-modal-close" 
        onClick={onRequestClose}
      >
         <img src={closeImg} alt="Close modal"/>
       </button>

       <ContainerForm onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Price"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entry"/>
            <span>Entry</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Output"/>
            <span>Output</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Register</button>

       </ContainerForm>
  </Modal>
  );
}
