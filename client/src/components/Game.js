import React, { useState, useEffect } from 'react'
import './Game.css'
import LevelOne from './Levels/LevelOne'
import LevelTwo from './Levels/LevelTwo'
import LevelThree from './Levels/LevelThree'


const Game = () => {

    //states 
    const [level, setLevel] = useState(1);
    const [lives, setLives] = useState(3);
    const [algo, setAlgo] = useState('Merge');

    return (
        <div className = 'game' >
            <h1 id = 'centered'>Can you sort it?</h1>

            <div className = "progressBar">
                <button onClick = {() => {setLevel(level+1)}}>Next Level</button>
                <button onClick = {() => {setLevel(level-1)}}>Previous Level</button>
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
            			return <LevelTwo/>
          			case 3:
            			return <LevelThree/>
					case 4:
            			return <div></div>
          			case 5:
            			return <div></div>
          			default:
            			return null  
        		}
      		})()}
        </div>
    )
}

export default Game