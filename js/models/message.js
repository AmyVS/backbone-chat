var app = app || {};

app.Message = Backbone.Model.extend({
	defaults: function() {
		return {
			body: '',
		}
	}
});