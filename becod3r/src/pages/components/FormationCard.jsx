import { Component } from "react";
import { Link } from "react-router-dom";

export class FormationCard extends Component {

  renderImg = () => {
    if (this.props.img) return this.props.img;
    else return "/img/base-image.png";
  };

  render() {
    return (
      <div className="d-flex flex-column justify-content-center formcard py-5 px-3 m-5">
        <div className="overflow-hidden text-center rounded-circle d-flex justify-content-center formcard-img">
          <img src={this.renderImg()} alt="Fomation" />
        </div>
        <div className="formcard-title colored fw-bolder text-center fs-3">
          {this.props.title}
        </div>
        <div className="formcard-footer d-flex justify-content-between align-items-center fs-5">
          <span>
            Par <span className="author fw-bold text-italic">{this.props.author}</span>
          </span>
          <Link
            to=""
            className="text-decoration-none fw-bolder px-3 py-2 rounded-pill btn-details"
          >
            Détails
          </Link>
        </div>
      </div>
    );
  }
}
