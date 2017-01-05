var avail = angular.module("availability",[]);

avail.controller('mainController', ['$scope','$http', function($scope,$http){

    
    $("#day-schedule").dayScheduleSelector({}); //function that makes the calendar UI
     
    $scope.submitAvail = function(){
        var data = $("#day-schedule").data('artsy.dayScheduleSelector').serialize();
        console.log("Here's the availablity");
        console.log(data);

        //put $http functions with whatever routes you want here to access the data
    };
}]);