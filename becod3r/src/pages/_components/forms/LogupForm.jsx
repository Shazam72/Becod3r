import { Component } from "react";
import { Link } from "react-router-dom";
import { InputEmail, InputText, InputPassword } from "../inputs/index";
import { SubmitForm as BtnSubmitForm } from "../buttons/index";
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
      formStatutOK: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  validateForm = () => {
    let { nom, prenom, email, password, password_confirm } = this.state;
    if (
      validator.isAlphanumeric(nom) &&
      validator.isAlphanumeric(prenom) &&
      validator.isEmail(email) &&
      validator.isStrongPassword(password) &&
      password === password_confirm
    ) {
      this.setState({ formStatutOK: true });
      return true;
    }
    this.setState({ formStatutOK: false });
    return false;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validateForm();
    });
    return e.target.value;
  };

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center flex-column form-container my-4rem">
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          autoComplete="off"
          className="p-5"
        >
          <h2 className="fw-bold fs-1 colored text-center">Inscription</h2>
          <div className="form-body">
            <InputText
              labelName="Nom"
              onValueChange={this.handleChange}
              name="nom"
              marginY="my-5rem"
            ></InputText>
            <InputText
              onValueChange={this.handleChange}
              labelName="Prénom(s)"
              name="prenom"
              marginY="my-5rem"
            ></InputText>
            <InputEmail
              onValueChange={this.handleChange}
              labelName="Email"
              name="email"
              marginY="my-5rem"
            ></InputEmail>
            <InputPassword
              onValueChange={this.handleChange}
              labelName="Mot de passe"
              name="password"
              marginY="my-5rem"
            ></InputPassword>
            <InputPassword
              onValueChange={this.handleChange}
              name="password_confirm"
              labelName="Confirmation mot de passe"
              marginY="my-5rem"
            ></InputPassword>
            <div className="btns d-flex flex-column align-items-center">
              {this.state.formStatutOK ? (
                <BtnSubmitForm>S'inscrire</BtnSubmitForm>
              ) : (
                <div className="fw-bold text-danger">
                  Remplissez les champs du formulaire
                </div>
              )}
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
