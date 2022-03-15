import React, { useState, useEffect } from 'react'
import './Game.css'
import LevelOne from './Levels/LevelOne'
import LevelTwo from './Levels/LevelTwo'
import LevelThree from './Levels/LevelThree'
import WinnerLoser from './Levels/WinnerLoser'


const Game = () => {

    //states 
    const [level, setLevel] = useState(1);
    const [lives, setLives] = useState(3);
    const [algo, setAlgo] = useState('Merge');

    const handleReset = () => {
        setLives(3);
        setLevel(1);
    }

    return (
        <div className = 'game' >
            <h1 id = 'centered'>Can you sort it?</h1>

            <div className = "progressBar">
                <button onClick = {() => {setLevel(level+1)}}>Next Level</button>
                <button onClick = {() => {setLevel(level-1)}}>Previous Level</button>
                <button onClick = {() => {setLives(lives+1)}}>Add lives</button>
                <button onClick = {() => {setLives(lives-1)}}>Subtract Lives</button>
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
            
            {
            lives === 0 && <WinnerLoser lives = {lives} handleReset={() => handleReset()}/>
            }
            
            {(() => {
        		switch (level) {
         			case 1:
            			return <LevelOne/>
         			case 2:
            			return <LevelTwo/>
          			case 3:
            			return <LevelThree/>
					default:
            			return <WinnerLoser lives = {lives} handleReset={() => handleReset()}/>
        		}
      		})()}



            <div>
                <button onClick = {() => {setLives(lives+1)}}>Previous Step</button>
                <button onClick = {() => {setLives(lives-1)}}>Next Step</button>
            </div>
            



            
        </div>
    )
}

export default Game