import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Container from '../../components/Container/styles';
import { Wrapper } from './styles';
import images from './images';

const Techs = function() {
  
  return (
    <Container>
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
        <Wrapper>
          <h2>Minha stack</h2>
          <div className="techs">
            {
              images.stack.map((e)=> 
                <div id={e.id} key={e.id} className="tech">
                  <img src={process.env.PUBLIC_URL + e.src} alt={e.alt}/>
                </div>
              )
            }
          </div>

          <h2>Tecnologias</h2>

          <div className="techs">
            {
              images.techs.map((e)=>
                <div id={e.id} key={e.id} className="tech">
                  <img src={process.env.PUBLIC_URL + e.src} alt={e.alt}/>
                </div>
              )
            }
          </div>
        </Wrapper>
      </Scrollbars>
    </Container>
  );
}

export default Techs;