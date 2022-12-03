import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Index from "./components/search_box";

import CardList from "./components/card_list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLowerCase() };
    });
  };
  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    return (
      <div className="App">
        <Index onSearchChange={onSearchChange} />
        {filterdMonsters.map((monster) => {
          return (
            // <div key={monster.name}>
            //   <h1>{monster.name}</h1>
            // </div>
            <CardList key={monster.id} monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default App;
