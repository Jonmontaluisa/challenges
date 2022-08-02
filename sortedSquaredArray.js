const sortedSquareArray = (array) => {
  return array.map((e) => e*e).sort((a,b)=> a-b)
}

module.exports = {sortedSquareArray}