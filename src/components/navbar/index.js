import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {Navbar, Button} from './styles';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';

const LeftNavbar = function () {
  useEffect(() => {
  
  });

  function teste(props) {
    console.log(props);
  }

  return (
    <Navbar>
      <NavLink to="/" activeClassName="active"  exact={true} onClick={()=>{teste()}}>
        <Button>
          <HomeIcon />
        </Button>
      </NavLink>
      <NavLink to="/teste" activeClassName="active">
        <Button>
          <CodeIcon />
        </Button>
      </NavLink>
      <NavLink to="/projects" activeClassName="active">
        <Button>
          <WebIcon />
        </Button>
      </NavLink>
    </Navbar>
  );
}

export default LeftNavbar;