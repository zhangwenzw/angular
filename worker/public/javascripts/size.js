function resize(origin,type){
    var type=type||"x";
    if(type=="x"){
        var width=document.documentElement.clientWidth;
        var scale=width/origin*100;
    }else if(type=="y"){
        var height=document.documentElement.clientHeight;
        var scale=height/origin*100;
    }
    var html=document.getElementsByTagName("html")[0];
    html.style.fontSize=scale+"px";
}
document.addEventListener("DOMContentLoaded",function(){
	resize(750);
},false);
