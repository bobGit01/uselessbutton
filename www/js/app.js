// READ THIS:
// When working in a multi-file project, templates are usualy 
// loaded using require.js. For the sake of simplicity, we 
// wrote our templates in these two variables

var homePage =
    
'<div id="home-page" data-role="page" class="ui-page-active">' +

  '<div data-role="header">' +
    '<h1>Home page</h1>' +
    '<a data-icon="info" data-iconpos="notext" {{action "about" target="view"}}></a>' +
  '</div>' +

  '<div data-role="content">' +
    '<p>Click the top left button to go to the about page</p>' +
  '</div>' +

'</div>';


var aboutPage =
    
'<div id="about-page" data-role="page" class="ui-page-active">' +

  '<div data-role="header">' +
    '<h1>About page</h1>' +
    '<a data-icon="home" data-iconpos="notext" {{action "home" target="view"}}></a>' +
  '</div>' +

  '<div data-role="content">' +
    '<p>Some information about something here...</p>' +
    '<a data-role="button">Useless button</a>' +
  '</div>' +

'</div>';


App = Ember.Application.create();


// ROUTER

App.Router.map(function () {
    this.route('about');
});


// VIEWS

App.PageView = Ember.View.extend({

    didInsertElement: function () {
        if ($('.ui-page-active').length) {
            $('.ui-page-active').parent().trigger('create');
        }
    }
});

App.HomeView = App.PageView.extend({

    template: Ember.Handlebars.compile(homePage),
    actions: {

        about: function () {
            App.Router.router.transitionTo('about');
        }
    }
});

App.AboutView = App.PageView.extend({

    template: Ember.Handlebars.compile(aboutPage),
    actions: {

        home: function () {
            App.Router.router.transitionTo('index');
        }
    }
});