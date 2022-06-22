
// 1. Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
function avg(array) {

    sum = array.reduce( (acc,num) => (acc + num) )
    average = sum/array.length
    return average

}

console.log(avg([8, 2, 2, 4])); 


// 2. Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"

function reverse(str){

    str = str.split("").reverse().join("")
    
    return str
}

console.log(reverse("caterpillar"));


