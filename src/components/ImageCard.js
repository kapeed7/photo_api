import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0, span: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.onLoad);
  }

  onLoad = () => {
    this.setState({
      height: this.imageRef.current.clientHeight,
      width: this.imageRef.current.clientWidth
    });
    let span = Math.ceil(this.state.height / 20);
    this.setState({ span });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} alt={description} src={urls.thumb} />
        <p>
          Height: {this.state.height} Width: {this.state.width}{" "}
        </p>
      </div>
    );
  }
}

export default ImageCard;
