const React = require('react');
const DefaultLayout = require('./layouts/default');

class Index extends React.Component {
  render(){
    const {students}= this.props;
    console.log(students);
    return (
      <DefaultLayout title={"Student Dashboard"}>
        <nav>
          <a href="/students/new">Add New Student</a>
        </nav>
        <ul>
        {students.map((student,i) => {
                  return <li key={i}>
                      <a href={`/students/${student.id}`}>{student.name}</a>
                      is { student.isPassing? <span>Is Eligible for Graduation</span>: <span> Is NOT Eligible for Graduation </span>}
                      {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                      <a href={`/students/${student._id}/edit`}>Edit Student Info</a>

                      <form action={`/students/${student._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                  </li>
              })}
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;