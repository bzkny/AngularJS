//<html ng-app="angulartag">THIS IS THE ANGULAR</>
var myModule = angular.module('myApp', []);

//CREATE CONTROLLER
myModule.controller('myController',
  function(){
    var self = this;

    self.myName = "Bea";
    self.favoriteThings = "Squash, Diving, Environment, front end web development";
    self.hometown = "Southampton";


    self.nameArray = ["Dory", "Mom", "Rob", "Liz", "Emily", "Shantell"];

    //YOU CAN USE ARRAY IN HTML
    self.objectsArray = [{
      fName: 'sam',
      lName: 'johnson'
    }, {
      fName: 'Jana',
      lName: 'Pederson'
    }];

    //YOU CAN USE JSON OBJECT
    self.dog = {
      name: 'kali',
      breed: 'mutt',
      age: '7',
    };

    //UPDATE CONTROLLER FROM USER INPUT
    //NG-MODEL 2-WAY BINDING (GETS INPUT FROM USER)
    self.studentName = '';

    self.student = {
      name: {
        fname: 'Dory'
      }
    }

    self.fallSeason = {
      name: 'fall',
      description: 'is the best in the country'
    }
    self.winterSeason = {
      name: 'winter',
      description: 'is the best in the city'
    }
    self.springSeason = {
      name: 'spring',
      description: 'is meh'
    }
    self.summerSeason = {
      name: 'summer',
      description: 'smells like garbage in the city'
    }
});

//THIS PROBLEMS SO WE RENAME TO SELF
//$index find slides
//
