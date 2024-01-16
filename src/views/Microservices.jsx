import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Microservices() {
    return (
        <div className="container content">
            <h2>Microservices</h2>
            <p>Microservices is an <span className="font-bold underline underline-offset-2">architectural style</span> that <strong>structures an application</strong> as a <strong>collection</strong> of <strong>small, independent services</strong>, each representing a specific business capability. These services are loosely coupled, meaning <strong>they operate independently</strong> and can be developed, deployed, and scaled independently. This approach contrasts with monolithic architectures where the entire application is built as a single, tightly integrated unit.</p>
            <p>Key characteristics of microservices:</p>

            <h3>1. Modularity:</h3>
            <p>Microservices break down the application into <strong>small, self-contained services</strong>, <strong>each</strong> responsible <strong>for</strong> a <strong>specific</strong> business <strong>function</strong>. This modularity makes it <strong>easier to</strong> <strong>develop, test, deploy, and scale individual services</strong>.</p>

            <h3>2. Independence:</h3>
            <p><strong>Each</strong> microservice <strong>operates independently</strong> of others, often <strong>having its own database</strong>. This independence enables teams to develop, deploy, and scale services independently, without affecting the entire application.</p>

            <h3>3. Communication:</h3>
            <p>Microservices <strong>communicate</strong> with each other <strong>through well-defined APIs (Application Programming Interfaces)</strong>. This allows them to function as part of a larger system while remaining loosely coupled.</p>

            <h3>4. Scalability</h3>
            <p>Because services are independent, it's possible to <strong>scale</strong> specific <strong>microservices</strong> based <strong>on demand</strong>. This is in contrast to monolithic applications where the entire application must be scaled even if only a portion of it is experiencing high demand.</p>

            <h3>5. Technology Diversity:</h3>
            <p>Different microservices within an application <strong>can be developed using different programming languages, frameworks, and technologies</strong>. This <strong>flexibility</strong> allows teams to choose the best tools for a particular service.</p>

            <h3>6. Resilience:</h3>
            <p><strong>If one</strong> microservice <strong>fails, it doesn't necessarily bring down the entire system</strong>. The overall <strong>application can continue to function</strong> as long as the failure is isolated to that specific service.</p>

            <h3>7. Continuous Deployment:</h3>
            <p>Microservices <strong>facilitate continuous integration and deploymen</strong>t. Teams can release updates to individual services without affecting the entire application, leading to faster development cycles.</p>

            <h3>8. Autonomy</h3>
            <p>Microservices enable <strong>development</strong> teams to work <strong>independently on specific services</strong>, promoting <strong>autonomy</strong> and allowing for faster development cycles.</p>

            <p>Despite these advantages, microservices also come with challenges, such as increased complexity in managing distributed systems, inter-service communication, and data consistency across services. Adopting microservices requires careful consideration of the specific needs and constraints of the application being developed.</p>

            <h2 className="mt-20">Planning the infrastructure of our application</h2>
            <p>Let's consider a simplified example of an e-commerce application to illustrate how microservices might be implemented:</p>

            <h3>Monolithic Approach:</h3>
            <p>In a traditional monolithic architecture, the entire e-commerce application would be a single, tightly integrated unit. All functionalities like user management, product catalog, shopping cart, order processing, and payment processing would be part of the same codebase.</p>

            <h3>Microservices Approach:</h3>
            <p>In a microservices architecture, the e-commerce application is broken down into smaller, independent services, each handling a specific aspect of the overall functionality. Here are some example microservices:</p>

            <img className="w-full h-auto my-10 rounded" src="https://i.imgur.com/bSSGUs5.png" alt="Image" />

            <p><span className="text-white">User Service:</span></p>
            <ul>
                <li>Responsible for user registration, authentication, and profile management.</li>
                <li>Has its own database to store user information.</li>
            </ul>

            <p><span className="text-white">Product Service:</span></p>
            <ul>
                <li>Manages the product catalog, including details such as product information, pricing, and availability.</li>
                <li>Has its own database for storing product-related data.</li>
            </ul>

            <p><span className="text-white">Cart Service:</span></p>
            <ul>
                <li>Handles shopping cart functionality, including adding items, removing items, and calculating totals.</li>
                <li>Manages its own database for storing cart information.</li>
            </ul>

            <p><span className="text-white">Order Service:</span></p>
            <ul>
                <li>Manages the process of creating and processing orders.</li>
                <li>Stores order information in its own database.</li>
            </ul>

            <p><span className="text-white">Payment Service:</span></p>
            <ul>
                <li>Handles payment processing, integrating with payment gateways.</li>
                <li>Manages its own database for payment-related data.</li>
            </ul>

            <h3>How They Interact:</h3>
            <p>These microservices communicate with each other through well-defined APIs. For example:</p>

            <ul>
                <li>When a user adds items to the shopping cart, the Cart Service communicates with the Product Service to check product availability and retrieve pricing information.</li>
                <li>When the user proceeds to checkout, the Cart Service communicates with the Order Service to create an order and reserves the items.</li>
                <li>After the order is created, the Payment Service is notified to process the payment.</li>
            </ul>

            <h3>Benefits</h3>
            <ul>
                <li><span className="text-white">Scalability:</span> If the e-commerce site experiences high traffic in the shopping cart area, the Cart Service can be scaled independently without affecting other services.</li>
                <li><span className="text-white">Flexibility:</span> Each microservice can be developed and deployed independently, allowing teams to use different technologies that best suit the specific functionality they are responsible for.</li>
                <li><span className="text-white">Isolation:</span> If there is a bug or issue in one microservice, it doesn't necessarily impact the entire application. The affected service can be fixed or updated independently.</li>
            </ul>

            <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
                <h4>Sources</h4>
                <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
                <SourceLink name={"'Monolith to Microservices: Evolutionary Patterns to Transform Your Monolith' by Sam Newman"} link={"https://www.amazon.com/Monolith-Microservices-Evolutionary-Patterns-Transform/dp/1492047848"} />
                <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
            </div>

        </div>
    )
}
