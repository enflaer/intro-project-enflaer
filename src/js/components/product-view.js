var ProductView = Backbone.View.extend({
  events: {},
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  template: _.template($('#product-template').html()),
  render: function() {
    this.$el.html(this.template({
      model: this.model.toJSON(),
    }));
    return this;
  },
});
