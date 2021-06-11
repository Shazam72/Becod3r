import { Component } from "react";


export class SubmitForm extends Component{

    render(){
        return (
            <button
                type="submit"
                className="rounded-pill px-5 py-3 my-4 fw-bold bg-none text-white bg-colored border-0 fw-bold"
              >
                {this.props.children}
              </button>
        )
    }
}