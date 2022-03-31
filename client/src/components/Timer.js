//start recording time as soon as the level begins  
 window.onload = startTime;
  
 function startTime(){
   start = new Date();
 };
 
 function endTime(){
   end = new Date();
   var diff = end - start; //end result in ms
   diff /= 1000; //strip the ms
   var seconds = Math.round(diff); //round to present a less messy number
 }
