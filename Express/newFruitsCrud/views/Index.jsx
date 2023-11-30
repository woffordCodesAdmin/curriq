const React = require("react");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    console.log("DATA: ", fruits)
    return (
      <div>
        <h1>Fruits Index Page</h1>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
       
      </div>
    );
  }
}
module.exports = Index;
