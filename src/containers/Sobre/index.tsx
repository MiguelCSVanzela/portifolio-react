import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { GithubSecao } from "./styles"

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre Mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam culpa voluptatem reiciendis optio tempore corrupti porro accusantium impedit vel. Qui ipsam eius inventore incidunt fugit exercitationem soluta harum suscipit!
      </Paragrafo>
      <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=MiguelCSVanzela&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MiguelCSVanzela&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
    </section>
  )
}

export default Sobre
