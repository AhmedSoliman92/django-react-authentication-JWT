import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Home,Login,Logout,Register } from './containers';
import Layout from './hoc/Layout';
import { useState } from 'react';
import './App.css'
const App = ()=>{
  const [isLogged,setIsLogged] = useState(false)

  return(
    <Router>
      <Layout isLogged={isLogged}  setIsLogged={setIsLogged}>
      <Switch>
        <Route exact path='/'>
          <Login isLogged={isLogged}  setIsLogged={setIsLogged}/>
        </Route>
        <Route exact path= '/register' component={Register}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path= '/logout'>
          <Logout isLogged={isLogged} setIsLogged={setIsLogged}/>
        </Route>
      </Switch>
    </Layout>
  </Router>
  );
};

export default App;