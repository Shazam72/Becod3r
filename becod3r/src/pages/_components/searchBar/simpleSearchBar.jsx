import { Component } from "react";

export class SimpleSearchBar extends Component{

    render(){
        return (
            <>
                <input type="text" id={this.props.ID}  placeholder={this.props.placeHolder} className="rounded-pill colored-placeholder border-colored outline-none px-5 "/>
            </>
        );
    }
}