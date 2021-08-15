import React from "react";

class UserItem extends React.Component {
  render() {
    const { name, email } = this.props.user;
    return (
      <div>
        <h2>{`My name is ${name}`}</h2>
        <p>{"Email: " + email}</p>
      </div>
    );
  }
}

export default UserItem;
