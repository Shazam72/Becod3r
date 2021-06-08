import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home,LogInUp } from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" render={(props)=><LogInUp {...props} mode="login" />} />
      <Route exact path="/logup" render={(props)=><LogInUp {...props} mode="logup" />} />
    </Router>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
