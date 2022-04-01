import React, { useState, useEffect } from 'react'
import './Scoreboard.css'

const Scoreboard = () =>{
  let lives = 3;
  let winOrLose = true; //this will differ depending on the algorithm
   
  if(!winOrLose){
     lives -= 1;
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
