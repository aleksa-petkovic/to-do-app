'use strict'

function taskListCtrl(deleteTaskService) {
    var self = this;

    self.deleteTaskById = function(id) {
        deleteTaskService.deleteTask(id).then(self.success, self.error);
    }
    self.success = function(response) {
        self.updateTasks();
    }
    self.error = function(response) {
        alert("There was some error, cannot delete task");
    }
}

export const taskListComponent = {
    template: require('./task-list.template.html'),
    controller: ['deleteTaskService', taskListCtrl],
    bindings: {
        tasks: '<',
        updateTasks: '&'
    }
}