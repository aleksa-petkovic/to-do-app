'use strict'

import './edit-task.css';

function editTaskPageCtrl(getTaskService, updateTaskService, $routeParams, $window) {
    var self = this;
    self.buttonText = "Save";
    self.titlePlaceholder = "Title...";
    self.descPlaceholder = "Description...";
    self.taskId = $routeParams.taskId

    self.getTitle = function(textInput) {
        self.taskTitle = textInput;
    }
    self.getDescription = function(textInput) {
        self.taskDesc = textInput;
    }
    self.getSuccess = function(response) {
        self.task = response.data;

        self.taskTitle = self.task.title;
        self.taskDescription = self.task.description;
    }
    self.getError = function(response) {
        alert("There was an error in getting your task");
    }
    self.getTask = function() {
        getTaskService.task(self.taskId).then(self.getSuccess, self.getError);
    }

    self.getTask();

    self.updateSuccess = function(response) {
        alert("You have successfully updated task!");
        $window.location.href = '/';
    }
    self.updateError = function(response) {
        alert("There was some problem with updating your task")
    }

    self.onClick = function() {
        if (self.taskTitle == "" || self.taskTitle == null) {
            alert('Task title cannot be empty')
        } else {
           updateTaskService.updateTask(self.taskTitle, self.taskDesc, self.taskId).then(self.updateSuccess, self.updateError);
        }
    }
}

export const editTaskComponent = {
    template: require('./edit-task.template.html'),
    controller: [
        'getTaskService', 
        'updateTaskService', 
        '$routeParams',
        '$window', 
        editTaskPageCtrl]
}