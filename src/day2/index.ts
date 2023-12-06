import fs from 'fs'
import readline from 'readline'
type color = 'red' | 'green' | 'blue'
//
// limits of color task 1
const colors: Record<color, number> = {
'green':13,
'red':12,
'blue':14
}

const colorIndex: Record<string, number> = {
'green':1,
'red':0,
'blue':2
}

const calculateMinCubes = (line: string): [number, number, number] => {
 const [gameNo, decks] =line.split(':') 
  const parsedDeckes = decks.split(';')
  const rgb: [number, number, number] = [0,0,0];
  parsedDeckes.forEach(deck=>{
    deck.split(',').map(col => Array.from(col.matchAll(/([0-9]+) ([a-z]+)/g)).map((e)=>{
      const colorName = e[2] as color 
      if(
        rgb[colorIndex[colorName]] < Number(e[1]) ) {
        rgb[colorIndex[colorName]] = Number(e[1])
      }
      }
    ))
  })

  return rgb
}

const parser = (line: string) => {
 const [gameNo, decks] =line.split(':') 
  const parsedDeckes = decks.split(';')
  let output = Number(Array.from(gameNo.matchAll(/([0-9])+/g)).map(e=>e[0]))

  parsedDeckes.forEach(deck=>{
    deck.split(',').map(col => Array.from(col.matchAll(/([0-9]+) ([a-z]+)/g)).map((e)=>{
      const colorName = e[2] as keyof typeof colors
      if(colors[colorName] < Number(e[1])){
        output = 0
      }    
      })
    )
  })
  
  return output
}

const readInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

let input:string[] = []

readInterface.on('line', function(line) {
  input.push(line);
});

readInterface.on('close', function() {
  console.log('Day 2: Task1: ', input.map(parser).reduce((acc,cur)=> acc + cur, 0))
  console.log('Day 2: Task2: ',input.map(calculateMinCubes)
    .map(cur => (Number(cur[0]) * Number(cur[1])* Number(cur[2])))
    .reduce((acc,cur)=> acc + cur, 0))
});


