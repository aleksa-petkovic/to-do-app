'use strict'

export const postTask = function($http) {
    var addTask = function(taskTitle, taskDesc) {
        var task = {
            title: taskTitle,
            description: taskDesc
        }
       return $http.post('https://5f9ff6b1e21bab0016dfca83.mockapi.io/api/v1/tasks', task);
    }
    
    return {addTask};
}