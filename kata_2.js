// https://www.codewars.com/kata/5a2950621f7f70c12d000073/train/javascript
// Compression : impossible

const mangle = (integers) => {
   // 1 => Pick a random number from the array.
   //  get random index value
    const randomIndex = Math.floor(Math.random() * integers.length);
   //  get a random item
   //  const item = integers[randomIndex];
    const item = integers.splice(randomIndex, 1);
    return  integers;
};

const guess = (mangled) => {
  // 2 => Return the remaining number.
    console.log(mangled);
    return mangled;
    // return mangled[0];
}
