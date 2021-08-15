import UserItem from "../UserItem/UserItem";
import "./UsersList.css";
import React from "react";

class UsersList extends React.Component {
  render() {
    return (
      <div className="list-style">
        <h2 className="custom-header">Lista de utilizatori</h2>
        {
          // Primim o lista de utilixatori si lasam mai departe componenta UserItem sa randeze un utilizator
        }
        {this.props.users.map((user, index) => (
          <UserItem key={index + "users"} user={user}></UserItem>
        ))}
      </div>
    );
  }
}

export default UsersList;
