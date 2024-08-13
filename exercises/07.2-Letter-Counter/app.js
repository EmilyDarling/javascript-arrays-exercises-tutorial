 let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

let counts = {};

// Your code here
let lower = par.toLowerCase();
for(let i=0; i< lower.length;i++){
    if(lower[i] == " ") {}
    else if(!(lower[i] in counts)){
        counts[lower[i]] = 1
    }
    else{
        counts[lower[i]]++; 
    }
}
 console.log(counts);
 
