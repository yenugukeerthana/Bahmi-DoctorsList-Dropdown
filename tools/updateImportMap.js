const fs = require('fs')
const util = require('util')

const fileData = fs.readFileSync('./omrs-app-shell/importmap.json', 'utf8')
const importmap = JSON.parse(fileData)

importmap['imports']['@bahmni/lab-app'] =
  '/lab/bahmni-lab-app.js'

fs.writeFile(
  './omrs-app-shell/importmap.json',
  JSON.stringify(importmap, null, 4),
  err => {
    if (err) {
      console.log('Error updating importmap', err)
    } else {
      console.log('Successfully updated importmap')
    }
  },
)
