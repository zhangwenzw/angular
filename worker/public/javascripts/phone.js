angular.module("myapp",[])
    .controller("phone",["$scope","$http","$filter",function($scope,$http,$filter){
        $scope.en=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        $http({url:"/ajax"}).then(function(data){
            var data=data.data;
            var arr=[];
            for(var i=0;i<data.length;i++){
                var current=[];
                for(var j=0;j<data.length;j++){
                    if((data[i].en==data[j].en)&&!data[j].flag){
                        data[j].flag=true;
                        current.push(data[j]);
                        current.en=data[i].en
                    }
                }
                if(current.length>0) {
                    arr.push(current);
                    var arr=$filter("orderBy")(arr,"en")
                }
            }
            $scope.data=arr;
            $scope.check=function(en){
                for(var i=0;i<arr.length;i++){
                    if(arr[i].en==en){

                    }
                }
            }
        })
    }])