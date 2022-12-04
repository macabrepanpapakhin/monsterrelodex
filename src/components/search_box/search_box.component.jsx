import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChange}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default SearchBox;
