'use strict'

import { getTask } from "./get-task.service";

export default angular.module('getTaskServiceModule', []).factory('getTaskService', ['$http', getTask]).name