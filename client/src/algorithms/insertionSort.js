const swap = (arr, i, j) => { // swap function to swap given elements
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const insertionSort = (blocks) => {

    const dupBlocks = blocks.slice() // copying blocks array
    const order = []

    let i, j
    
    for (i = 0; i < dupBlocks.length; i++) { // iterate through and sort the array
        j = i - 1
        while(j >= 0 && dupBlocks[j] > dupBlocks[j + 1]) { // compare to find bigger elements and swap if needed
            swap(dupBlocks, j, j + 1)
            order.push([j, j + 1, null, null])              
            order.push([j, j + 1, dupBlocks.slice(), null]) // swap the subjects
            j -= 1
        }
    }

    for(i=0;i<dupBlocks.length;i++){ // iterate through and save the sorted array
        order.push([null, null, null, i])
    }

    return order // return sorted array
}

export default insertionSort
