import { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { InputEmail, InputText, InputPassword } from "../inputs/index";
import { SubmitForm as BtnSubmitForm} from "../buttons/index";
import validator from "validator";

export class LogupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      date_naissance: "",
      email: "",
      password: "",
      password_confirm: "",
      formStatutOK: true,
    };
  }


  animateInput = (input) => {
    $(input).siblings("label").addClass("animate-on");
    $(input).siblings(".underlined").addClass("scale");
  };
  disableAnimation = (input) => {
    $(input).siblings("label").removeClass("animate-on");
    $(input).siblings(".underlined").removeClass("scale");
  };


  handleSubmit = (e) => {
    e.preventDefault();

    // let formStatus = this.validateForm();
  };

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center flex-column form-container my-4rem">
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          action={this.props.action ?? "/"}
          autoComplete="off"
          className="p-5"
        >
          <h2 className="fw-bold fs-1 colored text-center">Inscription</h2>
          <div className="form-body">
            <InputText labelName='Nom' marginY="my-5rem"></InputText>
            <InputText labelName='Prénom(s)' marginY="my-5rem"></InputText>
            <InputEmail labelName='Email' marginY="my-5rem"></InputEmail>
            <InputPassword labelName='Mot de passe' marginY="my-5rem"></InputPassword>
            <InputPassword labelName='Confirmation mot de passe' marginY="my-5rem"></InputPassword>
            <div className="btns d-flex flex-column align-items-center">
              <BtnSubmitForm>S'inscrire</BtnSubmitForm>
              <p className="text-center">
                Vous avez déja un compte ?
                <br />
                Alors <br />
                <Link to="/login" className="text-decoration-none fw-bold fs-2">
                  Connectez-vous
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
