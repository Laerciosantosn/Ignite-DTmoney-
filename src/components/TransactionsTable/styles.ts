import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.625rem;
  margin-left: 1rem;
  margin-right: 1rem;

  & header {
    display: flex;
    justify-content: space-between;

    & strong {
      font-size: 1.25rem;
      line-height: 1.875rem;
      color: var(--Title);
    }

    > p {
      font-size: 0.875rem;
      line-height: 1.3125rem;
      color: var(--Text);
    }

    @media (min-width: 40em){
      display: initial;

      & strong, > p {
        display: none;
      }
    }

    & nav {
      display: none;


      @media (min-width: 40em){
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
        grid-template-areas: 
        "title value category date";

        p {
          color: var(--Text);
          font-size: 1rem;
          line-height: 1.5rem;
        }

        p:first-child {
          grid-area: title;
        }

        p:nth-child(2) {
          grid-area: value;
        }

        p:nth-child(3) {  
          grid-area: category;
        }

        p:last-child {
          grid-area: date;
        }
      }    
    } 
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto;
    gap: 0.5rem;
    grid-template-areas: 
      "title title"
      "value value"
      "category date";

    border-radius:0.3125rem;
    min-width: 20.4375rem;
    min-height: 8 rem;
    background: var(--Shape);
    padding: 1.125rem 1.5rem;
    margin-top: 1.25rem;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);

    p {
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }

    p:first-child {
      margin-top: 1.0625rem;
      grid-area: title;
      color: var(--Title);
    }

    p:nth-child(2) {
      grid-area: value;
      font-size: 1.25rem;
      line-height: 1.875rem;
      margin-top: 0.125rem;
      margin-bottom: 1.1875rem;
    }

    p:nth-child(3) {  
      color: var(--Text);
      grid-area: category;
    }

    p:last-child {
      color: var(--Text);
      grid-area: date;
      justify-self: flex-end;
    }

    @media (min-width: 40em){
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
      grid-template-areas: 
      "title value category date";
      height: 4rem;
      align-items: center;
      padding: 1.25rem 2rem;

      p:first-child {
        margin-top: 0rem;
 
      }

      p:nth-child(2) {
        margin-top: 0rem;
        margin-bottom: 0rem;
      }
    }

    .deposit {
      color: var(--Green);
    }
      
    .withdraw {
      color: var(--Red);
    }
  }
`;
