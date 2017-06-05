angular.module('denomadesApp.programCard',[])

.service('cardService', ['$http', function($http) {
  this.getInfo = function(number) {
    return $http({
      method: 'GET',
      url: 'https://denomadesdev.herokuapp.com/services/' + number
    });
  };
}]);
