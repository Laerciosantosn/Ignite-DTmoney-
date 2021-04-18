import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  margin-top: -5.95rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 40em){
    gap: 1.5rem;
  }
  
  @media (min-width: 64em){
    gap: 2rem;
    margin-top: -6.75rem;
    max-width: 70rem;
  }

  div {
    padding: 0.7rem 0.4rem ;
    min-width: 7.5rem;
    height: 6rem;

    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 0.3125rem;
    background: var(--Shape);
     
    &:last-child {
      background: var(--Green);
      color: var(--Shape);
    }

    @media (min-width: 40em){
      width: 100%;
      height: 7.25rem;
    }

    @media (min-width: 64em){
      padding: 1.67rem 1.417rem 0.9456rem 2rem;
      max-width: 22rem;
      height: 8.5rem;
    }
    
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.6331rem;

      p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.3125rem;
      }

      img {
        width: 1.5rem;
      }
    }

    strong {
      color: var(--Title);

      @media (min-width: 40em){
        font-size: 1.75rem;
      }

      @media (min-width: 64em){
        font-size: 2.25rem;
        font-weight: 500;
        line-height: 3.375rem;
      }
    }

    &:last-child strong {
      color: var(--Shape);
    }
  }
`;
