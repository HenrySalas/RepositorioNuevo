var MongoClient = require('mongodb').MongoClient;

var app = angular.module('UserApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/home', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});