import React from 'react'
import Soundplay from '../Audio'


const WinnerLoser = ({lives, handleReset}) => {

    
    const win = () => {
        return (<>
            <h1>Winner! You won the game with {lives} lives remaining.</h1>
            <button onClick = {handleReset}>Try Again</button>
        </>);
    }

    class Winner extends React.Component {
        render() {
          return (
            <h1>Winner! You won the game with {lives} lives remaining.</h1>,
            <button onClick = {handleReset}>Try Again</button>,
            <div>
              <audio ref="audio_tag" src="/win.mp3" controls autoPlay/>
            </div>
          );
        }
      }

    class Loser extends React.Component {
    render() {
        return (
        <h1>Winner! You won the game with {lives} lives remaining.</h1>,
        <button onClick = {handleReset}>Try Again</button>,
        <div>
            <h1>Loser. You have no lives remaining</h1>,
            <button onClick = {handleReset}>Try Again</button>,
            <audio ref="audio_tag" src="/lose.mp3" controls autoPlay/>
        </div>
        );
    }
    }
    
    const lose = () => {
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