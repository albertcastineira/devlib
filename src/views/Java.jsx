import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Java() {

const javaHelloWorld = 
`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

const javaVariables =
`int age = 25;
double price = 19.99;
char grade = 'A';
boolean isJavaFun = true;`

const javaStatements = 
`if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

for (int i = 0; i < 5; i++) {
    // code to repeat
}

while (condition) {
    // code to repeat while condition is true
}`

const javaFunction =
`public int add(int a, int b) {
    return a + b;
}`

const javaObject =
`class Dog {
    String breed;
    int age;

    void bark() {
        System.out.println("Woof!");
    }
}`

const javaImport =
`package com.example;

import java.util.ArrayList;`

const javaTryCatch = 
`try {
    // code that might throw an exception
} catch (ExceptionType e) {
    // code to handle the exception
} finally {
    // code that always executes
}`

const javaMain =
`public static void main(String[] args) {
    // entry point of the program
}`


    return (
        <div className="container content">
            <h2>Java Basics</h2>
            <p>Java is a versatile, <strong>object-oriented</strong>, and <strong>platform-independent</strong> <span className="underline underline-offset-2 font-bold">programming language</span> that was developed by Sun Microsystems in the mid-1990s. <br /> Here are some basics of Java:</p>

            <h3>1. Hello World Program:</h3>
            <CodeBlock code={javaHelloWorld} language={"java"} />
            <p>This is the most basic Java program that prints "Hello, World!" to the console. It introduces the structure of a Java program, with a main method as the entry point.</p>

            <h3>2. Java Syntax:</h3>
            <ul>
                <li>Java programs are <strong>composed of classes and methods</strong>.</li>
                <li><strong>Statements end with</strong> a semicolon (<strong> ; </strong>).</li>
                <li>Curly braces ( <strong>{'{ }'}</strong> ) define <strong>blocks of code.</strong></li>
                <li>Java is <strong>case-sensitive</strong>.</li>
            </ul>

            <h3>3. Variables and Data Types:</h3>
            <ul>
                <li><strong>Variables</strong> are containers for <strong>storing data</strong>.</li>
                <li>Java is <strong>statically-typed</strong>, meaning variable <strong>types must be declared</strong> before use.</li>
                <li>Common data types include <strong>int</strong>, <strong>float</strong>, <strong>double</strong>, <strong>char</strong>, <strong>boolean</strong>, etc.</li>
            </ul>
            <CodeBlock code={javaVariables} language={"java"} />

            <h3>4. Control Flow:</h3>
            <p>Java supports <strong>conditional statements</strong> ( <strong>if, else, switch</strong> ) and <strong>looping constructs</strong> ( <strong>for, while, do-while</strong> ).</p>
            <CodeBlock code={javaStatements} language={"java"} />

            <h3>5. Functions/Methods:</h3>
            <ul>
                <li><strong>Functions (methods)</strong> are blocks of code that <strong>perform</strong> a specific <strong>task</strong>.</li>
                <li>They are <strong>defined</strong> using the method <strong>keyword</strong>.</li>
                <CodeBlock code={javaFunction} language={"java"} />
            </ul>

            <h3>6. Object-Oriented Programming (OOP):</h3>
            <ul>
                <li>Java is an <strong>object-oriented language</strong>, which means it supports principles like <strong>encapsulation</strong>, <strong>inheritance</strong>, and <strong>polymorphism</strong>.</li>
                <li>Classes are used to model real-world entities, and objects are instances of these classes.</li>
            </ul>
            <CodeBlock code={javaObject} language={"java"} />

            <h3>7. Packages and Imports:</h3>
            <ul>
                <li>Packages are used to <strong>organize classes</strong> into <strong>namespaces</strong>.</li>
                <li>The <strong>import</strong> statement is used to bring in classes from other packages.</li>
            </ul>
            <CodeBlock code={javaImport} language={"java"} />

            <h3>8. Exception Handling:</h3>
            <p>Java provides a <strong>robust exception-handling</strong> mechanism using <strong>try, catch, finally</strong>, and <strong>throw</strong>.</p>
            <CodeBlock code={javaTryCatch} language={"java"} />

            <h3>9. Main Method and Entry Point:</h3>
            <p>Every Java program must have a <strong>main method</strong>, which serves as the entry point for the program.</p>
            <CodeBlock code={javaMain} language={"java"} />

            <h3>10. Platform Independence:</h3>
            <ul>
                <li>Java code is <strong>compiled into</strong> an intermediate form called <strong>bytecode</strong>.</li>
                <li><strong>Bytecode</strong> can be <strong>executed on any device</strong> with a <strong>Java Virtual Machine (JVM)</strong>, providing <strong>platform independence</strong>.</li>
            </ul>

            <p>These are just the basics; Java is a powerful language with a rich set of libraries and frameworks for various applications, including web development, mobile app development, and enterprise-level systems.</p>

            <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
                <h4>Sources</h4>
                <SourceLink name={"Official Java Documentation"} link={"https://docs.oracle.com/en/java/"} />
                <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
                <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
            </div>

        </div>
    )
}
