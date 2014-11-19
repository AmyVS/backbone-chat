var app = app || {};

	app.Message = Backbone.Model.extend({

		defaults: function() {
			return {
				body: '',
				person: 'person1'
			}
		},

		switchPerson: function(message){
			var id = message.cid.substr(1);
			if (id % 2 === 0) {
				message.set({"person": "person2"})
			}
		}
	});