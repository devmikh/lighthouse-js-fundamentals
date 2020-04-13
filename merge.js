const merge = function(array1, array2){
  // Add elements from second array to first array
  for (let i = 0; i < array2.length; i++){
    array1.push(array2[i]);
  }

  // Implement bubble sort for the merged array
  for (let i = 0; i < array1.length-1; i++) 
    for (let j = 0; j < array1.length-i-1; j++) 
      if (array1[j] > array1[j+1]) 
      {
        let temp = array1[j]; 
        array1[j] = array1[j+1]; 
        array1[j+1] = temp; 
      } 

  return array1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);