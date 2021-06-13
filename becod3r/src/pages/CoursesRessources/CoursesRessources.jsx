import { Component } from "react";
import { Nav, Footer,SimpleSearchBar } from "../_components";
import { CategoriesNav } from "./CategoriesNav";

export class CoursesRessources extends Component {
  render() {
    return (
      <>
        <Nav noSpace={false}>
          <SimpleSearchBar ID="category-search" placeHolder="Rechercher un cours..." />
        </Nav>
        <section className="ressources-container">
          <section>
          </section>
          <section></section>
        </section>
        <Footer />
      </>
    );
  }
}
