import React, { useState, useEffect } from 'react'
import './Scoreboard.css'
import '

const Scoreboard = () =>{
  let lives = 3;
  let winOrLose = true; //this will differ depending on the algorithm
  
  //variables to record time
  var start, end; 
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
  if(!winOrLose){
     lives -=;
  }
  if(lives == 0){
    location.reload();
  }
  
  return(
    <div clasName = 'scoreboard'> 
      <h1>Level:  Time:  Lives:</h1>  
    </div>
  )
}
export default Scoreboard
