import React, { Component } from "react";
import validator from "validator";

export class InputEmail extends Component {
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
    let valid = validator.isEmail(this.state.value);

    return valid
      ? { type: "success", msgContent: "E-mail valide" }
      : { type: "danger", msgContent: "E-mail invalide" };
  };

  handleTyping = (e) => {
    let inputValue = e.target.value;
    setTimeout(() => {
      this.setState({ value: inputValue });
      this.setState({ animateInput: inputValue ? true : false });
      this.setState({ msg: this.renderMsg() });
    }, 0.00001);
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
          type="email"
          onInput={this.handleTyping}
          name={this.props.name ?? "email"}
          className=" outline-none border-0 fs-3 w-100 h-100 position-relative"
          value={this.state.value}
        />
        <label
          className={`pointer-events-none fw-bold position-absolute ${
            animateInput === true ? "animate-on" : ""
          }`}
        >
          {this.props.labelName ?? "E-mail"}
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
