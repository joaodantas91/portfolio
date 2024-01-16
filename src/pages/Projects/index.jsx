import React from "react";
import Container from "../../components/Container/styles";
import { Wrapper } from "./styles";
import { Scrollbars } from "react-custom-scrollbars";
import { motion } from "framer-motion";

// Frame
import Chrome from "./img/chrome.svg";

function Projects () {
  const projects = [
    {
      href: "https://investors.thecignagroup.com/overview/default.aspx",
      src: process.env.PUBLIC_URL + "/img/projects/cigna.png",
    },
    {
      href: "https://ir.cardinalhealth.com/overview/default.aspx",
      src: process.env.PUBLIC_URL + "/img/projects/cardinal-health.png",
    },
    {
      href: "https://investor.townebank.com/overview/default.aspx",
      src: process.env.PUBLIC_URL + "/img/projects/towne-bank.png",
    },
    {
      href: "https://www.redemagic.com/cases/3m-littmann-club/",
      src: process.env.PUBLIC_URL + "/img/projects/littmann.png",
    },
    {
      href: "https://www.redemagic.com/cases/tenda-ta-no-tenda-ta-na-mao/",
      src: process.env.PUBLIC_URL + "/img/projects/tenda.png",
    },
    {
      href: "https://www.redemagic.com/cases/banrisul-eu-acredito/",
      src: process.env.PUBLIC_URL + "/img/projects/banrisul.png",
    },
    {
      href: "https://blog.ceabs.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/ceabs.png",
    },
    {
      href: "http://www.portodiassaude.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/pds.png",
    },
    {
      href: "https://www.eurolubs.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/eurolubs.png",
    },
    {
      href: "https://www.clinicamedicalcenter.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/medical-center.png",
    },
    {
      href: "https://www.ihebe.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/ihebe.png",
    },
    {
      href: "http://www.dsmpa.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/dsm.png",
    },
    {
      href: "http://aumed.sitebeta.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/aumed.png",
    },
    {
      href: "https://www.casacharlotte.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/casa-charlote.png",
    },
    {
      href: "https://www.belembioenergia.com.br/",
      src: process.env.PUBLIC_URL + "/img/projects/belembioenergia.png",
    },
  ];

  console.log(process.env.PUBLIC_URL);

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
            <h2>Projetos</h2>
            <div className="frames">
              {projects.map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="frame"
                >
                  <img src={Chrome} className="frame-img" alt="frame" />
                  <img src={project.src} className="project" alt="frame" />
                </a>
              ))}
            </div>
          </Wrapper>
        </Scrollbars>
      </Container>
    </motion.div>
  );
}

export default Projects;
