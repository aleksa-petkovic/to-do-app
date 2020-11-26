'use strict'

import { deleteTask } from "./delete-task.service";

export default angular.module('deleteTaskServiceModule', []).factory('deleteTaskService', ['$http', deleteTask]).name