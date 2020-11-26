'use strict'

function tasksPageCtrl(getTasksService) {
    var self = this;
    self.tasks = [];

    self.success = function(response) {
        self.tasks = response.data;
        self.tasks.reverse();
    }
    self.error = function(response) {
        alert("There was an error in getting your tasks");
    }
    self.getTasks = function() {
        getTasksService.tasks().then(self.success, self.error);
    }
    
    self.getTasks();
    
    self.updateTasks = function () {
        self.getTasks();
    }
}

export const tasksPageComponent = {
    template: require('./tasks-page.template.html'),
    controller: ['getTasksService', tasksPageCtrl]
}