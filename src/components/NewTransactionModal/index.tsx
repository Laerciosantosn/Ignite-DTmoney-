import React, { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void ;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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

       <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Title"/>
        <input type="number" placeholder="Price"/>

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

        <input type="text" placeholder="Category"/>
        <button type="submit">Register</button>

       </Container>
  </Modal>
  );
}
