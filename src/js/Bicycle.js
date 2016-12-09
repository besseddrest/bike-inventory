var React = require('react');
var ReactDOM = require('react-dom');

var Bicycle = React.createClass({
  render: function() {
    return(
      <li className="bicycle">
        <h3 className="bicycle--name">{this.props.item.name}</h3>
        <div className="bicycle--details">
          {this.props.item.year} {this.props.item.model} {this.props.item.make}&nbsp;|&nbsp;
          <span className="bicycle--details__small">{this.props.item.groupset}</span>
        </div>
        <p className="bicyle--notes">
          <strong>Notes:</strong><br />
          {this.props.item.notes}
        </p>
      </li>
    )
  }
}); // BicycleComponent

module.exports=Bicycle
