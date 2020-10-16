import React from "react";

class SearchBox extends React.Component {
  state = { text: "" };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.onSubmit(e)}>
          <div className="field">
            <label>Search Images: </label>
            <input
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
