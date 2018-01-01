import 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

//Controllers
import loginController from './controllers/loginController';

//Services
import authService from './services/authService';
import userService from './services/userService';

//Directives
//import  from './directives/';

//Project path
let path = './modules/SchoolSystem/';

var schoolApp = angular.module('schoolApp', ['ui.router']);

//Controllers
schoolApp.controller('loginController', loginController);
//Services
//schoolApp.service('', );
schoolApp.service('authService',authService );
schoolApp.service('userService',userService );


// Directives
//schoolApp.directive('', );


schoolApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'loginController'
        })


        
});
