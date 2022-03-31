import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = () =>{

 var diff;
 var seconds; 
 //start recording time as soon as the level begins  
 window.onload = startTime;
  
 function startTime(){
   start = new Date();
 };
 
 function endTime(){
   end = new Date();
   diff = end - start; //end result in ms
   diff /= 1000; //strip the ms
   seconds = Math.round(diff); //round to present a less messy number
 }
 console.log(start.getSeconds());
/// return (
  //   <div className = 'timer'>
    //     start.getTime();
   //  </div>
 //)
}
export default Timer
