
# JS Learning — Project Overview

## What is JavaScript?

JavaScript (JS) is a high-level, interpreted programming language primarily used to make web pages interactive. It runs in browsers and on servers (Node.js). In this project you'll see core JS concepts: variables (`const`, `let`), functions (regular and arrow), template literals, arrays and objects, higher-order array methods (`map`, `filter`, `find`), asynchronous code with `fetch` and `async/await`, DOM selection, and event handling.

## Files in this project

- `index.html`: A small HTML page that loads the five lesson scripts and provides a button (`#fetchBtn`) and output container (`#output`) used by the later lessons.

- `script1.js`: Lesson 1 — basic variable declarations and `console.log` usage. Demonstrates `const`, `let`, boolean values, and printing values to the console.

- `script2.js`: Lesson 2 — functions and control flow. Contains `greet(name)` (returns a template literal greeting), `calculateGrade(marks)` using `if/else` to map numeric marks to a grade string, and an arrow function `isPass` that tests a passing threshold.

- `script3.js`: Lesson 3 — working with arrays and objects. Shows an array of student objects and uses `map` to extract names, `filter` to find passing students, and `find` to locate the first student with marks >= 90. Also includes a `post` object demonstrating property access and mutation.

- `script4.js`: Lesson 4 — asynchronous fetch. Defines an `async` function `getPost()` that fetches a post from `jsonplaceholder.typicode.com`, parses JSON, and logs the `title` and `body`. The function is invoked immediately to run on page load.

- `script5.js`: Lesson 5 — DOM interaction and event handling. Repeats the fetch logic but wires it to the `#fetchBtn` click event. When the button is clicked it fetches the post and renders its title and body into the `#output` container.

## Conclusion

This small collection of files demonstrates an incremental JavaScript learning path: starting with basic syntax and logging, moving to functions and conditionals, then arrays/objects and higher-order methods, and finally asynchronous network requests and DOM-driven interactions. To try the examples, open `index.html` in a browser and use the developer console or click the "Fetch Post" button to see the fetch examples in action. Note: network access is required for the examples that call `jsonplaceholder.typicode.com`.

