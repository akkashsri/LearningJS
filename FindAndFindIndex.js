const numArr= [-5,-4,-3,-2,-1,1,2,3,4,5];

const result= numArr.find((item) => {
    return (item%2===0 && item>=0);
})

const index= numArr.findIndex((item) => {
    return (item%2===0 && item>=0);
})

console.log(`First positive even no. is ${result} of index ${index}`);
