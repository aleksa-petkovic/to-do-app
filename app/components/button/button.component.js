'use strict'

import './button.css';

function buttonCtrl() {
    this.click = function() {
        this.onClick();
    }
}

export const button = {
    template: require('./button.template.html'),
    controller: buttonCtrl,
    bindings: {
        text: '<',
        onClick: '&'
    }
}