import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HaaderProps {
  onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HaaderProps) {
  
  return (
    <Container>
      <Content>
    <>
        <img src={logoImg} alt="Dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
        </>
        
      </Content>
    </Container>
  )
}


