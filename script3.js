// Lesson # 3
// Part # 1

const students = [
    { name: "Ali", marks: 87 },
    { name: "Sara", marks: 45 },
    { name: "Bilal", marks: 92 },
    { name: "Zara", marks: 38 }
]

const std_names = students.map(student => student.name)

const pass_std = students.filter(student => student.marks>=50)

const first_std = students.find(student => student.marks>=90)

console.log("Names:", std_names)
console.log("Passing:", pass_std)
console.log("First 90+:", first_std)

//---------------------------------------------------
// Part # 2

const post = {title: "JS Journey", content: "Learning JS - Lesson 3", status: "Draft", platform: "LinkedIn"}

post["id"] = 1
post.id= 2
console.log("Entire Post", post)

