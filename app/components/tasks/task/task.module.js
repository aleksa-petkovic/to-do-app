'use strict'

import {taskComponent} from './task.component';
import checkbox from '../../checkbox/checkbox.module';

export default angular.module('taskModule', [
    checkbox
]).component('task', taskComponent).name;