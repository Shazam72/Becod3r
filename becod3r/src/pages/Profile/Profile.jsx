import { Component } from "react";
import { Link } from "react-router-dom";
import { Footer, Nav } from "../_components/index";
import { InputFileReader } from "../_components/inputs";

export class Profile extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <section className="position-relative">
          <section className="profile-info py-5 d-flex flex-column align-items-center justify-content-strech">
            <h3 className="fw-bold fs-4rem my-4rem colored bordered-title">Informations du profil  <Link to="/profile/edit" render={()=>{}}> <i className="fas fa-pen"></i> </Link></h3>
            <section className="d-flex justify-content-evenly align-items-center flex-wrap">
              <InputFileReader></InputFileReader>
              <div className="fs-1 mx-5 fw-900">
                <div>Nom : <span className="fw-bold fs-2 colored">Zongo</span></div>
                <div>Prénom(s) : <span className="fw-bold fs-2 colored">Zongo</span></div>
                <div>Date de naissance : <span className="fw-bold fs-2 colored">Zongo</span></div>
                <div>E-mail : <span className="fw-bold fs-2 colored">Zongo</span></div>
                <div>Téléphone : <span className="fw-bold fs-2 colored">Zongo</span></div>
                <div>Ville : <span className="fw-bold fs-2 colored">Zongo</span></div>
                <div>Nom : <span className="fw-bold fs-2 colored">Zongo</span></div>
              </div>
            </section>
          </section>
        </section>
        <section className="d-flex flex-column align-items-center justify-content-strech">
          <h3 className="fw-bold fs-4rem my-4rem colored bordered-title">Formations</h3>
          Aucune formation recu
        </section>
        <Footer></Footer>
      </>
    );
  }
}
