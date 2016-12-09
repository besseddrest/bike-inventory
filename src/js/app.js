var React = require('react');
var ReactDOM = require('react-dom');

var Bicycle = require('./Bicycle');

var MainComponent = React.createClass({
  getInitialState: function() {
    return {
      title: "Bicycle Inventory",
      myBikes: []
    }
  }, // getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      this.setState({
        myBikes: result
      });
    }.bind(this));
  }, // componentDidMount

  render: function() {
    var tempBikes = this.state.myBikes;
    tempBikes = tempBikes.map(function(item, index){
      return(
        <Bicycle key={index} item={item} />
      )
    });
    return(
      <div>
        <h2>{this.state.title}</h2>
        <ul>
          {tempBikes}
        </ul>
      </div>
    )
  } // render

}); // MainComponent

ReactDOM.render(
  <MainComponent />,
  document.getElementById('bike-builds')
); // render
