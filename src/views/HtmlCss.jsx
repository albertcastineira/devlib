import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function HtmlCss() {

const indexHtml =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="home">
        <h2>Home Section</h2>
        <p>This is the home section of my website.</p>
    </section>

    <section id="about">
        <h2>About Section</h2>
        <p>Learn more about me and my website here.</p>
    </section>

    <section id="contact">
        <h2>Contact Section</h2>
        <p>Feel free to contact me through the provided details.</p>
    </section>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
`

const css =
`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1em;
}

nav {
  background-color: #444;
  padding: 0.5em;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav a {
  text-decoration: none;
  color: #fff;
}

section {
  padding: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1em;
  position: fixed;
  bottom: 0;
  width: 100%;
}
`

  return (
    <div className="container content">
      <h2>HTML & CSS</h2>
      <p>HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are <strong>fundamental technologies for</strong> building <strong>websites</strong>. HTML provides the structure of a web page, while CSS is used for styling and layout.</p>
      <p>Here's a basic example of an HTML and CSS code for a simple webpage & key concepts of each one:</p>
      
      <h3>HTML</h3>
      <ul>
        <li className="text-white">Document Structure</li>
        <p>HTML is used to <strong>structure content</strong> on the web. <br />Documents are composed of <strong>nested HTML elements</strong>, forming a <strong>hierarchical structure</strong>.</p>
        
        <li className="text-white">Elements and Tags</li>
        <p>HTML documents consist of <strong>elements enclosed in tags</strong>. <br />Tags define the beginning and end of an element, and they can be <strong>nested inside each other</strong>. <br />Common tags include <strong>{"<html>"}, {"<head>"}, {"<body>"}, {"<h1>"} to {"<h6>"} for headings, {"<p>"} for paragraphs, {"<a>"} for links</strong>, etc.</p>

        <li className="text-white">Attributes</li>
        <p>Elements can have <strong>attributes</strong> that <strong>provide additional information</strong> about the element. <br />Attributes are placed inside the opening tag and typically come in name/value pairs (e.g., <strong>{"<a href='https://example.com'>Link</a>'"}</strong>).</p>

        <li className="text-white">Document Type Declaration (Doctype)</li>
        <p>The <strong>{"<!DOCTYPE html>"}</strong> declaration at the beginning <strong>specifies the version of HTML</strong> being used (HTML5 in this case).</p>

        <li className="text-white">Semantic Markup</li>
        <p>HTML5 introduces <strong>semantic elements like {"<header>"}, {"<nav>"}, {"<section>"}, {"<article>"}, {"<footer>"}</strong>, etc., to <strong>give meaning</strong> to the structure and content.</p>
      </ul>

      <CodeBlock code={indexHtml} language={"html"} />

      <h3>CSS</h3>
      <ul>
        <li className="text-white">Selectors</li>
        <p>CSS uses <strong>selectors to target HTML elements</strong> for styling. <br />Selectors can be <strong>based on element types, classes, IDs, attributes, and more</strong>.</p>

        <li className="text-white">Properties and Values</li>
        <p>CSS properties <strong>define the style aspects</strong>, such as <strong>color, font-size, margin, padding, etc</strong>. <br /><strong>Values are assigned to properties</strong> to specify how the styling should be applied.</p>

        <li className="text-white">Box Model</li>
        <p>The box model <strong>describes how elements are rendered on the page as a rectangular box</strong>. <br />It includes <strong>properties like margin, border, padding, and width/height</strong>.</p>

        <li className="text-white">Selectors and Specificity</li>
        <p>CSS <strong>rules can be more specific</strong> using <strong>combinations of selectors</strong>. <br />Specificity determines which styles are applied when conflicting rules exist.</p>

        <li className="text-white">Cascade</li>
        <p>The "C" in CSS stands for "Cascading," indicating how <strong>styles are applied in a specific order</strong>. <br />Styles from different sources (author, user, browser defaults) can combine in a specific priority order.</p>

        <li className="text-white">Responsive Design</li>
        <p>CSS is <strong>essential for creating responsive</strong> layouts that adapt to different screen sizes. <br />Techniques like <strong>media queries</strong> help apply styles based on the characteristics of the device or viewport.</p>

        <li className="text-white">Flexbox and Grid</li>
        <p>Flexbox and Grid are <strong>layout models that simplify the creation of complex layouts</strong>. <br />Flexbox is designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts.</p>
      </ul>
      <CodeBlock code={css} language={"css"} />

      <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
        <h4>Sources</h4>
        <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
        <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
        <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
      </div>
    </div>
  )
}
