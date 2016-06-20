var myModule = angular.module('myApp', []);

//CREATE CONTROLLER
myModule.controller('myController',
  function(){
    var self = this;

    //CHANGE TEXT ON RADIO SELECTION
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


    self.yellow = {
      color: 'yellow',
      // if(colorSelected.color === 'yellow'){
      //   yellowClass: true
      // },
    }
    self.green = {
      color: 'green',
      greenClass: true,
    }
    self.red = {
      color: 'red',
      redClass: true,
    }
    self.blue = {
      color: 'blue',
      blueClass: true,
    }

    //TOGGLE CLASS
    // self.cssObject = {
    //   yellowClass: false,
    //   greenClass: false,
    //   redClass: false,
    //   blueClass: false
    // }


});
