import React from 'react';
import { Container, Wrapper } from './styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home(props) {

  return (
    <Container>
      <Wrapper>

        <div className="title">
          <h1>João Dantas</h1>
          <h3>Desenvolvedor Front-end</h3>
        </div>
        

        <div className="description">
          <p>Olá, seja bem vindo ao meu portifólio.</p>
          <p>
            Me chamo João Dantas e atualmente moro em Belém/Pa. Atuo no desenvolvimento de sites desde agosto de 2020, entretanto comecei meus estudos em desenvolvimento web em fevereiro de 2020.
      
            Em agosto de 2020 consegui um estágio, onde pude colocar em prática meus aprendizados e realizar novos projetos, me desafiando a cada dia. Dessa forma, pude melhorar minhas habilidades e ser promovido para desenvolvedor front-end junior na mesma empresa.
          </p>
          <p>
            Atuei em diversos projetos, na desenvolvimento e na manutenção, onde pude fazer ajustes e resolver problemas reais.
          </p>
        </div>

        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/57996434?s=460&u=fc4d664173cf7090735928576e317f1a7551e76c&v=4" alt=""/>
        </div>

        <div>
          <LinkedInIcon />
          <GitHubIcon />
        </div>
   
      </Wrapper>
    </Container>
  )
}

export default Home;