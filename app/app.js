import angular from 'angular';
import ngRoute from 'angular-route';
import editTaskPageModule from './components/pages/edit-task/edit-task.module';
import tasksPageModule from './components/pages/tasks-page/tasks-page.module';

export default angular.module('TodoApp', [
    tasksPageModule,
    editTaskPageModule,
    ngRoute
  ]).config(['$routeProvider',
    function config($routeProvider) {
      'ngInject'
      $routeProvider.
        when('/', {
          template: '<tasks-page></tasks-page>'
        }).
        when('/edit/:taskId', {
          template: '<edit-task></edit-task>'
        }).
        otherwise('/');
    }
  ]);