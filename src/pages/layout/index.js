import React from 'react';
import Layout from './styles.js';
import Navbar from '../../components/navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
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
        </Switch>
        
      </Router>
      
    </Layout>
  );
}

export default App;
