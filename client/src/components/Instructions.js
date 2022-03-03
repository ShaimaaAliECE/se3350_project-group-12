import React from 'react'
import './Instructions.css'

const Instructions = () => { //instructions page for how to use the application and algorithms
    return (
        <div className='instructions'>

            <h1>Game Play Instructions</h1>
            
            <spacer></spacer>

            <h2>Overview:</h2>
                <body> This game lets you visualize and interact with how the MERGE-SORT algorithm would work. Each level will show you or allow you to try implementing the algorithm in theory for yourself.</body>
                <body>The array is recursively divided into two halves till the size becomes 1. Once the size becomes 1, the merge processes come into action and start merging arrays back till the complete array is merged.</body>
                <body>In doing so, we arrange the items in ascending order with the "nextdoor" values to assure order, and then allow the merging back of values.</body>
            
            <spacer></spacer>

            <h2>Level 1:</h2>
                <body>Navigating to the HOME page will show you an animation of the MERGE-SORT algorithm in effect, and the visual lets you understand how values are reorganized at each step. This core activity is what you'll be tested on in further levels. </body>
            
            <spacer></spacer>

            <h2>Level 2:</h2>
                <body>This level will allow you to get a guided, step-by-step tutorial on how to reorganize values in working with the algorithm with hints! </body>
            
            <spacer></spacer>
                
            <h2>Level 3:</h2>
                <body>This level throws you into the deep end! You'll be asked to do the same steps, but with no help. Luckily, you'll have fewer numbers and a less complex game situation to deal with.</body>
            
            <spacer></spacer>
    
            <h2>Level 4:</h2>
                <body>This level throws you into the deep end! You'll be asked to do the same steps, but with no help. You'll need to work with a slightly more complex array of values.</body>
            
            <spacer></spacer>

            <h2>Level 5:</h2>
                <body>The final round! You'll face the most complex game situation: the highest range of values and the highest number of items. Good luck! </body>
            
            <spacer></spacer>

        </div>
    )
}

export default Instructions