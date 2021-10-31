import react from "react";
import React from "react";
import ReactDom from "react-dom";

class SearchBar extends react.Component {
  state = {
    term: "",
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onChildSubmit(this.state.term);
    //console.log(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Image search</label>
            <input
              type="text"
              id="search"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
