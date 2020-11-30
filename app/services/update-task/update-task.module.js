'use strict'

import { updateTask } from "./update-task.service";

export default angular.module('updateTaskServiceModule', []).factory('updateTaskService', ['$http', updateTask]).name