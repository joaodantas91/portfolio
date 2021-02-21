import React from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import {
  // BrowserRouter as Router,
  HashRouter,
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
      <HashRouter hashType="slash">
        <Navbar />
        <Route render={({location})=> (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              timeout={450}
              classNames="fade"
            >

              <Switch location={location}>
                <Route exact path="/">
                  <Home/>
                </Route>

                <Route exact path="/techs">
                  <Techs/>
                </Route>

                <Route exact path="/projects" >
                  <Projects />
                </Route>

                <Route path="*">
                  <h1>Página não encontrada</h1>
                </Route>
              </Switch>

            </CSSTransition>
          </TransitionGroup>
        )} />
        
        
      </HashRouter>
      
    </Container>
  );
}

export default Layout;
