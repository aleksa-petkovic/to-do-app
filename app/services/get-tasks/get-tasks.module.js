'use strict'

import { getTasks } from "./get-tasks.service";

export default angular.module('getTasksServiceModule', []).factory('getTasksService', ['$http', getTasks]).name