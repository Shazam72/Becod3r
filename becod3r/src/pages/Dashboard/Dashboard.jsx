import { Component } from "react";
import { Link } from "react-router-dom";


export class Dashboard extends Component{


    render(){
        return(
            <>
                <section>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link>&larr;&nbsp;&nbsp;Retour</Link>
                        <div className="date">
                            {(new Date).toLocaleDateString()}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}