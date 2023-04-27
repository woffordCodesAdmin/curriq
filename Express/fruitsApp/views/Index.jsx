const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
  render() {
    return (
      <div>
        <DefaultLayout title={"Fruits Index Page"}>
          <nav>
            <a href="/fruits/new">Create a New Fruit</a>
          </nav>
          <ul>
            {this.props.fruits.map((fruit, i) => {
              return (
                <li
                  style={{
                    border: "solid black",
                    padding: "1em",
                    margin: "1em",
                  }}
                  key={i}
                >
                  The <a href={`/fruits/${fruit.id}`}> {fruit.name} </a> is{" "}
                  {fruit.color} {"!"}{" "}
                  {fruit.readyToEat
                    ? `It is ready to eat`
                    : `It is not ready to eat`}{" "}
                  <hr />
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>{" "}
                    <form
                      action={`/fruits/${fruit._id}?_method=DELETE`}
                      method="POST"
                    >
                      <input type="submit" value="DELETE" />
                    </form>
                  </div>
                </li>
              );
            })}
          </ul>
        </DefaultLayout>
      </div>
    );
  }
}

module.exports = Index;
