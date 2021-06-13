import { Component } from "react";
import { Nav, Footer, SimpleSearchBar, CourseCard } from "../_components";
import { CategoriesNav } from "./CategoriesNav";

export class CoursesRessources extends Component {





  handleCatChange=(e)=>{
    console.log(e.target);
  }
  render() {
    return (
      <>
        <Nav noSpace={false}>
          <SimpleSearchBar
            ID="category-search"
            placeHolder="Rechercher un cours..."
          />
        </Nav>
        <section className="ressources-container">
          <header>
            <h1 className="fw-bold fs-4rem text-center my-4 colored">
              Découvrez nos cours gratuits et accessibles
            </h1>
          </header>
          <section className="align-items-center flex-wrap">
            <select onChange={this.handleCatChange} class="form-select fs-3 mx-4" aria-label="" style={{width:"20%"}}>
              <option selected>Catégories</option>
              <option value="1">PHP</option>
              <option value="2">Java</option>
              <option value="3">Bootstrap</option>
            </select>
          </section>
          <CourseCard>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CourseCard>
        </section>
        <Footer />
      </>
    );
  }
}
