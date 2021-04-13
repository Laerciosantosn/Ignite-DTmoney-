import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.75rem;

  div {
    background: var(--Shape);
    padding: 1.67rem 1.417rem 0.9456rem 2rem;
    width: 22rem;
    height: 8.5rem;
    border-radius: 0.3125rem;
    
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
     
    &:last-child {
      background: var(--Green);
      color: var(--Shape);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.6331rem;
    }

    strong {
      font-size: 2rem;
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 3.375rem;
      color: var(--Title);
    }
    &:last-child strong {
      color: var(--Shape);
    }
  }
`;
