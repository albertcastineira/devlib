import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";


export default function Javascript() {

const jsVariables =
`let age = 25;
let name = "John";
let isStudent = true;
`

const jsOperators =
`let sum = 5 + 10;
let isAdult = age >= 18;
`

const jsFlow =
`if (isAdult) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
`

const jsFunction = 
`function greet(name) {
  return "Hello, " + name + "!";
}

let greeting = greet("Alice");
console.log(greeting);
`

const jsObject =
`let person = {
  name: "Bob",
  age: 30,
  isStudent: false,
  greet: function() {
      console.log("Hello!");
  }
};

console.log(person.name);
person.greet();
`

const jsArray =
`let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);  // Outputs "banana"
`

const jsDOM =
`let element = document.getElementById("myElement");
element.innerHTML = "New content";
`

const jsEvents =
`let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
`

const jsAsync =
`fetch("https://api.example.com/data")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
`

  return (
    <div className="container content">
      <h2>Javascript Basics</h2>
      <p>JavaScript is a versatile and widely used <span className="underline underline-offset-2 font-bold">programming language</span> that is primarily known for its role in web development. It is often <strong>used to make web pages interactive and dynamic</strong>. Here are some core concepts of JavaScript:</p>

      <h3>1. Variables and Data Types:</h3>
      <ul>
        <li>Variables are used to <strong>store and manipulate data</strong>.</li>
        <li>JavaScript has various data types, including <strong>numbers, strings, booleans, objects, arrays, and more</strong>.</li>
      </ul>
      <CodeBlock code={jsVariables} language={"javascript"} />

      <h3>2. Operators:</h3>
      <ul>
        <li>JavaScript <strong>supports various operators</strong> for performing operations on variables and values.</li>
        <li>Examples include <strong>arithmetic</strong> operators <strong>(+, -, *, /)</strong>, <strong>comparison</strong> operators <strong>(==, !=, ===, !==)</strong>, and <strong>logical</strong> operators <strong>(&&, ||, !)</strong>.</li>
      </ul>
      <CodeBlock code={jsOperators} language={"javascript"} />

      <h3>3. Control Flow:</h3>
      <ul>
        <li>JavaScript provides <strong>conditional</strong> statements <strong>(if, else if, else)</strong> and <strong>loops (for, while, do-while)</strong> for controlling the flow of execution in a program.</li>
      </ul>
      <CodeBlock code={jsFlow} language={"javascript"} />

      <h3>4. Functions:</h3>
      <ul>
        <li>Functions allow you to define <strong>reusable blocks of code</strong>.</li>
        <li>They can <strong>take parameters and return values</strong>.</li>
      </ul>
      <CodeBlock code={jsFunction} language={"javascript"} />

      <h3>5. Objects:</h3>
      <ul>
        <li>Objects are used to <strong>group related data and functions</strong> together.</li>
        <li>They consist of <strong>key-value pairs</strong> and can represent real-world entities.</li>
      </ul>
      <CodeBlock code={jsObject} language={"javascript"} />

      <h3>6. Arrays:</h3>
      <ul>
        <li>Arrays are used to <strong>store ordered lists of values</strong>.</li>
        <li>They can be manipulated using various methods, and elements are accessed by index.</li>
      </ul>
      <CodeBlock code={jsArray} language={"javascript"} />

      <h3>7. DOM Manipulation:</h3>
      <ul>
        <li>JavaScript is often used to <strong>interact with the Document Object Model (DOM)</strong> to <strong>dynamically update the content and structure of web pages</strong>.</li>
      </ul>
      <CodeBlock code={jsDOM} language={"javascript"} />

      <h3>8. Events:</h3>
      <ul>
        <li>JavaScript allows you to <strong>respond to user actions (events)</strong> on a web page.</li>
        <li><strong>Event listeners</strong> are used to <strong>execute functions when events occur</strong>.</li>
      </ul>
      <CodeBlock code={jsEvents} language={"javascript"} />

      <h3>9. Asynchronous Programming:</h3>
      <ul>
        <li>JavaScript supports <strong>asynchronous operations using callbacks, promises, and async/await</strong>.</li>
        <li>This is crucial for <strong>handling tasks like fetching data from a server</strong> without blocking the main thread.</li>
      </ul>
      <CodeBlock code={jsAsync} language={"javascript"} />

      <h2 className="mt-[10vh]">Use cases where JavaScript plays a crucial role</h2>
      <h3>Web Development</h3>
      <ul>
        <li>Client-Side Scripting</li>
        <li>Frameworks and Libraries</li>
      </ul>

      <h3>Server-Side Development</h3>
      <ul>
        <li>Node.js</li>
      </ul>

      <h3>Mobile App Development</h3>
      <ul>
        <li>React Native, NativeScript</li>
      </ul>

      <h3>Game Development</h3>
      <ul>
        <li>Game Engines</li>
      </ul>

      <p>And much more... <br />JavaScript's versatility and the large ecosystem of libraries and frameworks make it a powerful language for various applications, ranging from simple website interactivity to complex server-side development and beyond.</p>

      <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
        <h4>Sources</h4>
        <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
        <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
        <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
      </div>
    </div>
  )
}
