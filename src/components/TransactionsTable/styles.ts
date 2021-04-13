import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.625rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1.25rem 2rem;
      font-weight: 400;
      color: var(--Text);
      line-height: 1.5rem;
      font-size: 1rem;
      text-align: left;
    }

    td {
      border: 0;
      padding: 1.25rem 2rem;
      background: var(--Shape);
      color: var(--Text);

      &:first-child {
        border-top-left-radius: 0.3125rem ; 
        border-bottom-left-radius: 0.3125rem; 
        color: var(--Title);
      }

      &:last-child  {
        border-top-right-radius: 0.3125rem ; 
        border-bottom-right-radius: 0.3125rem; 
      }

      &.deposit {
        color: var(--Green);
      }
      
      &.withdraw {
        color: var(--Red);
      }
    }
  } 
`;
