import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Scrollbars } from "react-custom-scrollbars";

import Wrapper from "./styles";
import Container from "../../components/Container/styles";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <Scrollbars>
          <Wrapper>
            <div className="profile">
              <img
                src="https://avatars.githubusercontent.com/u/57996434?s=460&u=fc4d664173cf7090735928576e317f1a7551e76c&v=4"
                alt=""
              />
            </div>

            <div className="title">
              <h1>João Dantas</h1>
              <h3>Desenvolvedor Front-end</h3>
            </div>

            <div className="description">
              <p>Olá, seja bem vindo ao meu portifólio.</p>
              <p>
                Me chamo João Dantas e atualmente moro em Belém/Pa. Meus estudos
                em desenvolvimento web começaram em fevereiro de 2020. Em agosto
                de 2020 consegui um estágio, onde pude colocar em prática meus
                aprendizados e realizar novos projetos, me desafiando a cada
                dia. Dessa forma, pude melhorar minhas habilidades e ser
                promovido para desenvolvedor front-end junior na mesma empresa.
                Nesse processo atuei no desenvolvimento, na manutenção e no
                aprendizado de resolver problemas reais.
              </p>
            </div>

            <div className="links">
              <a
                href="https://www.linkedin.com/in/joaodantas91/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedInIcon style={{ height: 42 }} />
              </a>
              <a
                href="https://github.com/joaodantas91"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHubIcon />
              </a>
            </div>
          </Wrapper>
        </Scrollbars>
      </Container>
    </motion.div>
  );
}

export default Home;
