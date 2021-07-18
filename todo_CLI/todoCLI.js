const fs = require("fs")
const readline = require('readline');
let list = []
let fileName = "todoList.txt"
let file = process.argv[2]

const interface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        prompt: "> "
    }
);

console.log("Welcome to Todo CLI! \n");

console.log("---------------------- \n");

let menu = "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit"

console.log(menu);

interface.prompt();

interface.on('line', line => {
      if (line == "v") {

            if (list === undefined || list.length == 0) {
                  console.log("List is empty...")
                  console.log(`\n ${menu}`);
            } else {
                  list.forEach((line, index) => {
                        console.log(`${index} ${line}`);
                  })
                  console.log(`\n ${menu}`);
            }
          
            // fs.readFile(file || fileName, "utf8", (err,data) => {
            //       if(data.length == 0 || data === undefined) {
            //             console.log("List is empty...")
            //             console.log(`\n ${menu}`);
            //       } else {
            //             const fileContents = data.toString();
            //             const newLine = `\n`;
            //             const linesArray = fileContents.split(newLine);
            //             linesArray.forEach((line, index) => {
            //                   console.log(`${index} ${line}`);
            //             })
            //             console.log(`\n ${menu}`);
            //       }
            
            
      } else if (line == "n") {     
            let box = "[]"
            interface.question("What would you like to add? \n", (answer) => {
                  list.push(`${box} ${answer}`)
                  console.log(`\n ${menu}`)
            })

      } else if (line[0] == "c") {
            let index = line[1];
            let task = list[index].slice(3)
            list[index] = `[✓] ${task}`
            console.log(`Completed "${task}"`)
            console.log(`\n ${menu}`)

      } else if (line[0] == "d") {
            let index = line[1];
            let task = list[index].slice(3)
            list.splice(index, 1)
            console.log(`Deleted "${task}"`)  
            console.log(`\n ${menu}`)    

      } else if (line == "s") {
            interface.question('Where would you like to save it?\n', (answer) => {
                  let newList = list.toString().replace(',', '\n')
                  if (answer) {
                        fs.writeFile(answer, newList, (error) => {
                              if (error) {
                                    console.log(error)
                              } else {
                                    console.log(`List saved to '${answer}!`);
                              }
                              console.log(`\n ${menu}`)  
                        })
                  } else {
                        fs.writeFile(fileName, newList, (error) => {
                              if (error) {
                                    console.log(error)
                              } else {
                                    console.log(`List saved to '${fileName}`);
                              }
                              console.log(`\n ${menu}`)  
                        })
                  }   
            })

      } else if (line == "q") {
            console.log("See you soon")
            process.exit();

      } else {
            console.log('invalid input')
            console.log(`\n ${menu}`) 
            interface.prompt()
      }
                 
})
           