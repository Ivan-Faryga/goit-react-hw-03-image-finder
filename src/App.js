import React, { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
// import Loader from "./components/Loader/Loader";
// import Modal from "./components/Modal/Modal";
import { fetchPictures } from "./services/apiServise";

class App extends Component {
  state = {
    query: "",
    images: [],
  };

  handleChangeQuery = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetchPictures(this.state.query, 1).then((resp) =>
      this.setState({ images: resp })
    );
  };

  render() {
    const { query } = this.state;
    return (
      <div className="App">
        <SearchBar
          query={query}
          handleChange={this.handleChangeQuery}
          onSubmit={this.handleSubmit}
        />
        <ImageGallery images={this.state.images} />
        {/* <Loader />
        <Modal /> */}
      </div>
    );
  }
}

export default App;
