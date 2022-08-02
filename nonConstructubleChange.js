// solution based on https://stackoverflow.com/questions/67099988/how-to-devise-this-solution-to-non-constructible-change-challenge-from-algoexper

const nonCostructubleChange = (array) => {
  const sortedArray = array.sort((a,b)=> a-b);
  let change = 0;
  for(let i=0; i<sortedArray.length; i++){
    if (sortedArray[i] > change+1){
      return change +1
    }
    change += sortedArray[i]
  }
  return change + 1 
}


module.exports = {nonCostructubleChange}