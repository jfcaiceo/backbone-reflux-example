var User = React.createClass({
  displayName: 'User',
  render: function() {
    var src = this.props.photo || 'http://www.vincegolangco.com/wp-content/uploads/2010/12/mickey-mouse-for-facebook.jpg';
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          {this.props.name}
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