import React, { useState, useEffect } from 'react'
const Audio = () =>{
    let level;
    let source;
    if(level < 3){
        source = "https://www.youtube.com/watch?v=Jb6Kwd8KWNg&ab_channel=Ther%C3%B3kMSM";
    }else {
        source = "https://www.youtube.com/watch?v=KsoxjylnQ68&ab_channel=kendowater";
    }
    return(
        <audio autoplay="autoplay">
            <source src = source/>
        </audio>
    )
}
export default Audio
