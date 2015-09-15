var User = React.createClass({
  displayName: 'User',
  propTypes: {
    id: React.PropTypes.number.isRequired
  },
  handleDelete: function (event) {
    if (confirm("¿Seguro desea borrar el usuario?")) {
      UserActions.deleteUser(this.props.id);
    }
  },
  handleRefresh: function (event) {
    UserActions.refreshUser(this.props.id);
  },
  render: function() {
    var src = this.props.photo || 'http://www.vincegolangco.com/wp-content/uploads/2010/12/mickey-mouse-for-facebook.jpg';
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          {this.props.name}
          <div className='pull-right'>
            <a className='btn btn-xs btn-success' href='#' style={{'margin-right': '10px'}} onClick={ this.handleRefresh }>Actualizar</a>
            <a className='btn btn-xs btn-warning' href='#' onClick={ this.handleDelete }>Borrar</a>
          </div>
        </div>
        <div className='panel-body'>
          <div className='row'>
            <div className='col-md-2'>
              <img className='img-circle' height='40' width='40' src={src}/>
            </div>
            <div className='col-md-10'>
              <span>{this.props.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});