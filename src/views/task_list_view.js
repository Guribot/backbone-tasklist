import Backbone from 'backbone';
import TaskList from '../collections/task_list';
import TaskView from './task_view';

const TaskListView = Backbone.View.extend({
  initialize(params) {
    model: TaskList,
    this.template = params.template;

    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#todo-items').empty();
    console.log('Rendering list');

    this.model.each((task) => {
      const taskView = new TaskView({
        model: task,
        template: this.template,
        tagName: 'li',
        className: 'task',
      });
      this.$('#todo-items').append(taskView.render().$el);
    });

    return this;
  },
});

export default TaskListView;
