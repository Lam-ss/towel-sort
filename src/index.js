
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length) return [];
  let ss = matrix.map((currentValue, index) => {
    if(index % 2 === 0) {
      return currentValue.sort((x,y)=>x-y);
    }
    return currentValue.sort((x,y)=> y-x)
  }).reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  return ss;
}
