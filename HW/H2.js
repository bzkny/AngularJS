var myModule = angular.module('myApp', []);

//CREATE CONTROLLER
myModule.controller('myController',
  function(){
    var self = this;

    self.yellow = {
      color: 'yellow',
      css: 'yellowClass'
    }
    self.green = {
      color: 'green',
      css: 'greenClass',
    }
    self.red = {
      color: 'red',
      css: 'redClass',
    }
    self.blue = {
      color: 'blue',
      css: 'blueClass',
    }

});
