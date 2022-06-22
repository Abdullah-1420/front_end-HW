const nums = [25, 6, 8, 3 ];

evenNumbers = nums.reduce((acc , num) => acc + (num % 2 == 0 ? 1 : 0) , 0)

console.log(`evenNumbers equals ${evenNumbers}`)

// evenNumbers equals 2



