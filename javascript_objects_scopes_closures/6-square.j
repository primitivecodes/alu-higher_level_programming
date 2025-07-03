#!/usr/bin/node
// 6-square.js

const Square5 = require('./5-square');

class Square extends Square5 {
  charPrint (c) {
    const char = c === undefined ? 'X' : c;

    for (let i = 0; i < this.height; i++) {
      console.log(char.repeat(this.width));
    }
  }
}

module.exports = Square;
