import fs from 'fs'
import readline from 'readline'

const numbers: Record<string,number> = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
};

const matcher = (str: string) => {
    let results = "";
    for (let i = 0; i < str.length; i++) {
      // check if number
      if (Number(str[i])) {
        results += Number(str[i]);
      }
      // there is no sense for checking strings shorter than 3
      else if (str.length >= 3) {
        Object.keys(numbers).forEach((nmbr) => {
          if(str.substr(i).startsWith(nmbr)){
                    results += numbers[nmbr];
          }
        });
      }
    }
    return results;
}
//input.forEach((el) => el.matchAll(matcher));
const readInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

let input:string[] = []
readInterface.on('line', function(line) {
  input.push(line);
});

readInterface.on('close', function() {
  console.log("Result 1 task is", input
    .map((line) => Array.from(line).filter(Number)).reduce((acc,curr)=> acc + Number('' + curr[0] + curr[curr.length-1]),0 )
  )

  console.log("Result 2 task is: ", input.map(matcher).reduce((acc,curr)=> acc + Number('' + curr[0] + curr[curr.length-1]),0 ));

});


