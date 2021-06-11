import { Component } from "react";
import { Router,Link } from "react-router-dom";
import $ from "jquery";

export class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: props.show==='on' ?true:false,
    };
  }

  setIcon = () => {
    let className = "";

    switch (this.props.typeAlert) {
      case "warning":
        className = "fas fa-exclamation bg-warning p-3";
        break;
      case "danger":
        className = "fas fa-times bg-danger p-3";
        break;

      default:
        className = "fas fa-check bg-success";
        break;
    }

    return (
      <i className={` rounded-circle text-white p-2 ${className} icons`}></i>
    );
  };
  hideAlert = (e) => {
    $(e.target).parent().addClass('hide')
  };
  render() {
    return this.state.visibility ? (
        <>
          <div
            className={`${
              this.props.typeAlert ?? "success"
            } p-3 alert-container position-fixed bg-white hide`}
          >
            {this.setIcon()}
            <span className="alert-content fw-bold">{this.props.children} </span>
            <i className="fas fa-times dismiss mx-auto cursor-pointer" onClick={this.hideAlert}></i>
            {this.props.link ? (
              <Router>
                  <Link
                to={`${this.props.link}`}
                className="bg-colored fw-bold px-3 py-2 fs-5 rounded-pill text-decoration-none text-white link"
              >
                Plus &rarr;
              </Link>
              </Router>
            ) : (
              ""
            )}
          </div>
        </>
      ):''
  }
}
