'use strict'

function checkboxCtrl() {
    this.change = function() {
        this.onChange({value: this.value})
    }
}

export const checkbox = {
    template: require('./checkbox.template.html'),
    controller: checkboxCtrl,
    bindings: {
        onChange: '&'
    }
}