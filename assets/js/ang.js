var mainApp = angular.module("mainApp", []);

mainApp.controller('FiveCtrl', function($scope){
	$scope.animals = [
		{type: "Panda"},
		{type: "Crocodile"},
		{type: "Elephant"},
		{type: "Giraff"},
		{type: "Rhino"},
		{type: "Monkey"},
		{type: "Lion"},
		{type: "Tiger"},
		{type: "Buffalo"},
		{type: "hippopotamus"},
		{type: "Turtle"},
		{type: "Zebra"},
		{type: "Wolf"}
	];
})