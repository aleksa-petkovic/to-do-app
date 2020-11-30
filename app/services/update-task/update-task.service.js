'use strict'

export const updateTask = function($http) {
    var updateTask = function(taskTitle, taskDesc, taskId) {
        var task = {
            title: taskTitle,
            description: taskDesc
        }
       return $http.put('https://5f9ff6b1e21bab0016dfca83.mockapi.io/api/v1/tasks/' + taskId, task);
    }
    
    return {updateTask};
}