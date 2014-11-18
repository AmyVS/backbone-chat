var app = app || {};

	app.AppView = Backbone.View.extend({
		collection: app.messages,
		el: '#app',

		events: {
			'click #submit-message': 'createMessage',
		},

		initialize: function() {
			this.$input = this.$('#new-message');
			this.listenTo(app.Messages, "add", this.addOne);
			this.listenTo(app.Messages, "reset", this.addAll);
			this.listenTo(app.Messages, "all", this.render)
		},

		createMessage: function() {
			var message = new app.Message();
			if (!this.$input.val().trim()) {
				return;
			}
			message.set({ body: this.$input.val().trim() });
		},

		addOne: function(message){
			var view = new app.MessageView({model: message});
			$('#chat-list').append(view.render().el);
		},

		addAll: function(){
			$('#chat-list').html('');
			app.Messages.each(this.addOne, this);
		}

	});
