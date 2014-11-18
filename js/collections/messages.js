var app = app || {};

var MessageList = Backbone.Collection.extend({
	model: app.Message,

	localStorage: new Store('messages-backbone')
});

app.Messages = new MessageList();