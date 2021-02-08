import React from 'react';
import Container from './styles.js';
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Projects from '../../components/Projects';
import { TransitionGroup, CSSTransition} from 'react-transition-group'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Layout() {
  return (
    <Container>
      <Router basename="/portfolio">
        <Navbar />
        <Route render={({location})=> (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >

              <Switch location={location}>
                <Route exact path="/">
                  <Home nome="João"/>
                </Route>

                <Route exact path="/teste">
                  <Home nome="teste"/>
                </Route>

                <Route exact path="/projects" >
                  <Projects />
                </Route>
              </Switch>

            </CSSTransition>
          </TransitionGroup>
        )} />
        
        
      </Router>
      
    </Container>
  );
}

export default Layout;
