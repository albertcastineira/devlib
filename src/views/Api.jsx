import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Api() {

    return (
        <div className="container content">
            <h2>API</h2>
            <p>An API, or Application Programming Interface, is a <span className="underline underline-offset-2 font-bold">set of rules and tools that allows different software applications to communicate with each other</span>. It <strong>defines</strong> the <strong>methods and data formats that applications can use to request and exchange information</strong>. APIs are <strong>crucial for</strong> enabling the <strong>integration of</strong> different <strong>software</strong> systems, making it possible for them to work together seamlessly.</p>
            
            <p>Here you have a representative schema:</p>
            <img className="w-full h-auto my-10 rounded" src="https://i.imgur.com/D5d5lb1.png" alt="Image" />

            <p>There are <strong>several types of APIs</strong>, broadly categorized into the following:</p>

            <h3>1. Web APIs (HTTP/HTTPS APIs):</h3>
            <p><span className="text-white">- RESTful APIs (Representational State Transfer):</span> These are <strong>web APIs</strong> that adhere to the principles of <strong>REST</strong>, <strong>using</strong> standard <strong>HTTP methods (GET, POST, PUT, DELETE)</strong> to perform operations on resources. <strong>RESTful APIs are widely used for web services and are known for their simplicity and scalability</strong>.</p>
            <p><span className="text-white">- SOAP APIs (Simple Object Access Protocol):</span> <strong>SOAP is a protocol for exchanging structured information in web services</strong>. It <strong>uses XML</strong> for message formatting <strong>and</strong> relies on <strong>HTTP or SMTP</strong> for communication. SOAP APIs are <strong>more rigid and have a defined contract</strong>, making them suitable for <strong>enterprise-level</strong> applications.</p>

            <h3>2. Library-Based APIs:</h3>
            <p><span className="text-white">- JavaScript APIs:</span> These are <strong>APIs</strong> that are <strong>used within web browsers</strong> to enable <strong>interaction with the Document Object Model (DOM)</strong>, allowing <strong>dynamic changes to web pages</strong>.</p>
            <p><span className="text-white">- Python Libraries and Modules:</span> <strong>Python</strong> has numerous <strong>libraries and modules that provide APIs for developers to use functionalities</strong> without having to implement them from scratch.</p>

            <h3>3. Operating System APIs:</h3>
            <p><span className="text-white">- Windows API:</span> A <strong>set of functions implemented by Microsoft for interaction with</strong> the <strong>Windows</strong> operating system.</p>
            <p><span className="text-white">- POSIX (Portable Operating System Interface):</span> A <strong>family of standards</strong> specified by the IEEE <strong>for maintaining compatibility between</strong> operating systems, particularly <strong>Unix-like systems</strong>.</p>

            <h3>4. Hardware APIs:</h3>
            <p><span className="text-white">- GPU APIs:</span> Such as <strong>CUDA (Compute Unified Device Architecture) and OpenCL (Open Computing Language)</strong>, allow software to leverage the <strong>processing power of GPUs</strong>.</p>
            <p><span className="text-white">- Printer APIs:</span> Allow software applications to  <strong>interact with printers</strong> for tasks like printing documents.</p>

            <h3>5. Database APIs:</h3>
            <p><span className="text-white">- ODBC (Open Database Connectivity):</span> A <strong>Standard API for connecting to various databases</strong>, providing a common interface for applications to interact with database systems.</p>
            <p><span className="text-white">- JDBC (Java Database Connectivity):</span> Similar to <strong>ODBC</strong> but specific to <strong>Java applications</strong>.</p>

            <h3>Remote APIs:</h3>
            <p><span className="text-white">- JSON-RPC and XML-RPC:</span> These are <strong>Remote Procedure Call (RPC)</strong> protocols encoded in JSON or XML, allowing <strong>communication between a client and a server</strong> over a network.</p>

            <p>The choice of API type depends on the specific use case and the technologies involved in the software systems that need to communicate.</p>

            <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
                <h4>Sources</h4>
                <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
                <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
                <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
            </div>

        </div>
    )
}
