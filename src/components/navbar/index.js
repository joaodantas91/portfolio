import React from 'react';
import { Link } from 'react-router-dom';

import {Navbar, Button} from './styles';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';

const LeftNavbar = function () {
  return (
    <Navbar>
      <Link to="/">
        <Button>
          <HomeIcon />
        </Button>
      </Link>
      <Link to="/teste">
        <Button>
          <CodeIcon />
        </Button>
      </Link>
    </Navbar>
  );
}

export default LeftNavbar;