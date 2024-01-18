import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Database() {

const mysql1 =
`CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10, 2)
);

CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  product_id INT,
  quantity INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
`

const mysql2 =
`INSERT INTO products VALUES (1, 'Laptop', 999.99);
INSERT INTO customers VALUES (1, 'John Doe', 'john@example.com');
INSERT INTO orders VALUES (1, 1, 1, 2, '2024-01-18');
`

const mysql3 =
`-- Retrieve customer's orders with product details
SELECT customers.name AS customer_name, products.name AS product_name, orders.quantity, orders.order_date
FROM orders
JOIN customers ON orders.customer_id = customers.id
JOIN products ON orders.product_id = products.id;
`

const mongoDB1 =
`{
  "_id": ObjectId("user_id"),
  "username": "john_doe",
  "email": "john@example.com",
  "followers": ["user_id_1", "user_id_2"],
  "following": ["user_id_3", "user_id_4"]
}
`

const mongoDB2 =
`{
  "_id": ObjectId("post_id"),
  "title": "Introduction to NoSQL",
  "content": "MongoDB is a popular NoSQL database...",
  "author": "user_id",
  "comments": [
    {
      "user": "user_id_2",
      "comment": "Great article!",
      "timestamp": ISODate("2024-01-18T12:00:00Z")
    },
    {
      "user": "user_id_3",
      "comment": "Thanks for sharing!",
      "timestamp": ISODate("2024-01-18T12:30:00Z")
    }
  ]
}
`

const mongoDB3 =
`db.users.insert({
  "username": "john_doe",
  "email": "john@example.com",
  "followers": [],
  "following": []
});
`

const mongoDB4 =
`db.posts.insert({
  "title": "Introduction to NoSQL",
  "content": "MongoDB is a popular NoSQL database...",
  "author": ObjectId("user_id"),
  "comments": []
});
`

const mongoDB5 =
`db.posts.update(
  { "_id": ObjectId("post_id") },
  { $push: { "comments": { "user": "user_id_2", "comment": "Great article!", "timestamp": new Date() } } }
);
`

const mongoDB6 =
`db.posts.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "authorInfo"
    }
  },
  {
    $unwind: "$authorInfo"
  },
  {
    $project: {
      "title": 1,
      "content": 1,
      "authorInfo.username": 1,
      "comments": 1
    }
  }
]);
`


  return (
    <div className="container content">
      
      <h2>Database</h2>
      <p>Databases play a <strong>crucial role in storing, organizing, and retrieving data for various applications</strong>. In the context of software development, databases are often classified into <strong>two main types: relational databases and non-relational databases (NoSQL)</strong>. <br /> Here's a brief overview of both types:</p>

      <h3>1. Relational Databases:</h3>
      <ul>
        <li><span className="text-white">Example</span>: MySQL, PostgreSQL, SQLite, Microsoft SQL Server, Oracle Database.</li>
        <li><span className="text-white">Structure</span>: Organized in tables with rows and columns, and the relationships between tables are defined.</li>
        <li><span className="text-white">Query Language</span>: SQL (Structured Query Language) is used to interact with relational databases.</li>
        <li><span className="text-white">Use Cases</span>: Suitable for applications with structured and well-defined data, where relationships between different entities are important. Examples include financial systems, inventory management, and most traditional business applications.</li>
      </ul>

      <h3>2. Non-relational Databases (NoSQL):</h3>
      <ul>
        <li><span className="text-white">Types</span>: NoSQL databases come in various types, including document-oriented (e.g., MongoDB), key-value stores (e.g., Redis), column-family stores (e.g., Apache Cassandra), and graph databases (e.g., Neo4j).</li>
        <li><span className="text-white">Structure</span>: Data is stored in flexible, non-tabular formats. Each type of NoSQL database has its own data model.</li>
        <li><span className="text-white">Query Language</span>: NoSQL databases often use specific query languages or APIs tailored to their data model.</li>
        <li><span className="text-white">Use Cases</span>: Ideal for applications with rapidly changing or unpredictable data requirements, where scalability and flexibility are crucial. NoSQL databases are commonly used in web and mobile applications, real-time analytics, and scenarios with large amounts of unstructured data.</li>
      </ul>

      <h2 className="mt-10">Use Case: E-commerce Application with a Relational Database (MySQL):</h2>
      <p>Consider an e-commerce application where you need to manage products, customers, and orders. Here's how you might structure your database and perform basic operations:</p>

      <h3>Database Schema (MySQL):</h3>
      <CodeBlock code={mysql1} language={"sql"} />

      <h3>Insert Data:</h3>
      <CodeBlock code={mysql2} language={"sql"} />

      <h3>Query Data:</h3>
      <CodeBlock code={mysql3} language={"sql"} />

      <p>This is a simplified example, and real-world scenarios would involve more complex database designs, optimizations, and additional considerations such as indexing, normalization, and security.</p>

      <h2 className="mt-10">Use Case: Blogging Platform with MongoDB</h2>
      <p>Consider a blogging platform where users can create posts, comment on posts, and follow other users. MongoDB, a popular NoSQL document database, can be used to store and retrieve data for such a system.</p>

      <h3>Data Model:</h3>
      <p>In MongoDB, data is organized into collections, and each document in a collection is a JSON-like object. Here's a simplified data model for our blogging platform:</p>
      <p><span className="text-white">Users Collection</span></p>
      <CodeBlock code={mongoDB1} language={"json"} />

      <p><span className="text-white">Posts Collection</span></p>
      <CodeBlock code={mongoDB2} language={"json"} />

      <h3>Creating a User:</h3>
      <p>In MongoDB, you can insert a new document into the Users collection to represent a new user.</p>
      <CodeBlock code={mongoDB3} language={"javascript"} />

      <h3>Creating a Post:</h3>
      <p>Create a new document in the Posts collection to represent a blog post.</p>
      <CodeBlock code={mongoDB4} language={"javascript"} />

      <h3>Adding a Comment to a Post:</h3>
      <p>MongoDB allows for flexible updates, making it easy to add a new comment to a post.</p>
      <CodeBlock code={mongoDB5} language={"javascript"} />

      <h3>Querying Data:</h3>
      <p>MongoDB provides a rich query language. For example, to retrieve all posts along with their comments and the associated user information:</p>
      <CodeBlock code={mongoDB6} language={"javascript"} />

      <p>In this use case, MongoDB's flexibility in handling semi-structured data and the ability to represent relationships between entities (e.g., users, posts, comments) in a natural way make it a good fit for a dynamic and evolving blogging platform. It allows for easy updates, scaling, and efficient retrieval of data based on various criteria.</p>


      <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
          <h4>Sources</h4>
          <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
          <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
          <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
      </div>
    </div>
  )
}
