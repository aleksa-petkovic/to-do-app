'use strict'

import getTaskServiceModule from '../../../services/get-task/get-task.module';
import textInputModule from '../../text-input/text-input.module';
import buttonModule from '../../button/button.module';
import { editTaskComponent } from './edit-task.component';
import updateTaskServiceModule from '../../../services/update-task/update-task.module';

export default angular.module('editTaskPageModule', [
    getTaskServiceModule,
    updateTaskServiceModule,
    textInputModule,
    buttonModule
]).component('editTask', editTaskComponent).name;