// BINARY SEARCH PSEUDCODE

// Function that accepts a sorted array, 
// it must be sorted, this function also 
// accepts a value

// Create a left pointer, at the start of the 
// array, and a right pointer at the end of 
// the array

// While loop, while the left pointer comes 
// before the right pointer: 

// Check one, did we find the element already? 
// While we haven't found the element keep looping

// check two, only loop while the left comes 
// before the right, then also pick the middle

// if left pointer is 0 and right pointer is 
// 12, then 6 is the middle, then loop, 
// is element equal to 6? If true return

// If value is too small, move left pointer up

// If value is too large move right pointer down

// And if the value is never found, return -1 

function binarySearch(sortedArr: number[], element: number){
    let start = 0;
    // start is our left pointer
    let end = sortedArr.length -1;
    // end is our right pointer
    let middlePointer = Math.floor((start + end) / 2);
    // middlepointer will grab the middle of
    // the array by adding 0 + the length 
    // of the array, and dividing by twi, it will 
    // also round  down if we get a decimal number
        console.log(start, middlePointer, end)
        while(sortedArr[middlePointer] !== element){
            // so if we're in here we can assumne 
            // the middle pointer is not yet at the 
            // desired eleement

            // so we want 15, 15 is greater than the 
            // middle pointer, so we now need to move 
            // the start pointer to 13, because we now 
            // know for sure it's not 2, 5, 6, or 9
            // so we can skip checking those 
            if(element < sortedArr[middlePointer]){
                // so if our element 
            }


        }
        // we'll loop while the middle pointer is not 
        // equal to the element we want
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)
//            S         M              E
