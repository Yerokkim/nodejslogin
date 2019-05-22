import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Login from './components/Login'
import Landing from './components/Landing'
import Register from './components/Register'

class App extends Component {
render(){
  return(
    <Router>
      <div className="App">
       
      <Navbar/>
      <Route exact path="/" Component={Landing}/>
      <div className="container">
          <Route exact path="/register"Component={Register}/>
        <Route exact path="/login" Component={Login}/>
          <Route exact path="/profile" Component={Profile}/>

<Login/>
      </div>
      </div>
      </Router>
  );
}
}

export default App;
