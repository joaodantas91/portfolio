import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Container from "../../components/Container/styles";
import { Wrapper } from "./styles";
import images from "./images";
import { motion } from "framer-motion";

const Techs = function () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <Scrollbars style={{ width: "100%", height: "100vh" }}>
          <Wrapper>
            <h2>Minha stack</h2>
            <div className="techs">
              {images.stack.map((e) => (
                <div id={e.id} key={e.id} className="tech">
                  <img src={process.env.PUBLIC_URL + e.src} alt={e.alt} />
                </div>
              ))}
            </div>

            <h2>Tecnologias</h2>

            <div className="techs">
              {images.techs.map((e) => (
                <div id={e.id} key={e.id} className="tech">
                  <img src={process.env.PUBLIC_URL + e.src} alt={e.alt} />
                </div>
              ))}
            </div>
          </Wrapper>
        </Scrollbars>
      </Container>
    </motion.div>
  );
};

export default Techs;
