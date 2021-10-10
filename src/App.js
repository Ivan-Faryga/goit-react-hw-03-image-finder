import React, { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/ImageGallery/ImageGallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ImageGallery />
        <Loader />
      </div>
    );
  }
}

export default App;
