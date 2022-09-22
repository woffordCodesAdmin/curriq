const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Page">
        {/*  Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        {/* form is not complete we will do that below*/}
        <form
          action={`/students/${this.props.student._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.student.name}
          />
          <br />
          GPA:{" "}
          <input type="text" name="gpa" defaultValue={this.props.student.gpa} />
          <br />
          Is Eligible:
          {this.props.student.isPassing ? (
            <input type="checkbox" name="isPassing" defaultChecked />
          ) : (
            <input type="checkbox" name="isPassing" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
