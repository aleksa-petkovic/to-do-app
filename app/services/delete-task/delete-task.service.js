'use strict'

export const deleteTask = function($http) {
    var deleteTask = function(id) {
       return $http.delete('https://5f9ff6b1e21bab0016dfca83.mockapi.io/api/v1/tasks/' + id);
    }
    
    return {deleteTask};
}