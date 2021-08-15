import React from "react";
import "./UserForm.css";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isVIP: false,
    };
  }

  // Varianta clasica (cu metode individuale)

  // handleNameChane(event) {
  //   this.setState({name: event.target.value});
  // }

  // handleEmailChane(event) {
  //   this.setState({email: event.target.value});
  // }


  // handleVIPChane(event) {
  //   this.setState({isVIP: event.target.checked});
  // }

  // Varianta 1
  hadnleInputChange(event, property) {
    switch (property) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "isVIP":
        this.setState({ isVIP: event.target.checked });
        break;
      default:
        return;
    }
  }

  // Varainta 2
  // hadnleInputChange2(value, property) {
  //   const state = {};
  //   state[property] = value;
  //   this.setState(state);
  // }

  // Trimitem datele in exterior prin intermediul unui prop definit de noi ca functie
  handleUserSubmit(event) {
    event.preventDefault();
    this.props.onUserAdded(this.state);
  }

  render() {
    return (
      <form
        className="user-form"
        onSubmit={(event) => this.handleUserSubmit(event)}
      >
        <h2>Adauga un utilizator</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(event) => this.hadnleInputChange(event, "name")}
        ></input>

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={(event) => this.hadnleInputChange(event, "email")}
        ></input>

        <label>VIP User</label>
        <input
          type="checkbox"
          checked={this.state.isVIP}
          onChange={(event) => this.hadnleInputChange(event, "isVIP")}
        ></input>

        <input type="submit" value="Add user"></input>
      </form>
    );
  }
}

export default UserForm;
