function yell (string1) {
  return string1.toUpperCase(string1)
}
var sentence = yell("This is a sentence")
console.log (sentence)

function x10 (string2) {
  return string2.repeat(10)
}
var tenTimes = x10(sentence)

console.log(tenTimes)
