var UserRouter = Backbone.Router.extend({
  routes: {
    "p:page(/:search)": "usersPaginator"
  }
});

Backbone.history.start();

var UserModel = Backbone.Model.extend({
  defaults: {
    photo: 'http://www.vincegolangco.com/wp-content/uploads/2010/12/mickey-mouse-for-facebook.jpg'
  },
  validate: function( attributes ){
    if( !!attributes.name ){
      return "Name required";
    }
  },
  initialize: function(){
    //Nothing yet
  }
});

var UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: '/users',
  parse: function(data) {
    // If we want to parse and process server data
    return data;
  }
});

var UserStore = Reflux.createStore({
  listenables: [UserActions],
  data: new UserCollection(),
  route: new UserRouter(),
  init: function () {
    var _this = this;
    this.pageNumber = 1;
    this.route.on('route:usersPaginator', function (page, search) {
      _this.pageNumber = page;
      _this.currentSearch = search;
      _this.updateData();
    });
  },
  onLoadPage: function (pageSize) {
    var _this = this;
    this.pageSize = pageSize;
    this.data.fetch({
      success: function() {
        _this.updateData();
      }
    });
  },
  onPageChange: function(pageNumber, pageSize) {
    console.log(pageNumber);
    this.route.navigate('p' + pageNumber + (!!this.currentSearch ? "/" + this.currentSearch : '' ), {trigger: true, replace: true});
  },
  onSearch: function(value) {
    this.route.navigate('p1' + (!!value ? "/" + value : '' ), {trigger: true, replace: true});
  },
  updateData: function() {
    var _this = this;
    var data = this.data;
    if (!! this.currentSearch) {
      data = data.filter(function(user) {
        return _.any(user.attributes, function(val, attr) {
          if (!val) { return false; };
          return String(val).indexOf(_this.currentSearch) >= 0;
        });
      });
    }
    else {
      data = data.models;
    }
    data = data.slice( (_this.pageNumber - 1) * _this.pageSize , _this.pageNumber * _this.pageSize);
    this.trigger( {users: data, pageNumber: this.pageNumber, currentSearch: this.currentSearch} );
  }
});