import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
    };
  }

  componentDidMount() {
    fetch("/api/genres")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((genres) => {
        this.setState({ genresList: genres.data });
      })
      .catch((error) => console.log(error));
  }

  changeColor(){
      let titulo = document.querySelector('h6');
      titulo.classList.toggle('bg-secondary');
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver = {() => this.changeColor() }>
                Genres in Data Base
              </h6>
            </div>
            <div className="card-body fondoCaja">
              <div className="row">
                {this.state.genresList.map((genre, index) => {
                  return < Genre {...genre} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GenresInDb;
