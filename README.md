# backbone-reflux-example

[React](http://facebook.github.io/react/) components for use with [Reflux](https://github.com/reflux/refluxjs), [Backbone](http://backbonejs.org/) and [Rails](http://rubyonrails.org/) as back-end.

##Requirements:
* [ruby](https://www.ruby-lang.org) (>= 2.1.6)
* [rails](http://rubyonrails.org/) (>= 4.1.12)
* [node](http://nodejs.org)
* [bower](https://github.com/bower/bower) (>= 0.10.0) installed with npm

##Usage:

Prepare rails project and create the database:

`bundle install`
`bundle exec rake db:create`
`bundle exec rake db:migrate`

Use bower to install dependencies:

`bundle exec rake bower:install`

And finally run the server:

`rails s`