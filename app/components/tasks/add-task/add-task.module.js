'use strict'

import {addTaskComponent} from './add-task.component';
import textInputModule from '../../text-input/text-input.module';
import buttonModule from '../../button/button.module';
import postTaskServiceModule from '../../../services/post-task/post-task.module';
import taskListModule from '../task-list/task-list.module';

export default angular.module('addTaskModule', [
    postTaskServiceModule,
    textInputModule,
    buttonModule,
    taskListModule
]).component('addTask', addTaskComponent).name;