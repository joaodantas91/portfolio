import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import { Scrollbars } from "react-custom-scrollbars";

import Wrapper from "./styles";
import Container from "../../components/Container/styles";
import { motion } from "framer-motion";

function Home (props) {
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
              <h3>Front-end Developer</h3>
            </div>

            <div className="description">
              <p>
                Front-end developer with nearly four years of experience. I have a special focus on creating accessible, responsive, and high-performance websites, following industry best practices. I am constantly seeking opportunities to create pixel-perfect websites that provide an exceptional user experience.
              </p>
              <p>
                My technical skills include working with technologies such as React, Next.js, TypeScript, JavaScript and NodeJS. With my knowledge, I am capable of creating complete and efficient solutions. In addition to my technical expertise, I am a dedicated collaborator and passionate about continuous learning and growth. I am adept at working both in collaborative teams and autonomously, always seeking innovative solutions and overcoming challenges.
              </p>
            </div>

            <div className="links">
              <a
                href="https://www.linkedin.com/in/joaodantas91/?locale=en_US"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedInIcon width={18} />
                /joaodantas91
              </a>
              <a
                href="https://github.com/joaodantas91"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHubIcon width={18} />
                /joaodantas91
              </a>
              <a
                href="mailto:joaostadantas@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <EmailIcon width={18} />
                joaostadantas@gmail.com
              </a>

            </div>
          </Wrapper>
        </Scrollbars>
      </Container>
    </motion.div>
  );
}

export default Home;
