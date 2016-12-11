var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

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

  removeBike: function(item) {
    var allBikes = this.state.myBikes;
    var newBikes = _.without(allBikes, item);
    this.setState({
      myBikes: newBikes
    });
  }, // removeBike

  render: function() {
    var tempBikes = this.state.myBikes;
    tempBikes = tempBikes.map(function(item, index){
      return(
        <Bicycle key={index} item={item} onDelete={this.removeBike} />
      )
    }.bind(this));

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
