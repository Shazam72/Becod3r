import { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false,
    };
  }

  componentDidMount() {
    console.log('sfsff');
    window.location.pathname.includes("login") ||
    window.location.pathname.includes("logup")
      ? this.setState({ hide: true })
      : this.setState({ hide: false });
  }
  render() {
    return this.state.hide ? (
      ""
    ) : (
      <footer className="my-5 mb-0 position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1042 430">
          <path
            fill="#d406d4"
            d="M0,81c24-4.61,47.312-5.017,70-1,52.759,9.341,72.427,43.338,122,46,47.2,2.534,80.332-29.781,123-39a251.293,251.293,0,0,1,100-1c31,6.056,57.03,24.887,95,25,58.265,0.174,75.821-37.806,129-43,66.271-6.472,136.676,36.677,159,52,10.053,6.9,33.927,24.375,62,20,21.411-3.337,31.953-17.322,52-35,38.414-33.875,77.018-45.876,95-46a103,103,0,0,1,35,6l1,366H0V81Z"
          />
        </svg>
        <div className="position-absolute w-100 d-flex justify-content-evenly align-items-center flex-wrap links">
          <ul className="list-unstyled p-3 mx-4">
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Cours
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Formations
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Carrières
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                A propos
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled p-3 mx-4">
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Conditions
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Politiques de confidentialité
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Contactez-nous
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-decoration-none w-100 h100 fw-bold fs-3 hover-darken"
              >
                Aide & Support
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center flex-column">
            <span className="d-inline-block w-100 h100 fw-bold fs-3">
              Réseaux sociaux
            </span>
            <ul className="list-inline">
              <li className="list-inline-item fs-1 px-2">
                <Link to="" className="text-decoration-none hover-darken">
                  <i className="fab fa-facebook hover-darken white"></i>
                </Link>
              </li>
              <li className="list-inline-item fs-1 px-2">
                <Link to="" className="text-decoration-none hover-darken">
                  <i className="fab fa-youtube hover-darken white"></i>
                </Link>
              </li>
              <li className="list-inline-item fs-1 px-2">
                <Link to="" className="text-decoration-none hover-darken">
                  <i className="fab fa-linkedin hover-darken white"></i>
                </Link>
              </li>
              <li className="list-inline-item fs-1 px-2">
                <Link to="" className="text-decoration-none hover-darken">
                  <i className="fab fa-twitter hover-darken white"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
