// lesson # 5

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

const btn = document.querySelector('#fetchBtn')
const output = document.querySelector('#output')

btn.addEventListener('click', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json()
    output.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
    `
})