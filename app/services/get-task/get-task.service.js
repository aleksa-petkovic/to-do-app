'use strict'

export const getTask = function($http) {
    var task = function(taskId) {
       return $http.get('https://5f9ff6b1e21bab0016dfca83.mockapi.io/api/v1/tasks/' + taskId);
    }
    
    return {task};
}