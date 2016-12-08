var React = require('react');
var ReactDOM = require('react-dom');

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
        <BicycleComponent key={index} item={item} />
      )
    });
    return(
      <div class="bicycle">
        <h2>{this.state.title}</h2>
        <ul>
          {tempBikes}
        </ul>
      </div>
    )
  } // render

}); // MainComponent

var BicycleComponent = React.createClass({
  render: function() {
    return(
      <li>
        <h3>{this.props.item.name}</h3>
        <span>
          {this.props.item.year} {this.props.item.model} {this.props.item.make}
        </span><br />
        Groupset: {this.props.item.groupset}<br />
        <strong>Notes:</strong><br />
        <p>
          {this.props.item.notes}
        </p>
      </li>
    )
  }
}); // BicycleComponent

ReactDOM.render(
  <MainComponent />,
  document.getElementById('bike-builds')
); // render
