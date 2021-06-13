import { Component } from "react";

export class CourseCard extends Component {




  handleClick=(e)=>{

  }
  render() {
    return (
      <section onClick={this.handleClick} className="course-card m-5 cursor-pointer">
        <div class="shadow card mb-3" style={{maxWidth:"90%"}} style={{minHeight:"19rem"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={this.props.img ?? "img/base-image.png"} alt="Image de cours" />
            </div>
            <div class="col-md-8 my-auto">
              <div class="card-body">
                <h5 class="card-title fs-2 fw-bold colored">{this.props.titre ?? "Titre du cours"}</h5>
                <p class="card-text">
                  {this.props.children}
                </p>
                <p class="card-text">
                  <small class="text-muted">{this.props.dateCours ??"Date de mise en  ligne"}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
