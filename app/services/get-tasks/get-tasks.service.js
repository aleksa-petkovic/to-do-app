'use strict'

export const getTasks = function($http) {
    var tasks = function() {
       return $http.get('https://5f9ff6b1e21bab0016dfca83.mockapi.io/api/v1/tasks');
    }
    
    return {tasks};
}