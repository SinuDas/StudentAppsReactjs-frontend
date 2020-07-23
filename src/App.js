import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";
import "./index";
import AddTutorial from "./components/add-tutorial.component";
import ListData from "./components/showdata";
class App extends Component {
  render() {
    return (
      <Router>
        <header><h3 className="title">STUDENT DETAILS [ADD & SHOW]</h3></header>          
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/"} className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">ADD DATA</Link>
              </li>
              <li className="nav-item">
                <Link to={"/list"} className="nav-link" >LIST DATA</Link>
              </li> 
            </div>
          </nav>
           <div>
             <Switch>              
               <Route exact path="/add" component={AddTutorial} /> 
                <Route exact path="/list" component={ListData} />               
            </Switch> 
          </div> 
      </Router>
    );
  }
}

export default App;