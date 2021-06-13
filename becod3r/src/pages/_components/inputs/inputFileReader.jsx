import React, { Component } from "react";

export class InputFileReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: props.image ?? "/img/user.png",
    };

    this.imgRef = React.createRef();
  }

  handleChange = (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = () => {
      this.setState({ currentImage: reader.result }, () => {
        this.imgRef.current.style.backgroundImage = `url(${this.state.currentImage})`;
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <>
        <div
          ref={this.imgRef}
          style={{
            background: `url(${this.state.currentImage}) no-repeat center center`,
          }}
          className=" file-reader-img mx-5 position-relative"
        >
          <label htmlFor="upload" className="position-absolute cursor-pointer">
            <i className="fas fa-camera fs-5rem"></i>
          </label>
          <input type="file" hidden id="upload" onChange={this.handleChange} />
        </div>
      </>
    );
  }
}
