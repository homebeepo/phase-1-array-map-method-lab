const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(titleCaser)
}

function titleCaser(string) {
  let i = 0
  let newString =''
  for (var letter of string) {
    if (i === 0) {
       newString += letter.toUpperCase()
    }
    else if (string[i - 1] === ' ') {
      newString += letter.toUpperCase()
    }
    else {
      newString += letter
    }
    i++
  }
  return newString
}