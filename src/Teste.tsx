import styled from "styled-components";

type BotaoProps = {
  principal: boolean,
  fontSize?: string
}
const Botao = styled.button<BotaoProps>`
  color: #161313;
  background-color: ${(props) => (props.principal ? "#2bdb39" : "#47ffff")};
  font-size: ${(props) => props.fontSize || "16px"};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;


  span{
    text-decoration: line-through;
  }
`

function Teste(){
  return (
    <>
  <Botao principal fontSize="20px">Olá, sou o botão principal</Botao>
  <Botao principal={false}>E eu sou o secundário</Botao>
  <BotaoPerigo principal as="a">
    <span>
      Perigo
      </span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
