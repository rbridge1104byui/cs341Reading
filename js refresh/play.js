const { text } = require("express");

const fetchData = callback => {
    const promise = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Done');
            
        }, 1500);        
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text =>{
        console.log(text);
    });
}, 2000);

console.log('Hell0');
console.log('hi');







// const person = {
//     name : 'Max',
//     age : 29,
//     greet()  {
//         console.log('Hi, I am ' + this.name);
//     }
// };

// const printName = ({name}) =>{
//     console.log(name);
// }
// printName(person);

// const hobbies = ['Sports', 'Cooking'];
// // for (let hobby of hobbies){
//     console.log(hobby);

// }
// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// }));

// hobbies.push('Programming');
// console.log(hobbies);

// // const copiedArray = [...hobbies];
// // console.log(copiedArray);

// const toArray = (... args) =>{ return args;}
// console.log(1,2,3,4);