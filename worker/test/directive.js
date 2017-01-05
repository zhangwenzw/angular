angular.module("directive",[])
    .directive("menu",function(){
        return {
            restrict:"A",
//                    template:"<div>{{abc}}</div>",    /*用当前模板替换原内容*/
            templateUrl:"demo.html",  /*用demo里的内容替换原内容，demo里只能有一个根标签*//*内部使用ajax   1、一定会向服务器发起请求  2、不能跨域，解决办法：jsonp、代理*/
            transclude:true,      /*保留以前的内容，保存在内容中，可显示在demo的 ng-transclude 指令所在标签里*/
            scope:{

            },
            link:function($scope,b,c){   /*当前指令的$scope |  | */
                $scope.data=[
                    {
                        name:"111",
                        son:[
                            {name:"1-1"},
                            {name:"1-2"},
                            {name:"1-3"},
                            {name:"1-4"}
                        ]
                    },
                    {
                        name:"222",
                        son:[
                            {name:"2-1"},
                            {name:"2-2"},
                            {name:"2-3"},
                            {name:"2-4"}
                        ]
                    },
                    {
                        name:"333",
                        son:[
                            {name:"3-1"},
                            {name:"3-2"},
                            {name:"3-3"},
                            {name:"3-4"},
                        ]
                    }
                ];
                $scope.a=0;
                $scope.change=function(id){
                    $scope.a=id;
                }
            }
        }
    })