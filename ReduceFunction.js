const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, item) =>{

return acc +item;
}, 0);

console.log(result);