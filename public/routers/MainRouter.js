define(['jquery', 'underscore', 'backbone', '../views/MainView', '../views/NextView'], function($, _, Backbone, MainView, NextView){
	var MainRouter = Backbone.Router.extend({
		container: null,

		currentView: null,

		routes: {
			"" : "mainRoute",
			"nextRoute": "nextRoute"
		},

		initialize: function(){
			this.container = $('#view');
		},

		changeView: function(view){
			if(this.currentView){
				this.currentView.close();
			}
			this.currentView = view;
			this.currentView.render();
			this.container.append(this.currentView.el);
		},

		mainRoute: function(){
			var mainView = new MainView();
			this.changeView(mainView);
		},

		nextRoute: function(){
			var nextView = new NextView();
			this.changeView(nextView);
		}
	});

	return MainRouter;
});