var React = require('react');
var ReactDOM = require('react-dom');

var MainComponent = React.createClass({
  getInitialState: function() {
    return {
      title: "List of Bikes"
    }
  }, // getInitialState

  render: function() {
    return(
      <h1>{this.state.title}</h1>
    )
  } // render

}); // MainComponent

ReactDOM.render(
  <MainComponent />,
  document.getElementById('bikeBuilds')
); // render
