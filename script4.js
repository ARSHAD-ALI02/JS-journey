// Lesson # 4

async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        console.log("Title:", data.title)
        console.log("Body:", data.body)
    } catch (error) {
        console.log("Error:", error)
    }
}

getPost()