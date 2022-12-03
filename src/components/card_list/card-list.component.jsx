import { Component } from "react";

class CardList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.monster.name}</h1>
      </div>
    );
  }
}

export default CardList;
