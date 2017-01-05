angular.module("filters",[])
    .filter("minOrMax",function () {
        return function (origin,type) {
            var type=type||"min";
            var temp=origin[0];
            for(var i=0;i<origin.length;i++){
                if(type=="min"){
                    if(origin[i]<temp){
                        temp=origin[i];
                    }
                }else if(type=="max"){
                    if(origin[i]>temp){
                        temp=origin[i];
                    }
                }
            }return temp;
        }
    })