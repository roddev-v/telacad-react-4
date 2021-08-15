import React from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UsersList from "./components/UsersList/UsersList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  onUserAdded(user) {
    this.setState((prevState) => {
      // generam o lista de id-uri, folosind functia map
      // extragem doar proprietatea id si o returnam in functia de callback
      const ids = prevState.users.map((user) => user.id);

      // convertim lista intr-un sir de parametrii folosind operatorul spread
      // functia Math se gaseste in MDN docs si primeste un numar nelimitat de parametrii
      const max = Math.max(...ids);

      // generam un id nou si il setam la fiecare obiect. O sa fie util cand veti vrea sa identificati un utilizator pentru operatia de delete
      user.id = max + 1;
      const newState = {
        users: [...prevState.users, user],
      };
      return newState;
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <UserForm onUserAdded={(user) => this.onUserAdded(user)} />
        <UsersList users={this.state.users} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          users: data,
        });
      });
  }
}

export default App;
