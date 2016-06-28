var myModule = angular.module('myApp', []);

//CREATE CONTROLLER
myModule.controller('myController',
  function(){
    var self = this;

    //FOLDER SHOW/HIDE
    self.expandSubFolders = true;

    self.folders = [{
      name: 'Folder 1',
      files: ["File 1", "File 2"],
      newFile: '',
      }, {
      name: 'Folder 2',
      files: ["File 2.1", "File 2.2"],
      newFile: '',
    }, {
      name: 'Folder 3',
      files: ["File 3.1", "File 3.2"],
      newFile: '',
    }];

    //FILES ADD TO FOLDERS
    self.newFile = '';

    self.addFile = function(){
      console.log('workin');
      self.folderSelected.files.push(self.userFileName);
    }


    //TO DO LIST SECTION
    self.toDoList = {
      name: '',
      description: '',
      css: ['', '', '']
    }

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
    }



});
