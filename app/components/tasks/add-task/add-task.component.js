'use strict'

function addTaskCtrl(postTaskService) {
    var self = this;
    self.buttonText = "Add task";

    self.getInput = function(textInput) {
        self.taskTitle = textInput;
    }
    self.success = function(response) {
        self.taskAdded();
        self.taskTitle = null;
    }
    self.error = function(response) {
        alert("There was some error, cannot add new task")
    }
    self.onClick = function() {
        if (self.taskTitle == "" || self.taskTitle == null) {
            alert('Task title cannot be empty')
        } else {
            postTaskService.addTask(self.taskTitle).then(self.success, self.error);
        }
    }
}

export const addTaskComponent = {
    template: require('./add-task.template.html'),
    controller: ['postTaskService', addTaskCtrl],
    bindings: {
        taskAdded: '&'
    }
} 