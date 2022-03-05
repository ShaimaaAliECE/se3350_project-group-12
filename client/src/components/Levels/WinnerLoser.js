import React from 'react'


const WinnerLoser = ({lives, handleReset}) => {

    const Winner = () => {
        return (<>
            <h1>Winner! You won the game with {lives} lives remaining.</h1>
            <button onClick = {handleReset}>Try Again</button>
        </>);
    }
    
    const Loser = () => {
        return (<>
            <h1>Loser. You have no lives remaining</h1>
            <button onClick = {handleReset}>Try Again</button>
        </>);
    }

    return <>

        <h2>this is the winner loser message</h2>
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