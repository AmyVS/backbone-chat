var app = app || {};

// (function(){
	app.MessageView = Backbone.View.extend({
		tagName: "li",
		template: _.template($('#message-template').html() ),

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},

		render: function() {
			if (this.model.get("person") === "person1") {
				this.setElement({className: "person1"});
				console.log(this);
				this.$el.html(this.template(this.model.toJSON()));
				// return this;
			} else {
				this.setElement({className: "person2"});
				console.log(this);
				this.$el.html(this.template(this.model.toJSON()));
				// return this;
			}
		}
	});
// });