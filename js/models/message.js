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
		switchPerson: function(message){
			var id = message.cid.substr(1);
			if (id % 2 === 0) {
				message.set({"person": "person2"})
			}
		}
	});
// });