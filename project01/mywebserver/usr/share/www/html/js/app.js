var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/posts/:postId", {
        templateUrl : "views/post.html",
        controller: "postController"
    })
    .when("/create", {
        templateUrl : "green.htm"
    });
});

app.controller('appController', function($scope, $http) {
    $http.get("/api/posts")
    .then(function(response) {
        $scope.posts = response.data;
    });
});
app.controller('postController', function($scope, $http, $routeParams) {
    $http.get("/api/posts/" + $routeParams.postId)
    .then(function(response) {
        $scope.post = response.data;
    });
});