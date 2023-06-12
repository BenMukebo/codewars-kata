// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript
// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  // 1 => Loop through the array of objects and retrieve the firstName 
  // 2 => calculated the ASCII first name letter 
  // 3 => Check if the sum is odd and return it otherwise return an empty array []
  let findEl = [];

   let firstName = list.map(el => {
     let firstEl = el.firstName;
     let sum = 0;

     for(let i = 0; i < firstEl.length; i++){
       let code = firstEl.charCodeAt(i);
       sum += code;
     }

     if(sum % 2 != 0) {
       findEl.push(el);
       return findEl;
     }
   });

   return findEl;
}

// return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0 // Best, only online 
