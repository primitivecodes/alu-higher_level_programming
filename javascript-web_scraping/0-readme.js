#!/usr/bin/node
const fs = require('fs');
const file = process.argv.slice(2)[0];

if (!file) {
  console.error('Usage: ./script.js <filename>');
  process.exit(1);
}

fs.readFile(file, 'utf8', (err, contents) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(contents);
});
