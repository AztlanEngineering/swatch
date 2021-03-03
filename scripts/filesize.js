#!/usr/bin/node
let fs = require('fs')
let filesize = require('filesize')
let targetFilename = process.argv[2]
let stats = fs.statSync(`./${targetFilename}`)
console.log(process.argv[2], filesize(stats.size), stats.size)

