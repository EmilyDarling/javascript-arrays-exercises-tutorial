let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];
let chunkthree = ['cat', 'dog'];

const mergeArrays = ( ...arrays) => {
    console.log(arrays);
    let newArray = [];
    // Your code here
    for(let i=0; i<arrays.length;i++){
        arrays[i].forEach(element => {
            newArray.push(element);
        });
    }
    
    return newArray;
}

console.log(mergeArrays(chunkOne, chunkTwo, chunkthree ));
