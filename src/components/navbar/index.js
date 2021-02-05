import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {Navbar, Button} from './styles';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';

const LeftNavbar = function () {
  



  // const handleSetCurrent = function(current) {
  //   if ( current !== before ) {

  //     setBefore(current);
  //   }
  // }

  const [before, setBefore] = useState(''); 
  const [teste, setTeste] = useState('');
  const [current, setCurrent] = useState('');
   

  useMemo(() => { 
    if ( current !== before ) {
      // teve mundança
      console.log(current);
      console.log(before);
      setTeste(before);
      setBefore(current);
      //iguais
    }
  },[current]);




  return (
    // 
    <Navbar before={teste}>
      <NavLink to="/" activeClassName="active" id="a1" onClick={()=>setCurrent('1')}  exact={true}>
        <Button>
          <HomeIcon />
        </Button>
      </NavLink>
      <NavLink to="/teste" activeClassName="active" id="a2" onClick={()=>setCurrent('2')} >
        <Button>
          <CodeIcon />
        </Button>
      </NavLink>
      <NavLink to="/projects" activeClassName="active" id="a3" onClick={()=>setCurrent('3')} >
        <Button>
          <WebIcon />
        </Button>
      </NavLink>
    </Navbar>
  );
}

export default LeftNavbar;