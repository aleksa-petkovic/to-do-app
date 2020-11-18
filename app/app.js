import angular from 'angular'

import textInputModule from './components/text-input/text-input.module';
import checkboxModule from './components/checkbox/checkbox.module';

export default angular.module('TodoApp', [
    textInputModule,
    checkboxModule,
  ]);