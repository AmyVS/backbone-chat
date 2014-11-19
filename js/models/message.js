var app = app || {};

// (function(){
	app.Message = Backbone.Model.extend({
		defaults: function() {
			return {
				body: '',
				person: 'person1'
			}
		},
		// work in progress
		switchPerson: function(){
			console.log('switchPerson');
		}
	});
// });