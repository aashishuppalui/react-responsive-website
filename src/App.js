import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/sidebar';
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Sidebar/>
    <Navbar/> */}
    {/* <Navbar/> */}
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/signin" component={SigninPage} exact/>
    <Home/>

    </Switch>
    </Router>
  );
}

export default App;
