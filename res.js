var strass=document.getElementsByClassName("strass");
var home=document.getElementsByClassName("home");
var tech=document.getElementsByClassName("tech");
var crew=document.getElementsByClassName("crew");
var dest=document.getElementsByClassName("dest");

home[0].onclick=function(){
    let i=0;
    for(i=0;i<4;i++){
        strass[i].style.display="none";
        
    }
    // console.log(strass[i]);
    strass[0].style.display="block"
}
// }
// for(let z=0;<4;y++){
dest[0].onclick=function(){
    let i=0;
    for(i=0;i<4;i++){
        strass[i].style.display="none";
    }
    strass[1].style.display="block"
}
crew[0].onclick=function(){
    let i=0;
    for(i=0;i<4;i++){
        strass[i].style.display="none";
    }
    strass[2].style.display="block"
    
}
tech[0].onclick=function(){
    let i=0;
    for(i=0;i<4;i++){
        strass[i].style.display="none";
    }
    strass[3].style.display="block"
  
}
var src=document.getElementsByClassName("src")[0];
var src1=document.getElementsByClassName("src1")[0];
var src2=document.getElementsByClassName("src2")[0];
var src3=document.getElementsByClassName("src3")[0];
src1.style.display="none";
src2.style.display="none";
src3.style.display="none";
var moon =document.getElementById("moon");
var mars =document.getElementById("mars");
var euro =document.getElementById("euro");
var titan =document.getElementById("titan");
mars.onclick=function(){
    src.style.display="none";
    src2.style.display="none";
    src1.style.display="flex";
    src3.style.display="none";
}
moon.onclick=function(){
    src1.style.display="none";
    src2.style.display="none";
    src.style.display="flex";
    src3.style.display="none";
}
euro.onclick=function(){
    src1.style.display="none";
    src.style.display="none";
    src2.style.display="flex"; 
    src3.style.display="none";
}
titan.onclick=function(){
    src1.style.display="none";
    src.style.display="none";
    src3.style.display="flex"; 
    src2.style.display="none"; 
}
var check=document.getElementsByClassName("check");
var cr=document.getElementsByClassName("cr")[0];
var cr1=document.getElementsByClassName("cr1")[0];
var cr2=document.getElementsByClassName("cr2")[0];
var cr3=document.getElementsByClassName("cr3")[0];
check[1].onclick=function(){
    cr.style.display="none";
    cr1.style.display="block";
    cr2.style.display="none";
    cr3.style.display="none";
}
check[2].onclick=function(){
    cr.style.display="none";
    cr2.style.display="block";
    cr1.style.display="none";
    cr3.style.display="none";
}
check[3].onclick=function(){
    cr.style.display="none";
    cr3.style.display="block";
    cr2.style.display="none";
    cr1.style.display="none";
}
check[0].onclick=function(){
    cr1.style.display="none";
    cr.style.display="block";
    cr2.style.display="none";
    cr3.style.display="none";
}
var mes=document.getElementsByClassName("mes")[0];
var mes1=document.getElementsByClassName("mes1")[0];
var mes2=document.getElementsByClassName("mes2")[0];
var btn =document.getElementsByClassName("btn");
btn[0].onclick=function(){
    mes.style.display="block"
    mes1.style.display="none"
    mes2.style.display="none"
    btn[0].style.color="black"
    btn[0].style.backgroundColor="white"

}
btn[1].onclick=function(){
    mes1.style.display="block"
    mes.style.display="none"
    mes2.style.display="none"
    btn[0].style.color="white"
    btn[0].style.backgroundColor="transparent"
 
}
btn[2].onclick=function(){
    mes2.style.display="block"
    mes1.style.display="none"
    mes.style.display="none"
    // btn[2].style.color="black"
    // btn[2].style.backgroundColor="white"
    btn[0].style.color="white"
    btn[0].style.backgroundColor="transparent"
    // btn[1].style.color="white"
    // btn[1].style.backgroundColor="transparent"
}