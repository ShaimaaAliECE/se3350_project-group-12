import React from 'react'


const Soundplay = ({lives}) => {

    class Winsound extends React.Component {
        render() {
          return (
            <div>
              <audio ref="audio_tag" src="./Levels/win.wav" controls autoPlay/>
            </div>
          );
        }
      }

    class Losesound extends React.Component {
    render() {
        return (
        <div>
            <audio ref="audio_tag" src="./Levels/win.wav" controls autoPlay/>
        </div>
        );
    }
    }

    return <>

        <h2>working</h2>
        {(()=>
            {
                if (lives > 0) {
                    return <Winsound/>
                } else {
                    return <Losesound/>
                }
            }
        )()}
    </>

}


export default Soundplay;