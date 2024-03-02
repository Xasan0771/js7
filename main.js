let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, itaque!"

let arr = str.split("")
let count = 0

for (let i = 0; i < arr.length ; i++) {
    if (arr[i] == "a"|| arr[i] == "e" || arr[i]== "o" || arr[i] == "i" || arr[i] == "u") {
        count++
        arr.splice(i,1)
    }
    
}
console.log(`number of vowel letters : ${count}`);

let string = arr.join("")
console.log(string);