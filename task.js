const data = guestsInfo[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]


function calcAvgAge(array) {
  
    let sum = array.reduce(
      function (accumulator, currentValue) {
        return accumulator + currentValue.age;
      }
    );
    
    console.log(sum / array.length)
  }
  