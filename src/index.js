import React from "react";
import ReactDOM from "react-dom";
import RegisterComponent from "./Register";
import ListOfServicesComponent from "./ListOfServices";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>DBS Ride</h1>

        <ul className="nav-items">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/services">Rides</Link>
          </li>
        </ul>
        <hr />
      </header>

      <Route path="/register" component={RegisterComponent} />
      <Route path="/services" component={ListOfServicesComponent} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
