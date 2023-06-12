// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript
// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  // 1 => Loop throuth the array of oject and retrive the firstName 
  // 2 => calculated the ASCII firstNAme leeter 
  // 3 => Check if the sum is an odd and return it otherwise return an empty array []
  let findEl = [];
  let firstName = list.map(el => {
    let firstEl = el.firstName;
    let sum = 0;

    for(let i = 0; i < firstEl.length; i++){
      let code = firstEl.charCodeAt(i);
      sum = sum + code;
    }

    if(sum % 2 != 0) {
      findEl.push(el);
      return findEl;
    }
    else {
      if(findEl.length == list.length) {
        return findEl = [];
      }
    } 
   });

   return findEl;
}
