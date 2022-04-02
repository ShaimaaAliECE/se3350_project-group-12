import React from 'react'

const WinSound = new Audio('/win.mp3');
const LoseSound = new Audio('/lose.mp3');

const WinnerLoser = ({lives, handleResetToStart, handleReset}) => {

    
    const Winner = () => {
        return (<>
            <h1>Winner! You won the game with {lives} lives remaining. </h1>
            <button onClick = {handleReset}>Try Again</button>
        </>);
    }
    
    const Loser = () => {
        return (<>
            <h1>You lose :( You have no lives remaining. </h1>
            <button onClick = {handleResetToStart}>Try Again From Beginning</button>
            <button onClick = {handleReset}>Try This Level Again</button>
            </>);
    }

    return <>

        
        {(()=>
            {
                if (lives > 0) {
                    return <Winner/>
                } else {
                    return <Loser/>
                }
            }
        )()}
    </>

    
}

export default WinnerLoser;