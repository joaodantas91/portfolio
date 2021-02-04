import React from 'react';
import Container from './styles.js';
import Navbar from '../../components/navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

function Layout() {
  return (
    <Container>
      <Router basename="/portfolio">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>
              <span>João</span> 
              <span>Dantas</span>
            </h1> 
          </Route>
          <Route exact path="/teste">
            <h1>
              <span>Jamer</span> 
              <span>Moraes</span>
            </h1> 
          </Route>
          <Route exact path="/projects">
            <h1>
              <span>Jamer</span> 
              <span>Moraes</span>
            </h1> 
          </Route>
        </Switch>
        
      </Router>
      
    </Container>
  );
}

export default Layout;
