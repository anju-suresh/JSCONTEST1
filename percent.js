var y=document.getElementsByClassName("cards");
y.setAttribute("hidden","true");
function calcPercent(){
   var name =document.getElementById("nam").value; 
   var clas =document.getElementById("cls").value;   
   var mark1=parseInt(document.getElementById("mark1").value);
   var mark2=parseInt(document.getElementById("mark2").value);
   var mark3=parseInt(document.getElementById("mark3").value);
    //   var x=  document.getElementById("disp");
    //   $("x").show();
   document.getElementById("disp").style.display = "block";
//    var y=document.getElementsByClassName("cards");
//    y.setAttribute("hidden","true");
    // if (x.style.display === "none") {
    //      x.style.display = "block";
    // }else {
    //     x.style.display = "none";
    //  }
      if(isNaN(mark1)||isNaN(mark2)||isNaN(mark3))
     {
        persent="Can not find the persentage"
    }
    else{
        var total= mark1+mark2+mark3;
        var persent =parseInt((total*100)/300);
        if(persent<=40){
            
            document.getElementById("result").style.color="red";
        }
        else if(persent<=70){
            document.getElementById("result").style.color="orange";
        }
        else{
            document.getElementById("result").style.color="Green";
        }
        
        
    }
    
    document.getElementById("h").innerText="certificate of excellence";
    document.getElementById("one").innerHTML="The Percentage obtained by your ward "+name+" of class "+clas+" has scored";
    document.getElementById("result").innerHTML=persent;

}
        