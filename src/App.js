import React from 'react'
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Auth from './components/Login/Auth'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute'
function App() {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Auth} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
