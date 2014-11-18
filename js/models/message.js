var app = app || {};

(function(){
	app.Message = Backbone.Model.extend({
		defaults: function() {
			return {
				body: '',
			}
		}
	});
});