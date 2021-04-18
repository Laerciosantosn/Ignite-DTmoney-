import styled from 'styled-components';

export const Container = styled.header`
    background: var(--Blue);
    height: 14.625rem;

  @media (min-width: 64em){
    height: 13.25rem;
  }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 1rem; 

  @media (min-width: 64em){
    max-width: 70rem;
    margin: 0 auto;

    padding: 2rem 1rem 4rem; 
  } 

  img {
    width: 8.4375rem;
    height: 1.951rem;

    @media (min-width: 64em){
      width: 10.8rem;
      height: 2.5rem;
    }
  }

  button {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.125rem;
    background: var(--Blue-Light);
    color: var(--Shape);
    border: 0;
    border-radius: 0.3125rem;
    width: 8.125rem;
    height: 2.5rem;

    @media (min-width: 64em){
      font-size: 1rem;
      line-height: 1.5rem;
      height: 3rem;
      width: 12.1575rem;
      transition: filter 200ms ease-in-out;

      &:hover {
        filter: brightness(0.95);
      }
    }

  }
`;
