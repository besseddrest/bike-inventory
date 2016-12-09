var React = require('react');

var Bicycle = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }, // handleRemoveBike

  render: function() {
    return(
      <li className="bicycle">
        <a className="glyphicon glyphicon-remove" onClick={this.handleDelete}></a>
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
