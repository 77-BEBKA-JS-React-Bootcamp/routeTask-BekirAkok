const tickets = [
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["USA", "BRA"],
  ["UAE", "JPN"]
];


const oneRow = tickets.map((oneRow) => oneRow[0])
const twoRow = tickets.map((secRow) => secRow[1])

const firstElement = () => {
  let difference = oneRow.filter((x) => twoRow.indexOf(x) === -1)
  return  difference[0]
}
const firstCount = firstElement(tickets);
let result = []

function routeFinder(arr , first ) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (first == arr[j][0]) {
        first = arr[j][1];
        result.push(first);
      }
    }
  }
}

result.push(firstCount);
routeFinder(tickets, firstCount);
console.warn(result);