app.controller('mainController', ['$scope','sectionData',
    function($scope, sectionData) {
       $scope.sections = sectionData.sections;
        $scope.move= sectionData.scrollTo;
        $scope.updateBar = sectionData.changeActive
    }

]);