var app = app || {};

	app.AppView = Backbone.View.extend({
		collection: app.messages,
		el: '#app',

		events: {
			'click #submit-message': 'createMessage',
		},

		initialize: function() {
			this.$textarea = this.$('#new-message');
			this.listenTo(app.messages, "add", this.addOne);
			this.listenTo(app.messages, "reset", this.addAll);
			this.listenTo(app.messages, "all", this.render)
		},

		createMessage: function() {
			app.message = new app.Message();
			if (!this.$textarea.val().trim()) {
				return;
			} else {
				app.message.set({ body: this.$textarea.val().trim() });
				app.messages.add(app.message);
			}
		},

		addOne: function(message){
			var messageView = new app.MessageView({model: message});
			$('#chat-list').append(messageView.render().el);
		},

		addAll: function(){
			$('#chat-list').html('');
			app.messages.each(this.addOne, this);
		}
	});
