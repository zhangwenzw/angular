angular.module("services",[])
    .factory("indexData",["$http",function ($http) {
        return $http({url:"1.txt"})
    }])