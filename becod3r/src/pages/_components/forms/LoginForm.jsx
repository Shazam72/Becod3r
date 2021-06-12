import { Component } from "react";
import { Link } from "react-router-dom";
import { InputEmail, InputPassword } from "../inputs";
import { SubmitForm as BtnSubmitForm } from "../buttons";
import validator from "validator";



export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: "Connexion",
      formData: this.getFormdata.bind(this),
      email: "",
      password: "",
      password_confirm: "",
      formStatutOK: false,
    };
  }

  getFormdata = () => {};
  handleSubmit = (e) => {
    e.preventDefault();
    let {email,password,password_confirm} =this.state
    fetch(e.target.action,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password,password_confirm}),
      credentials:'include'
    }).then(resp=>resp.json()).then(resp=>{
      console.log(resp);
    })
  };

  validateForm = () => {
    let { email, password, password_confirm } = this.state;
    if (
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
      <section className="d-flex justify-content-center align-items-center flex-column form-container login my-4rem">
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          autoComplete="off"
          className="p-5"
        >
          <h2 className="fw-bold fs-1 colored text-center">Connexion</h2>
          <div className="form-body">
            <InputEmail
              marginX="mx-auto"
              name="email"
              onValueChange={this.handleChange}
              marginY="my-5rem"
            ></InputEmail>
            <InputPassword
              labelName="Mot de passe"
              name="password"
              marginY="my-5rem"
              onValueChange={this.handleChange}
            ></InputPassword>
            <InputPassword
              labelName="Confirmation mot de passe"
              name="password_confirm"
              marginY="my-5rem"
              onValueChange={this.handleChange}
            ></InputPassword>

            <div className="btns d-flex flex-column align-items-center">
              {this.state.formStatutOK ? (
                <BtnSubmitForm>Se connecter</BtnSubmitForm>
              ) : (
                <div className="fw-bold text-danger">
                  Remplissez les champs du formulaire
                </div>
              )}
              <p className="text-center">
                Vous n'avez pas de compte ?
                <br />
                Alors <br />
                <Link to="/auth/logup" className="text-decoration-none fw-bold fs-2">
                  Inscrivez-vous
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
