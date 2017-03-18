var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.config(function(){
  //would fire b4 app runs

});

myNinjaApp.run(function(){
  //would fire as application runs

});
//to protect the dependecy we need to place them in arrays
myNinjaApp.controller('NinjaController',['$scope',function($scope){
//scope object

  $scope.ninjas = [{name:'yoshi',belt:'green',rate:50,available:true},
  {name:'crystal', belt:'yelloe',rate:40,available:true},
  {name:'pmk',belt:'white',rate:20,available:false}]
}]);
