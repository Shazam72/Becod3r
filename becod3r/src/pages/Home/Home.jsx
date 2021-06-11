import { Component } from "react";
import { Link } from "react-router-dom";
import { FormationCard, Nav, Footer } from "../_components";

export default class Home extends Component {
  render() {
    // fetch('/').then(resp=>resp.json()).then(resp=>console.log(resp))
    return (
      <>
        <Nav />
        <>
          <section
            className="container-fluid d-grid my-5 p-5"
            id="first-section"
          >
            <h2>Tu veux devenir un cod3r toi aussi ?</h2>
            <h3 className="my-3 fs-1">Alors n'attends pas !!!</h3>
            <div className="link-start">
              <Link
                to="/get-start"
                className="text-decoration-none my-3 rounded-pill outline-none border-0 text-white px-5 py-4 fw-bold"
              >
                Commence maintenant
              </Link>
            </div>
            <img
              src="img/dev-activity.svg"
              alt="Activité de développeur"
              id="dev-activity"
              className="mx-auto"
            />
          </section>
          <section className="container-fluid my-5 p-5" id="second-section">
            <h2 className="text-center my-5">
              Accède de manière <span>gratuite</span> et <span>illimité</span> à
              des cours et formations inédites
            </h2>
            <div className="formcards d-flex justify-content-center align-items-center flex-wrap">
              <FormationCard
                img=""
                author="Hervé Renard"
                title="Prenez en main le framework CSS Bootstrap"
              />
              <FormationCard
                img=""
                author="Hervé Renard"
                title="Prenez en main le framework CSS Bootstrap"
              />
              <FormationCard
                img=""
                author="Hervé Renard"
                title="Prenez en main le framework CSS Bootstrap"
              />
              <FormationCard
                img=""
                author="Hervé Renard"
                title="Prenez en main le framework CSS Bootstrap"
              />
              <FormationCard
                img=""
                author="Hervé Renard"
                title="Prenez en main le framework CSS Bootstrap"
              />
            </div>
          </section>
        </>
        <Footer />
      </>
    );
  }
}
