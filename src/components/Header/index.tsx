import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface HaderPropos {
     OnOpenNewTransactionModal: () => void;
}
export function Header({OnOpenNewTransactionModal}: HaderPropos) {

    return(
        <Container>
            <Content>
           <img src={logoImg} alt="dt money" />
           <button type="button" onClick={OnOpenNewTransactionModal}>
                Nova transação
           </button>

           </Content>
        </Container>
    )
}