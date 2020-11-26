'use strict'

import { tasksPageComponent } from "./tasks-page.component";
import addTaskModule from "../../tasks/add-task/add-task.module";
import taskListModule from "../../tasks/task-list/task-list.module";
import getTasksServiceModule from "../../../services/get-tasks/get-tasks.module";

export default angular.module('tasksPageModule', [
    addTaskModule,
    taskListModule,
    getTasksServiceModule
]).component('tasksPage', tasksPageComponent).name;