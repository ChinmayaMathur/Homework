// ------------------drawLine function------------------------------->

function drawLine(num) {
      let result = '';
      if (num < 0) {
            return "Put a Positive number"
      } else {
            for (i = 1; i <= num; i++) {
                  result += '━'
            }
            return result;
      }  
}

console.log(drawLine(4));
console.log(drawLine(8));
console.log(drawLine(0));
console.log(drawLine(-1));



// ---------------------drawTopBorder function------------------------->

function drawTopBorder(num) {
      if (num < 0) {
            return "Put a positive number";
      } else if (num == 0) {
            return "┏" + "┓";
      } else {
            return "┏" + drawLine(num) + "┓";
      }
}

console.log(drawTopBorder(4));
console.log(drawTopBorder(0));
console.log(drawTopBorder(1));
console.log(drawTopBorder(-3));



// -------------------drawMiddleBorder function---------------------------->

function drawMiddleBorder(num) {
      if (num < 0) {
            return "Put a positive number";
      } else if (num == 0) {
            return "┣" + "┫";
      } else {
            return "┣" + drawLine(num) + "┫";
      }
}

console.log(drawMiddleBorder(8));
console.log(drawMiddleBorder(0));



// -------------------------drawBottomBorder funciton-------------------------------->

function drawBottomBorder(num) {
      if (num < 0) {
            return "Put a positive number";
      } else if (num == 0) {
            return "┗" + "┛";
      } else {
            return "┗" + drawLine(num) + "┛";
      }
}

console.log(drawBottomBorder(2));



// ------------------------drawBarsAround function-------------------------------->

function drawBarsAround(str) {
      if (str.length == 0) {
            return "Put a string";
      } else {
            return "┃" + str + "┃";  
      }  
}

console.log(drawBarsAround("My name is Dan"))
console.log(drawBarsAround("You are Jane  "))
console.log(drawBarsAround("  You are Bill"))



// --------------------boxIt function--------------------------------->

function boxIt(arr) {
      let a = 0;
      largest = '';
      for (let j = 0; j < arr.length; j++) {
            if (arr[j].length > a) {
                  a = arr[j].length
                  largest  = arr[j];
            }
      }

      const top = drawTopBorder(largest.length)
      const bottom = drawBottomBorder(largest.length)
      let final = "";
      for (let i = 0; i < arr.length; i++) {
            const add = " ".repeat(largest.length-arr[i].length)
            if (arr.length == 1) {
                  final = drawBarsAround(arr[i] + add);
            } else if (i == arr.length-1) {
                  final += `${drawBarsAround(arr[i] + add)}`
            } else {
                  final += `${drawBarsAround(arr[i] + add)}\n${drawMiddleBorder(largest.length)}\n`
            } 
      }
     return `${top}\n${final}\n${bottom}`;
}

console.log(boxIt(['Jon Snow','Cersei Lannister','Daenerys Targaryen']))
console.log(boxIt(['Jon Snow']))
console.log(boxIt(['Jon Snow', 'Cersei Lannister']))



// -------------------------------------Piecing it together---------------------------------------------------->

const arr = process.argv.slice(2);
let a = 0;
largest = '';

for (let j = 0; j < arr.length; j++) {
      if (arr[j].length > a) {
            a = arr[j].length
            largest  = arr[j];
      }
}

const top = drawTopBorder(largest.length)
const bottom = drawBottomBorder(largest.length)
let final = "";
for (let i = 0; i < arr.length; i++) {
      const add = " ".repeat(largest.length-arr[i].length)
      if (arr.length == 1) {
            final = drawBarsAround(arr[i] + add);
      } else if (i == arr.length-1) {
            final += `${drawBarsAround(arr[i] + add)}`
      } else {
            final += `${drawBarsAround(arr[i] + add)}\n${drawMiddleBorder(largest.length)}\n`
      } 
}
console.log(`${top}\n${final}\n${bottom}`);