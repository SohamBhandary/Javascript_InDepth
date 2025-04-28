const name="Soham"
const repoCount=20
// console.log(`hello my name is  ${name} and repo is ${repoCount}`)

const gameName= new String("Soham-sb")
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));


const newString= gameName.slice(0,3)
console.log(newString);
const anotherString=gameName.slice(0,6)
console.log(anotherString)

const newStringOne= "        soham                "
console.log(newStringOne);
console.log(newStringOne .trim());


const url="https://www.youtube%20mobile.com"

console.log(url.replace("%20","-"))

console.log(url.includes("mobile"));
console.log(gameName.split("-"));






