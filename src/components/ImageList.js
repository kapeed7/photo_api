import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map((image) => (
      <ImageCard key={image.id} image={image} />
    ));
    return <div className="image-list">{images} </div>;
  }
}

export default ImageList;
