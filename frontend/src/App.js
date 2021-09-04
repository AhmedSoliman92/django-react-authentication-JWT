import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Home,Login,Logout,Register } from './containers';
import Layout from './hoc/Layout'
const App = ()=>(
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path= '/register' component={Register}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path= '/logout' component={Logout}/>
      </Switch>
    </Layout>
  </Router>
);

export default App;