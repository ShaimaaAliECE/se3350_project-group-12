import React, {useState, useEffect}from 'react'
//level 2 and 3 were suposed to be doen for release 1 but due to our negligence we have fallen behind on these, we intend
//to make up for this over the next 2 weeks and hopefully be on schedule for sprint 4

const LevelTwo = () => { 
    //states 
    const [level, setLevel] = useState(2);
    const [lives, setLives] = useState(3);
    const [len, setLength] = useState(10);
    const [blocks, setBlocks] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [algo, setAlgo] = useState('Merge');

    var time, timeSite;
    window.onload = function(){
        time = new Date();
    }

    window.onbeforeunload = function(){
        timeSite = new Date()-time;
        window.localStorage['timeSite'] = timeSite;
    }
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
    return (
        <div>
            
            This is a template for LevelTwo yet to be written.
        </div>
    )
}

export default LevelTwo
