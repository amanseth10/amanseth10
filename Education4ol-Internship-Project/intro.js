  
 var s= document.getElementsByClassName("clicked");
 var con=document.getElementsByClassName("container");
 
 function floating1(){ 
    s[0].setAttribute("style","display:block;");
    con[0].setAttribute("style","border:4px solid rgb(20, 56, 75)");
    document.getElementById("floating-bar").setAttribute("style","display:block;");
    document.getElementById("foot1").classList.add("add-class1"); 
    document.getElementById("container1").classList.add("add-border"); 
    document.getElementById("foot2").classList.remove("add-class1");  
    document.getElementById("container2").classList.remove("add-border");   
 }
 function floating2(){
    
   s[0].setAttribute("style","display:block;");
   con[1].setAttribute("style","border:4px solid rgb(20, 56, 75)");
   document.getElementById("floating-bar").setAttribute("style","display:block;");
   document.getElementById("foot2").classList.add("add-class1");
   document.getElementById("container2").classList.add("add-border"); 
   document.getElementById("foot1").classList.remove("add-class1");
   document.getElementById("container1").classList.remove("add-border");
}
function refresh(){
  location.reload();
}
function finalSubmit(){
  
  document.getElementById("floating-bar").setAttribute("style","display:none;");
  document.getElementById("final-submit").setAttribute("style","display:flex;");
}
 
  