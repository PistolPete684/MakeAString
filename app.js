function stringy(size) {
  //setup the string that will be returned
  let result = '';
  //setup a for loop that adds alternting 1's and 0's for the length given by the size argument
  for (let i = 0; i < size; i++) {
    result += i % 2 === 0 ? '1' : '0';
  }
  //return the new array
  return result;
}