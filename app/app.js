var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.config(function(){
  //would fire b4 app runs

});

myNinjaApp.run(function(){
  //would fire as application runs

});
//to protect the dependecy we need to place them in arrays
myNinjaApp.controller('NinjaController',['$scope',function($scope){
  $scope.message = 'Hey all';

  $scope.ninjas = ['yoshi','tatu','katu'];
}]);
