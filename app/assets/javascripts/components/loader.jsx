var Loader = React.createClass({
  displayName: 'Loader',
  render: function() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuemax="100" style={{width: '100%'}}>
          <span className="sr-only">100% Complete</span>
        </div>
      </div>
    );
  }
});