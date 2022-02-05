let order = []

const swap = (arr, i, j) => { // swap function to swap given elements
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (dupBlocks, l, r) => { // partition the array 
    const pivot = l                     
    let j = l 

    for(let i = l + 1;i<=r;i++){        // iterate through unsorted array
        order.push([i, pivot, null, null])
        if(dupBlocks[i] < dupBlocks[pivot]){ // compare for smaller numbers
            j += 1 
            swap(dupBlocks, i, j)           // swap and save the numbers 
            order.push([i, j, dupBlocks.slice(), null])
        }
    }

    swap(dupBlocks, pivot, j)
    order.push([pivot, j, dupBlocks.slice(), null])
    order.push([null, null, null, j])
    return j
}


const quickSortHelper = (dupBlocks, l, r) => {
    if(l >= r) {
        if(l === r) order.push([null, null, null, l]) // return when array is of one element
        return
    } 

    const pivot = l + Math.floor(Math.random() * (r - l)) // determing pivot

    swap(dupBlocks, l, pivot)                           
    order.push([l, pivot, dupBlocks.slice(), null])

    const m = partition(dupBlocks, l, r) 

    quickSortHelper(dupBlocks, l, m - 1) // recursively quickSort left side of array
    quickSortHelper(dupBlocks, m + 1, r) // recursively quickSort right side of array

    return
}

const quickSort = (blocks) => {
    const dupBlocks = blocks.slice() // Copying blocks array
    order = []
    
    quickSortHelper(dupBlocks, 0, dupBlocks.length - 1)
    
    return order
}

export default quickSort
