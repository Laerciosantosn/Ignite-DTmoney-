import styled from 'styled-components';

export const Container = styled.header`
  background: var(--Blue);
  height: 13.25rem;
`;

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  padding: 2rem 1rem 4rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  button {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--Shape);
    background: var(--Blue-Light);
    border: 0;
    border-radius: 0.3125rem;
    height: 3rem;
    width: 12.1575rem;
    transition: filter 200ms ease-in-out;

    &:hover {
      filter: brightness(0.95);
    }

  }
`;
