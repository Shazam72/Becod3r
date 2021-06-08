import { Component } from "react";
import {Link} from 'react-router-dom'
import { LoginForm } from "./components/forms/LoginForm";
import { LogupForm } from "./components/forms/LogupForm";

export default class LogInUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      mode:props.mode ?? 'login',
    }
  }
  render() {
    return (
      <>
        <Link className="position-fixed px-4 py-2 text-decoration-none fw-bold bg-colored text-white rounded-pill mx-5" to="/">&larr;Retourner à l'accueil</Link>
        { this.state.mode ==='login' ? <LoginForm /> : <LogupForm /> }
      </>
    );
  }
}
