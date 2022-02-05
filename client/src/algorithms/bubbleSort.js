const swap = (arr, i, j) => { // swap function to swap given elements
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const bubbleSort = (blocks) => {

    const dupBlocks = blocks.slice() // copying blocks array
    const order = []

    let i, j
    
    for (i = 0; i < dupBlocks.length; i++) {
        for (j = 0; j < dupBlocks.length - i - 1; j++) {

            order.push([j, j + 1, null, null])                  
            if (dupBlocks[j] > dupBlocks[j + 1]) {              // compare to find bigger elements and swap if needed
                swap(dupBlocks, j, j + 1)
                order.push([j, j + 1, dupBlocks.slice(), null])     // swap the two subjects
            }
        }
        order.push([null, null, null, j]) // sorted j-th element is pushed to the correct position ( Sorted area)
    }

    return order // return sorted array
}

export default bubbleSort
