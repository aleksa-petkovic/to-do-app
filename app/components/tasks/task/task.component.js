'use strict'

function taskCtrl() {
    this.checked = function(value) {
        if(value == true) {
            this.deleteTask({id: this.task.id});
        }
    }
}

export const taskComponent = {
    template: require('./task.template.html'),
    controller: taskCtrl,
    bindings: {
        task: '<',
        deleteTask: '&'
    }
}