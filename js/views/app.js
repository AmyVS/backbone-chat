var app = app || {};

	app.AppView = Backbone.View.extend({

		el: '#app',

		events: {
			'click #submit-message': 'createMessage',
		},

		initialize: function() {
			this.$input = this.$('#new-message');
			this.listenTo(app.Messages, "add", this.addMessage);
		},

		createMessage: function() {
			alert('clicked');
			if (!this.$input.val().trim()) {
				return;
			}
			app.Message.create({ body: this.$input.val().trim() });
			this.$input.val('');
		}

	});
