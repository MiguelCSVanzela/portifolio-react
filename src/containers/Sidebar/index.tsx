import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

const Sidebar = () => (
    <aside>
      <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Miguel Claudio</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>MiguelCSVanzela</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro FrontEnd</Descricao>
      <BotaoTema>Troca Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )


export default Sidebar

