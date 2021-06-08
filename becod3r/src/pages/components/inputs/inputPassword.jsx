import React, { Component } from "react";
import validator from "validator";

export class InputPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      statut: false,
      animateInput: false,
      validInput: "",
      msg: this.renderMsg.bind(this),
      showPassword:false,
    };
  }

  renderMsg = () => {
    let valid = validator.isStrongPassword(this.state.value);

    return valid
      ? { type: "success", msgContent: "Valide" }
      : {
          type: "danger",
          msgContent:
            "Utilisez des lettres miniscules et majuscules, des chiffres et des caractères spéciaux",
        };
  };

  handleTyping = (e) => {
    let inputValue = e.target.value;
    setTimeout(() => {
      this.setState({ value: inputValue });
      this.setState({ animateInput: inputValue ? true : false });
      this.setState({ msg: this.renderMsg() });
    }, 0.00001);
  };

  eyeAction=(e)=>{
    e.target.classList.contains("fa-eye") ?this.setState({showPassword :true}):this.setState({showPassword :false})
  }

  render() {
    let animateInput = this.state.animateInput;
    return (
      <div
        className={`position-relative input-container ${
          this.props.marginY ?? ""
        } ${this.props.marginX ?? ""}`}
      >
        <input
          type={`${this.state.showPassword ?'text':'password'}`}
          onInput={this.handleTyping}
          name={this.props.name ?? "champDeTexte"}
          className=" outline-none border-0 fs-3 w-100 h-100 position-relative"
          value={this.state.value}
        />
        <label
          className={`pointer-events-none fw-bold position-absolute ${
            animateInput === true ? "animate-on" : ""
          }`}
        >
          {this.props.labelName ?? "Texte"}
        </label>
        <div
          className={`underlined w-100 position-relative ${
            animateInput ? "scale" : ""
          }`}
        ></div>
        <p
          className={`position-absolute fw-bold fs-5 text-${this.state.msg.type}`}
        >
          {this.state.msg.msgContent}
        </p>
        <i
          onClick={this.eyeAction}
          className={`fas fa-${this.state.showPassword ?'eye-slash':'eye'} position-absolute colored`}
        ></i>
      </div>
    );
  }
}
