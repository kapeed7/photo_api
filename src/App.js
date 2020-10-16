import "./styles.css";
import React from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import SearchBox from "./components/SearchBox";

class App extends React.Component {
  state = { images: [] };

  onSubmit = async (text) => {
    const images = await unsplash.get("/search/photos", {
      params: {
        query: text
      }
    });

    this.setState({ images: images.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBox onFormSubmit={this.onSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
