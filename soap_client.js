angular.module('myApp', ['angularSoap'])

.factory("testService", ['$soap',function($soap){
    var base_url = "http://127.0.0.1:5000/testService";

    return {
        test1: function(){
            return $soap.post(base_url,"test1");
        }
    }
}])

.controller('MainCtrl', function($scope, testService) {

  testService.test1().then(function(response){
    $scope.response = response;
  });

})