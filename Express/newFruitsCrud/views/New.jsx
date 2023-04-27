import React, { Component } from "react";

export default class New extends Component {
  render() {
    return (
      <>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method="POST">
          <input type="text" name="name" placeholder="Enter Name" />
          <br />
          <input type="text" name="color" placeholder="Enter Color" />
          <br />
          Ready2Eat ? <input type="checkbox" name="readyToEat" />
          <br />
          {/* ---submitBTN */}
          <input type="submit" name="" value="Create Fruit" />
        </form>
      </>
    );
  }
}
