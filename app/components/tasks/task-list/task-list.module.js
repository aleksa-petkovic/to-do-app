'use strict'

import {taskListComponent} from './task-list.component';
import taskModule from '../task/task.module';
import deleteTaskServiceModule from '../../../services/delete-task/delete-task.module';

export default angular.module('taskListModule', [
    taskModule,
    deleteTaskServiceModule
]).component('taskList', taskListComponent).name;