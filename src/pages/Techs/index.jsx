import React from 'react';

import Container from '../../components/Container/styles';
import { Wrapper } from './styles';
import images from './images';

const Techs = function() {
  
  return(
    <Container>
      <Wrapper>
        <h2>Minha stack</h2>
        <div className="techs">
          {
            images.map((e)=> 
              <div key={e.id} className="tech">
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