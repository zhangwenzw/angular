angular.module("myapp",["ngRoute","directive","ngAnimate","ctrls","services"])
    .config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"index.html",
            controller:"index"
        }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"index"
        }).when("/show/:id",{
            templateUrl:"show.html",
            controller:"index"
        }).otherwise("/")
    }])