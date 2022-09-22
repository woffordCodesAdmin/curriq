const React = require('react');
class DefaultLayout extends React.Component {
  render() {
    return (
        // addHTML with JSX{} importing propData
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
// gives Default template for all our rendered views