import React, { Component } from "react";
import validator from "validator";



export class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      statut: false,
      animateInput: false,
      validInput: "",
      msg: this.renderMsg.bind(this),
    };
  }

  renderMsg = () => {
    let valid = /[a-zA-Z0-9\-.éè]/.test(this.state.value);

    return valid
      ? { type: "success", msgContent: "Valide" }
      : { type: "danger", msgContent: "Vous devez entrer des caractères alpha-numériques" };
  };

  handleTyping = (e) => {
    let inputValue = this.props.onValueChange(e);
    setTimeout(() => {
      this.setState({ value: inputValue });
      this.setState({ animateInput: inputValue ? true : false });
      this.setState({ msg: this.renderMsg() });
      this.handleCharacSize(inputValue);
    }, 0.00001);
  };

  handleCharacSize = (value) => {
    if (value.length > 50)
      this.setState({
        msg: {
          type: "danger",
          msgContent: "La valeur maximale est 50 charactères",
        },
      });
  };

  render() {
    let animateInput = this.state.animateInput;
    return (
      <div
        className={`position-relative input-container ${
          this.props.marginY ?? ""
        } ${this.props.marginX ?? ""}`}
      >
        <input
          type="text"
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
      </div>
    );
  }
}