'use strict'

function textInputCtrl() {
    this.change = function() {
        this.onChange({textInput: this.textInput});
    }
}

export const textInput = {
    template: require('./text-input.template.html'),
    controller: textInputCtrl,
    bindings: {
        onChange: '&'
    }
}