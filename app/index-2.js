var React = require('react');
var ReactDOM = require('react-dom');
var HelloUser = React.createClass({
  render: function(){
    return (
      <div> <h1>Hello, {this.props.name}</h1></div>
    )
  }
});
ReactDOM.render(<HelloUser name="Anders"/>, document.getElementById('app'));
