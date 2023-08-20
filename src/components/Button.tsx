import { styled } from "styled-components";

interface IButton{
    texto: string
    event: () => {}
}

const Butao = styled.button`
    color: #410840;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid #410840;
    border-radius: 15px;
    font-weight:700;
    background-color:#7b687b ;
    transition: background-color 0.2s;
    &:hover{
        background-color:#FFF;
    }
`

export const Button = ({texto, event}: IButton) =>{
 return(
    <Butao onClick={event}>
        {texto}
    </Butao>
 )
}