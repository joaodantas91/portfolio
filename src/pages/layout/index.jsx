import React from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from './styles';
import Navbar from '../../components/Navbar';
import Home from '../Home';
import Techs from '../Techs'
import Projects from '../Projects';

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
                  <Home/>
                </Route>

                <Route exact path="/teste">
                  <Techs/>
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
