import React from "react";
import ReactDom from "react-dom";
import ImageList from "./ImageList";

import SearchBar from "./SearchBar";
import UnSplashApi from "../api/UnSplashApi";
class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const response = await UnSplashApi.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onChildSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
