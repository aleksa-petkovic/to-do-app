'use strict'

import { postTask } from "./post-task.service";

export default angular.module('postTaskServiceModule', []).factory('postTaskService', ['$http', postTask]).name