const swap = (arr, i, j) => { // swap function to swap given elements
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const selectionSort = (blocks) => {

    const dupBlocks = blocks.slice() // copying blocks array
    const order = []

    let i, j
    
    for (i = 0; i < dupBlocks.length; i++) { // move boundary of the unsorted array by one increment
        for (j = i + 1; j < dupBlocks.length; j++) {

            order.push([i, j, null, null])                  // compare to find bigger elements and swap if needed
            if (dupBlocks[i] > dupBlocks[j]) {
                swap(dupBlocks, i, j)
                order.push([i, j, dupBlocks.slice(), null]) // swap the two subjects
            }
        }
        order.push([null, null, null, i]) // sorted i-th element is pushed to the correct position (Sorted area)
    }

    return order // return sorted array
}

export default selectionSort
