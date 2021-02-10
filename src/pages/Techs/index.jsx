import React, {useRef} from 'react';

import Container from '../../components/Container/styles';
import { Wrapper } from './styles';
import images from './images';

const Techs = function() {
  const containerRef = useRef();

  return (
    <Container ref={containerRef}>
      
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
    </Container>
  );
}

export default Techs;