//test for branch access

import React, { useState, useEffect } from 'react'
import './Game.css'
import LevelOne from './Levels/LevelOne'
import LevelTwo_Main from './Levels/LevelTwo_Main'
import LevelThree_Main from './Levels/LevelThree_Main'
import LevelFour_Main from './Levels/LevelFour_Main'
import LevelFive_Main from './Levels/LevelFive_Main'
import LevelSix_Main from './Levels/LevelSix_Main'
import LevelTemplate from './Levels/Leveltemplate'
import WinnerLoser from './Levels/WinnerLoser'
import Audio from './components/Audio'

const Game = () => {

    //states 
    const [level, setLevel] = useState(1);
    const [lives, setLives] = useState(3);
    const [algo, setAlgo] = useState('Merge');
    const [next, setNext] = useState('');
    const [time, setTime] = useState('Timer');

    const handleReset = () => {
        setLives(3);
        setLevel(1);
    }

    if(!level==1 ){
        setNext( '<button onClick = {() => {setLives(lives+1)}}>Previous Step</button> <button onClick = {() => {setLives(lives-1)}}>Next Step</button>')
        }

        /*
            <button onClick = {() => {if(!(lives==0)){setLives(lives-1)}}}>SUBTRACT LIFE</button>
            <button onClick = {() => {setLives(lives+1)}}>ADD LIFE</button>
        */

    return (
        <div className = 'game' >
            <h1 id = 'centered'>Welcome, {window.current_user}. Can you sort this?</h1>

            <div className = "progressBar">
                <p>
                <button onClick = {() => {if(!(level==1)){setLevel(level-1)}}}>PREVIOUS LEVEL</button>
                <button onClick = {() => {if(!(level==7)){setLevel(level+1)}}}>NEXT LEVEL</button>
                
                </p>
                
                <div>
                    Lives: {lives} 
                </div>

                <div>
                    Level: {level}
                </div>

                <div>
                    Algorithm: {algo}
                </div>
                
            </div>
        
            
            {(() => {
        		switch (level) {
         			case 1:
            			return <LevelOne/>
         			case 2:
            			return <LevelTwo_Main lives = {lives} setLives = {setLives} setLevel = {setLevel} level = {level}/>
          			case 3:
            			return <LevelThree_Main lives = {lives} setLives = {setLives} setLevel = {setLevel} level = {level}/>
                    case 4:
                        return <LevelFour_Main lives = {lives} setLives = {setLives} setLevel = {setLevel} level = {level}/>
                    case 5:
                        return <LevelFive_Main lives = {lives} setLives = {setLives} setLevel = {setLevel} level = {level}/>
                    case 6:
                        return <LevelSix_Main lives = {lives} setLives = {setLives} setLevel = {setLevel} level = {level}/>
					default:
            			return <WinnerLoser lives = {lives} handleReset={() => handleReset()}/>
                        
        		}
      		})()}



            <div>
                {next}
            </div>
            



            
        </div>
    )
}

export default Game
