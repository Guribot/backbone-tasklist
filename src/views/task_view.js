import Backbone from 'backbone';
import Task from '../models/task';

const TaskView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    this.listenTo(this.model, 'change', this.render);
  },
  render() {
    console.log('Rendering list item');
    const compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);

    if (this.model.get('is_complete')) {
      this.$el.addClass('is-complete');
      this.$('.toggle-complete').text('Unmark Completed');
    } else {
      this.$el.removeClass('is-complete');
      this.$('.toggle-complete').text('Mark Completed');
    };

    return this;
  },
  events: {
    'click button.delete': 'deleteTask',
    'click button.toggle-complete': 'toggleComplete',
  },
  deleteTask: function(e) {
    console.log(this);
    this.model.destroy();
    this.remove();
  },
  toggleComplete: function(e) {
    this.model.toggleComplete();
  },
});

export default TaskView;
