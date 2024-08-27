import fs from "fs"

import { Command } from "commander"
const program = new Command()

program
  .name('index')
  .description('CLI to count number of lines in your file')
  .version('1.0.0');

program.command('count')
  .description('Count the number of lines in your file')
  .argument('<file>', 'File to read')
  .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            const content = data.split('\n')
            console.log("The number of lines in the file is " + content.length)
        })
  })


program.parse()