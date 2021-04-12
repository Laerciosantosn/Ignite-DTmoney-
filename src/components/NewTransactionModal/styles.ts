import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const ContainerForm = styled.form`
  h2 {
    color: var(--Title);
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  input {
    font-weight: 400;
    background: #E7E9EE;
    border: #D7D7D7;
    color: var(--Title);
    border: 0.0625rem solid #D7D7D7;

    &:focus {
    outline-color: var(--Green);
    outline-style: solid;
    }

    &::placeholder {
      color: var(--Text);
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  input,
  button[type="submit"] {
    width: 100%;
    padding: 1.25rem 1.5rem;
    height: 4rem;
    border-radius: 0.3125rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  button[type="submit"] {
    background: var(--Green);
    font-weight: 600;
    color: var(--Shape);
    border: 0;

    transition: filter 300ms ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

interface RadioButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}


export const RadioBox = styled.button<RadioButtonProps>`
  padding: 1.25rem 1.5rem;
    height: 4rem;
    border-radius: 0.3125rem;
    
    border: solid 0.09375rem rgba(150, 156, 178, 0.2);
    background: ${(props) => props.isActive 
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'
    };
    width: 14.75rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    transition: border-color 300ms ease-in-out;

    &:hover {
      border-color: ${darken(0.1, '#D7D7D7')};
    }

    &:focus {
      outline-color: ${(props) => props.isActive 
      ?  colors[props.activeColor]
      : 'transparent'
    };
      outline-style: solid;
    }


    img {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 1.125rem;
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: var(--Title);
    }

`;
