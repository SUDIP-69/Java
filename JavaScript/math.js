// get a random number bwtn 1 and 6 for a dice game

max = 6
min = 1

range = max - min + 1 // 1 is added to avoid 'zero'

dice = Math.floor((Math.random() * range) + min)

console.log(dice);
