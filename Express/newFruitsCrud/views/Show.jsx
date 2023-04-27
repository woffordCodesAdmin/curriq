const React = require("react");
class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;
    return (
      <>
        <h1>Show Page</h1>
        <div>
          <h3>
            {" "}
            The {fruit.name + " "}
            is {" " + fruit.color + ", "}
            {fruit.readyToEat
              ? "Its is ready to eat"
              : "It is not ready to eat... Cant touch this"}
          </h3>
        </div>
      </>
    );
  }
}
module.exports = Show;
