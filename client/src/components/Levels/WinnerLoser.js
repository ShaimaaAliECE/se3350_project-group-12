import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

const WinSound = new Audio('/win.mp3');
const LoseSound = new Audio('/lose.mp3');

const PlayWin = () => {
    WinSound.load();
    WinSound.play();
}

const PlayLose = () => {
    LoseSound.load();
    LoseSound.play();
}

const WinnerLoser = ({lives, handleReset}) => {

    
    const Winner = () => {
        return (<>
            <h1>Winner! You won the game with {lives} lives remaining.</h1>
            {PlayWin}
            <button onClick = {handleReset}>Try Again</button>
            <ReactAudioPlayer
            src="win.mp3"
            autoPlay
            />
        </>);
    }
    
    const Loser = () => {
        return (<>
            <h1>Loser. You have no lives remaining</h1>
            {PlayLose}
            <button onClick = {handleReset}>Try Again</button>
            <ReactAudioPlayer
            src="lose.mp3"
            autoPlay
            />
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