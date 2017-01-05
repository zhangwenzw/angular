var express=require("express");
var router=express.Router();

router.use("/ajax",function(req,res){
    var data=[
        {name:"李明达",phone:"15213452341",en:"l"},
        {name:"石海波",phone:"15213452341",en:"s"},
        {name:"张雯",phone:"15213452341",en:"z"},
        {name:"李壮壮",phone:"15213452341",en:"l"},
        {name:"杜媛",phone:"13245672378",en:"d"},
        {name:"杨晓春",phone:"13245672378",en:"y"},
        {name:"杨帆",phone:"13245672378",en:"y"},
        {name:"张冬雪",phone:"13245672378",en:"z"},
        {name:"高超",phone:"13245672378",en:"g"},
        {name:"阴少闯",phone:"13245672378",en:"y"},
        {name:"高晶",phone:"13245672378",en:"g"},
        {name:"崔雨欣",phone:"13245672378",en:"c"},
        {name:"原小小",phone:"13245672378",en:"y"},
        {name:"徐雅惠",phone:"13245972378",en:"x"},
        {name:"高帅",phone:"13245672378",en:"g"},
    ];
    res.send(JSON.stringify(data));
})
module.exports=router;