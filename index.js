//1
function countFromOne(int){
     for(let i = 1; i <= int; i++){
         console.log(i)
     }
}
// countFromOne(10)

//2
function countEveryOdd(num){
    for(let i = 1; i < num; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
// countEveryOdd(10)

//3
function isNegative(number){
    if(number < 0){
        return true
    }else{
        return false
    }
}
console.log(Math.PI)
console.log(isNegative(-5))

//4

function betweenFiveAndTwenty(num){
    if(num >= 5 && num <= 20){
        return true
    }else{
        return false
    }
}
// console.log(betweeFiveAndTwenty(5))

//5 
function isAllLowerCase(string){
    const lowercase = string.toLowerCase()
    if(lowercase === string){
        return true
    }else{
        return false
    }
}
console.log(isAllLowerCase("HEY"))