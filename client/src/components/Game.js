import React, { useState, useEffect } from 'react'
import './Game.css'


import bubbleSort from '../algorithms/bubbleSort'
import insertionSort from '../algorithms/insertionSort'
import selectionSort from '../algorithms/selectionSort'
import mergeSort from '../algorithms/mergeSort'
import quickSort from '../algorithms/quickSort'


const Game = () => {

    //states 
    const [level, setLevel] = useState(1);
    const [lives, setLives] = useState(3);
    const [len, setLength] = useState(10);
    const [blocks, setBlocks] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [algo, setAlgo] = useState('Merge');
     

    //this function should return true or false and will be used for level one
    const handleAnswer = () => {
        
        //if the solution is true 
        if (answer) {
            
        }
        

        //actually first need to grab the current array values and the answer values 
        //then check if the response is true 
        //if the answer is true then change level state to next level
        //if the answer is false then change the lives state
        //if lives < 1 then display losing message and reset the game 
        

    }

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value)
    }
    //used to create a random array of numbers
    const generateRandomArray = (len) => {

		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		
		setBlocks(randomArray)
	}

    useEffect(() => {
        generateRandomArray(len)
    }, [len, level, lives, algo])



    return (
        <div className = 'game' >
            <h1 id = 'centered'>Can you sort it?</h1>

            <div className = "progressBar">
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

            <div className = 'question' id = 'centered'>
                In the text box below, write the array values of the next step in the sorting algorithm.
            </div>
            
            
            {(() => {
        		switch (level) {
         			case 1:
            			return (<div className = 'table'>
                            <ul id = 'horizontal-list'>
                                {blocks.map(block => (<li key = {block}>{block}</li>))}
                            </ul>
                            </div>)
         			case 2:
            			return <div></div>
          			case 3:
            			return <div></div>
					case 4:
            			return <div></div>
          			case 5:
            			return <div></div>
          			default:
            			return null  
        		}
      		})()}

            <div id = 'centered'>
                <form onSubmit = {handleAnswer}>
                    <label>
                        Solution: 
                        <input type = "text" value = {answer} onChange = {handleAnswerChange}/>
                    </label>
                    <input type = "submit" value = 'Submit'/>
                </form>
            </div>
            <p id = "centered">This is the current value of the answer: {answer}</p>
        </div>

    )
}

export default Game