import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UsersTableComponent from "./Components/UsersTableComponent";
import UserForm from "./Components/UserForm";
import NavbarComponent from "./Components/NavbarComponent";
import UserDetailComponent from "./Components/UserDetailComponent";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import HomeComponent from "./Components/HomeComponent";
// import {useForm} from "react-hook-form";

function App() {
  return (
      <Router>
    <div className="App">
    <NavbarComponent/>
    <Switch>
      <Route path="/" exact component={UsersTableComponent} />
      <Route path="/userform" component={UserForm} />
    <Route path="/usertable" component={UsersTableComponent}/>
    <Route path="/userdetail" component={UserDetailComponent}/>
    <Route path="/userform/:id" component={UserForm}/>
    <Route path="/userdetail/:id" component={UserDetailComponent}/>
    </Switch>
    </div>
      </Router>
  );
}

export default App;
