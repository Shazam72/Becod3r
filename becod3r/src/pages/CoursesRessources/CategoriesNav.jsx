import { Component } from "react";

export class CategoriesNav extends Component {
  render() {
    return (
      <nav>
        <h2 className="col-12 colored fw-bold">Catégories</h2>
        <ul className="col-12 fw-bold">
          <li>PHP</li>
          <li>HTML</li>
          <li>ReactJs</li>
          <li>Bootstrap</li>
          <li>Apache</li>
          <li>UI/UX Design</li>
          <li>JavaScript</li>
        </ul>
      </nav>
    );
  }
}
