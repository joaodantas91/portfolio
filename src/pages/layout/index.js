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
      <Router basename="/portfolio" >
        <Navbar />
        <Switch>
          <Route path="/">
            <h1>
              <span>João</span> 
              <span>Dantas</span>
            </h1> 
          </Route>
          <Route path="/teste">
            <h1>
              <span>teste</span> 
              <span>a</span>
            </h1> 
          </Route>
        </Switch>
        
      </Router>
      
    </Layout>
  );
}

export default App;
