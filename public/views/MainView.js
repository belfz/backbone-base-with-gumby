define(['jquery', 'underscore', 'backbone', 'text!templates/mainViewTemplate.html'], function($, _, Backbone, mainViewTemplate){
	var MainView = Backbone.View.extend({
		initialize: function(){
			
		},

		render: function(){
			// should return the rendered (but not attached to DOM) html
			this.$el.html(mainViewTemplate);
		},

		close: function(){
			this.remove();
      		this.unbind();
		}
	});

	return MainView;
});