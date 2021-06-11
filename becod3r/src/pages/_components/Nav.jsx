import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.fetchingLink = "";
    this.root = React.createRef();
  }

  handleClick = (e) => {
    this.handleLoginBtn.bind(this);
    $(e.target).addClass("active").siblings("a").removeClass("active");
  };

  componentDidMount() {}
  handleLoginBtn = () => {
    setTimeout(() => {
      if (window.location.pathname.includes("/login")) {
        console.log("login");
      } else if (window.location.pathname.includes("/logup")) {
        console.log("login");
      }
    }, 1000);
  };

  // fetchNav=()=>{
  //     if (this.fetchingLink==='')
  //         break;
  //     else{

  //     }
  // }

  render() {
    return (
      <header
        ref={this.root}
        className="container-fluid d-flex justify-content-between align-items-center px-5 main-header position-"
      >
        <Link to="/" className="">
          <img src="/img/logo.png" alt="Becod3r" className="logo" />
        </Link>
        <nav className="offset-md-5 col-xs-10 d-flex justify-content-between align-items-center fw-bolder basic-navbar">
          <Link
            onClick={this.handleClick}
            to="/cours"
            className="text-decoration-none colored colored-hover border-down-colored mx-3"
          >
            Cours
          </Link>
          <Link
            onClick={this.handleClick}
            to="/formations"
            className="text-decoration-none colored colored-hover border-down-colored mx-3"
          >
            Formations
          </Link>
          <Link
            onClick={this.handleClick}
            to="/about"
            className="text-decoration-none colored colored-hover border-down-colored mx-3"
          >
            <span className="text-uppercase">à</span> propos
          </Link>
          <Link
            onClick={this.handleClick}
            to="/login"
            className="text-decoration-none px-3 py-2 text-white bg-colored rounded-pill mx-3"
          >
            Se connecter
          </Link>
        </nav>
      </header>
    );
  }
}
