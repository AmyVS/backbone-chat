var app = app || {};

	app.AppView = Backbone.View.extend({
		collection: app.messages,
		el: '#app',

		events: {
			'click #submit-message': 'createMessage',
		},

		initialize: function() {
			this.$textarea = this.$('#new-message');
			this.listenTo(app.messages, "add", this.checkPerson, this);
			this.listenTo(app.messages, "add", this.addOne);
			this.listenTo(app.messages, "all", this.render)
		},

		createMessage: function() {
			app.message = new app.Message();
			if (!this.$textarea.val().trim()) {
				return;
			} else {
				app.message.set({ body: this.$textarea.val().trim() });
				app.messages.add(app.message);
				$('#new-message').val('');
			}
		},

		checkPerson: function(message) {
			message.switchPerson(message);
		},

		addOne: function(message){
			var messageView = new app.MessageView({model: message});
			$('#chat-list').append(messageView.render().el);
			$('#new-message').focus();
			$('#chat-box')[0].scrollTop = 1000000;

			if (message.get("person") === "person1") {
				$('img#triangle1').css({ "visibility":"visible" });
				$('img#triangle2').css({ "visibility": "hidden" });
			} else if (message.get("person") === "person2") {
				$('img#triangle2').css({ "visibility":"visible" });
				$('img#triangle1').css({ "visibility": "hidden" });
			}
		},

	});
