var UserList = React.createClass({
  mixins: [Reflux.connect(UserStore, "data")],
  displayName: 'UserList',
  propTypes: {
    pageSize: React.PropTypes.number,
  },
  getInitialState: function() {
    return { data: {} };
  },
  componentWillMount: function () {
    UserActions.loadPage(this.props.pageSize);
  },
  changePage:function (page) {
    UserActions.pageChange(page, this.props.pageSize);
  },
  search: function (value) {
    UserActions.search(value);
  },
  render: function() {
    var pageNumber = ( !!this.state.data.pageNumber ? this.state.data.pageNumber : 1);
    var currentElements = ( !!this.state.data.users ? this.state.data.users.length : 0);
    var display;
    if( !!this.state.data.users) {
      if( this.state.data.users.length > 0 ) {
        display = this.state.data.users.map( function (user) {
          return <User id={user.get('id')} name={user.get('name')} description={user.get('description')} photo={user.get('photo')}/>;
        })
      }
      else {
        // TODO: Add a 'no_users' component
      }
    }
    else {
      display = <Loader />
    }
    return (
      <div>
        <SearchBar currentSearch={this.state.currentSearch} onInputChange={this.search} />
        { display }
        <Paginator currentPage={pageNumber} pageSize={ this.props.pageSize } currentElements={currentElements} onPageChange={ this.changePage } />
      </div>
    );
  }
});