import { Component } from "react";

export class CourseCard extends Component {
  render() {
    return <section className="course-card row">
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
            <img src="" alt="" className="course-img" />
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
            <div className="fw-bold text-uppercase course-category">WEb</div>
            <h4 className="course-title fw-bold text-capitalize">Apprennez le HTML & Le CSS</h4>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi libero vero aliquid tempora sunt error unde odit voluptas. Porro.
            </p>
        </div>
        
    </section>;
  }
}
