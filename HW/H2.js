var myModule = angular.module('myApp', []);

//CREATE CONTROLLER
myModule.controller('myController',
  function(){
    var self = this;

    //FOLDER SHOW/HIDE
    self.expandSubFolders = true;

    self.folderName = '';

    self.one = {
      fname: ' ',
    }

    self.two = {
      fname: ' ',
    }

    self.three = {
      fname: ' ',
    }

    //TO DO LIST SECTION
    self.priorityHigh = {
      name: ' ',
      description: ' ',
      css: 'redClass'
    }
    self.priorityMedium = {
      name: ' ',
      description: ' ',
      css: 'greenClass'
    }
     self.priorityLow = {
      name: ' ',
      description: ' ',
      css: 'blueClass'
    }
    self.onUpdateClick = function(){
      console.log('you clicked the button!');
      self.fillList = true;
      self.fillFolderFile = true;
    }



});
