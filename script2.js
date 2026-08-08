// lesson # 2

function greet(name) {
    return `Hello, ${name}! Welcome to JS`
}

function calculateGrade(marks) {
    if (marks>=90) {
        return "A+"
    }
    else if (marks >= 80) {
        return "A"
    }
    else if (marks>= 70){
        return "B"
    }
    else if (marks>= 60){
        return "C"
    }
    else if (marks >= 50) {
        return "Pass"
    }   
    else {
        return "Fail"
    }
    
}

const isPass = marks => marks >= 50



console.log(greet("Arshad"))
console.log(calculateGrade(9))
console.log(isPass(6))