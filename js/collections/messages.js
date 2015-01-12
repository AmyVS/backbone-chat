var app = app || {};

	var MessageList = Backbone.Collection.extend({
		model: app.Message,
	});

	app.messages = new MessageList();
