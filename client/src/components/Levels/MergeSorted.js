import React, { useState, useEffect } from 'react'

export const MergeSorted = () => {
    const [blocks, setBlocks] = useState([]);
    const [steps, setSteps] = useState([]);

    let history = [];

    let order = [];

    const merge = (dupBlocks, l, mid, r) => {   
        let i = l, j = mid + 1

        const arr = [] 

        while((i <= mid) && (j <= r)){ // iterate through while both halves are unchecked
            order.push([i, j, null, null])      
            if(dupBlocks[i] <= dupBlocks[j]){   // compare i-th and j-th element 
                arr.push(dupBlocks[i++])
            } else {
                arr.push(dupBlocks[j++])
            }
        }

        while(i <= mid){ // iterate through head side to save elements
            order.push([i, null, null, null])
            arr.push(dupBlocks[i++])
        }

        while(j <= r){ // iterate through tail side to save elements
            order.push([null, j, null, null])
            arr.push(dupBlocks[j++])
        }
    
        for(i=l;i<=r;i++){ // iterate and merge two sorted arrays
            dupBlocks[i] = arr[i - l]
            order.push([i, null, dupBlocks.slice(), null]) 
        }

    }

    const mergeSortHelper = (dupBlocks, l, r) => {
        if(l >= r)          // error checking for end of sorting needs
            return 
    
        const mid = Math.floor((l + r) / 2) // find pivot

        mergeSortHelper(dupBlocks, l, mid) // sort through left side of pivot
        mergeSortHelper(dupBlocks, mid + 1, r)  // sort through right side of pivot
    
        merge(dupBlocks, l, mid, r) // merge both halves
    }

    const mergeSort = (blocks) => {
        order = []
        const dupBlocks = blocks.slice() // copying blocks array
    
        mergeSortHelper(dupBlocks, 0, dupBlocks.length - 1)
    
        for(let i=0;i<dupBlocks.length;i++){
            order.push([null, null, null, i]) // sorted i-th element is pushed to the correct position (Sorted area)
            history.push(order);
        }

        return order // return sorted array
    } 

    const initSteps = () => {
        setSteps(history);
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

    generateRandomArray(10);

    mergeSort(blocks);
    initSteps();
    console.log(history)

    const generateFlipBook = () => {

        for (let step of steps) {

        }
    }

    return (
        <>
            <h1>hello</h1>
        </>
    )

    /*
    return (
        <>
            <div className = 'table'>
                <ul id = 'horizontal-list'>
                    {blocks.map(block => (<li key = {block}>{block}</li>))}
                </ul>
            </div>
            
        </>
    )
    */
}

export default MergeSorted 