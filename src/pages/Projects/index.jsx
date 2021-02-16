import React from 'react';
import Container from '../../components/Container/styles';
import {Wrapper} from './styles'
import { Scrollbars } from 'react-custom-scrollbars';

// Frame
import Chrome from './img/chrome.svg';

// Projects
import Alubar from './img/alubar.png';
import Aumed from './img/aumed.png';
import Dsm from './img/dsm.png';
import Eurolubs from './img/eurolubs.png';
import Ihebe from './img/ihebe.png';
import Medicalcenter from './img/medical-center.png';
import Pds from './img/pds.png';

function Projects() {
  return (
    <Container>
      <Scrollbars>
        <Wrapper>
        <h2>Projetos</h2>
          <div className="frames">
            <a href="http://www.portodiassaude.com.br/" target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame" />
              <img src={Pds} className="project" alt="frame" />
            </a>

            <a href="http://alubar2020.sitebeta.com.br/" target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame"/>
              <img src={Alubar} className="project" alt="frame" />
            </a>

            <a href="http://eurolubs.sitebeta.com.br/" target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame"/>
              <img src={Eurolubs} className="project" alt="frame" />
            </a>

            <a href="http://medicalcenter.sitebeta.com.br/" target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame"/>
              <img src={Medicalcenter} className="project" alt="frame" />
            </a>


            <a href="http://ihebe.sitebeta.com.br/" target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame"/>
              <img src={Ihebe} className="project" alt="frame" />
            </a>


            <a href="http://www.dsmpa.com.br/  " target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame"/>
              <img src={Dsm} className="project" alt="frame" />
            </a>

            <a href="http://aumed.sitebeta.com.br/" target="_blank" rel="noreferrer" className="frame">
              <img src={Chrome} className="frame-img" alt="frame"/>
              <img src={Aumed} className="project" alt="frame" />
            </a>

          </div>
        </Wrapper>
      </Scrollbars>
    </Container>
  )
}

export default Projects;