'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('homeApp.login', [])
  .controller('LoginController', LoginController)
  .name;
