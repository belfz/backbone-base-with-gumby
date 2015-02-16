require.config({
	paths: {
		jquery: 'bower_components/jquery/dist/jquery.min',
		backbone: 'bower_components/backbone/backbone',
		underscore: 'bower_components/underscore/underscore-min',
		handlebars: 'bower_components/handlebars/handlebars.min',
		text: 'bower_components/requirejs-text/text',
		modernizr: 'bower_components/gumby/js/libs/modernizr-2.6.2.min',
		gumby: 'bower_components/gumby/js/libs/gumby.min',
		'jquery.mobile': 'bower_components/gumby/js/libs/jquery.mobile.custom.min'
	},
	shim: {
		'gumby': {
			deps: ['jquery', 'modernizr']
		},
		'jquery.mobile': ['jquery']
	}
});

require(['routers/MainRouter', 'gumby', 'jquery.mobile'], function(MainRouter, Gumby){
	var mainRouter = new MainRouter();
	Backbone.history.start();
});