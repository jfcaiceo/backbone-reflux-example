var SearchBar = React.createClass({
  displayName: 'SearchBar',
  propTypes: {
    onInputChange: React.PropTypes.func.isRequired
  },
  handleInputChange: function(event) {
    var value = event.target.value;
    this.props.onInputChange.call(event, value);
  },
  render: function() {
    return (
      <div className="navbar-form navbar-right" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Buscar" value={ this.props.currentSearch} onChange={this.handleInputChange}/>
        </div>
      </div>
    );
  }
});