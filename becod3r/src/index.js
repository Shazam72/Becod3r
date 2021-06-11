import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home,LogInUp } from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
require('dotenv').config();

function App() {
  fetch("http://localhost:3001",{
    credentials:"include",
  })
  return (
    <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth/login" render={(props)=><LogInUp {...props} mode="login" />} />
      <Route exact path="/auth/logup" render={(props)=><LogInUp {...props} mode="logup" />} />
      <Route exact path="/get-start" render={(props)=><LogInUp {...props} mode="logup" />} />
      <Route exact path="/profile" render={(props)=><LogInUp {...props} mode="logup" />} />
    </Router>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
