import "./App.css";
import CardList from "./components/card_list/card-list.component";
import SearchBox from "./components/search_box/search_box.component";
import "./components/search_box/search_box.styles.css";
import "./components/card_list/card.styles.css";
import "./components/card_list/card_list.styles.css";
import { useState, useEffect } from "react";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             //  console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchString: event.target.value.toLowerCase() };
//     });
//   };
//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;
//     const filterdMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchString)
//     );
//     console.log("rendering in main");

//   }
// }

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterdMonsters, setFilterdMonsters] = useState([]);
  const onSearchChange = (event) => {
    const searchString1 = event.target.value.toLowerCase();
    setSearchString(searchString1);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const f = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    console.log("effect fired");
    setFilterdMonsters(f);
  }, [monsters, searchString]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        onSearchChange={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filterdMonsters} />
    </div>
  );
};
export default App;
