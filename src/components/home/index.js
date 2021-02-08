import React, { useEffect } from 'react';
import { Container } from './styles';
import { useLocation } from 'react-router-dom';



function Home(props) {

  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // });

  return (
    <Container>
      <h1>{props.nome}</h1>
    </Container>
  )
}

export default Home;