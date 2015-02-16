define(['jquery', 'underscore', 'backbone', 'text!templates/nextViewTemplate.html'], function($, _, Backbone, nextViewTemplate){
	var NextView = Backbone.View.extend({
		initialize: function(){
			
		},

		render: function(){
			// should return the rendered (but not attached to DOM) html
			this.$el.html(nextViewTemplate);
		},

		close: function(){
			this.remove();
      		this.unbind();
		}
	});

	return NextView;
});