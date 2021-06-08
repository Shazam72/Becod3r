import { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { InputEmail, InputText, InputPassword } from "../inputs/index";
import { SubmitForm as BtnSubmitForm} from "../buttons/index";
import validator from "validator";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: "Connexion",
      formData:this.getFormdata.bind(this),
      formStatutOK: false,
    };
  }


  getFormdata=()=>{
    
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
  };

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center flex-column form-container login my-4rem">
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          action={this.props.action ?? "/"}
          autoComplete="off"
          className="p-5"
        >
          <h2 className="fw-bold fs-1 colored text-center">Connexion</h2>
          <div className="form-body">
            <InputEmail marginX="mx-auto" marginY="my-5rem"></InputEmail>
            <InputPassword
              labelName="Mot de passe"
              name="password"
              marginY="my-5rem"
            ></InputPassword>
            <InputPassword
              labelName="Confirmation mot de passe"
              name="password"
              marginY="my-5rem"
            ></InputPassword>

            <div className="btns d-flex flex-column align-items-center">
              <BtnSubmitForm>Se connecter</BtnSubmitForm>
              <p className="text-center">
                Vous n'avez pas de compte ?
                <br />
                Alors <br />
                <Link to="/logup" className="text-decoration-none fw-bold fs-2">
                  Inscrivez-vous
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    );

    //     return (
    //       <section className="d-flex justify-content-center align-items-center flex-column form-container my-4rem">
    //         <form
    //           onSubmit={this.handleSubmit}
    //           method="POST"
    //           action={this.props.action}
    //           autoComplete="off"
    //           className="p-5"
    //         >
    //           <h2 className="fw-bold fs-1 colored text-center">Connexion</h2>
    //           <div className="form-body">
    //             <div className="form-group position-relative my-4rem anim-label">
    //               <input
    //                 type="email"
    //                 name="email"
    //                 className="outline-none border-0 fs-3 w-100 h-100"
    //                 onInput={this.handleTypingInput}
    //                 value={this.state.email}
    //               />
    //               <label className="pointer-events-none position-absolute fw-bold">
    //                 E-mail
    //               </label>
    //               <div className="underlined"></div>
    //             </div>

    //             <div className="form-group position-relative my-4rem anim-label">
    //               <input
    //                 type="password"
    //                 name="password"
    //                 className="outline-none border-0 fs-3 w-100 h-100"
    //                 onInput={this.handleTypingInput}
    //                 value={this.state.password}
    //               />
    //               <label className="pointer-events-none position-absolute fw-bold">
    //                 Mot de passe
    //               </label>
    //               <div className="underlined"></div>
    //               <i
    //                 onClick={this.eyeAction}
    //                 className="fas fa-eye position-absolute colored"
    //               ></i>
    //             </div>

    //             <div className="form-group position-relative my-4rem anim-label">
    //               <input
    //                 type="password"
    //                 name="password_confirm"
    //                 className="outline-none border-0 fs-3 w-100 h-100"
    //                 onInput={this.handleTypingInput}
    //                 value={this.state.password_confirm}
    //               />
    //               <label className="pointer-events-none position-absolute fw-bold">
    //                 Confirmation mot de passe
    //               </label>
    //               <div className="underlined"></div>
    //               <i
    //                 onClick={this.eyeAction}
    //                 className="fas fa-eye position-absolute colored"
    //               ></i>
    //             </div>

    //             <div className="btns d-flex flex-column align-items-center">
    //               <button
    //                 type="submit"
    //                 className="rounded-pill px-5 py-3 my-4 fw-bold bg-none text-white bg-colored border-0 fw-bold"
    //               >
    //                 Se connecter
    //               </button>
    //               <p className="text-center">
    //                 Vous n'avez pas de compte ?
    //                 <br />
    //                 Alors <br />
    //                 <Link to="/logup" className="text-decoration-none fw-bold fs-2">
    //                   Inscrivez-vous
    //                 </Link>
    //               </p>
    //             </div>
    //           </div>
    //         </form>

    // <InputEmail marginY="my-5"></InputEmail>
    // <InputEmail marginY="my-5"></InputEmail>
    //       </section>
    //     );
  }
}
