**What is Programming?**

-  A programming language is just a way to communicate with the machine. You write certain code, which will be translated into machine code that will be understood by the programs. These are called programs understood by the machines, and we are just instructing the machine to do some task 

### **What is Javascript?** 
A website is built with **three core technologies**

- **HTML** — Structure / Content
- **CSS** — Styling / Appearance
- **JavaScript** — **Behavior** / **Interactivity**

- Where it runs: **_Originally designed to run in web browsers,_** JavaScript now also runs on servers (via Node.js), mobile apps, desktop applications, and even IoT devices.
- Core features: **It supports object-oriented, functional, and event-driven programming styles**. It's dynamically typed, meaning you don't need to declare variable types explicitly.
- The **DOM:** **JavaScript can manipulate the Document Object Model (DOM)**, allowing it to dynamically change a webpage's content, structure, and styling in real time without reloading.
- **Asynchronous programming**: It supports asynchronous operations through callbacks, Promises, and `async/await`, making it efficient for tasks like API calls and file handling.
- Ecosystem: **It has a massive ecosystem of libraries** and frameworks such as React, Angular, Vue.js (frontend) and Express, Next.js (backend), supported by the npm package manager.
- **Universal adoption:** JavaScript is the most widely used programming language in the world, supported by all modern browsers and backed by a huge developer community.

 Java Vs Javascript

1.  **There is no relationship between Java and JavaScript,**when JavaScript was created, Java was a more popular language, so they created or named it JavaScript.
2. JavaScript was created by American computer programmer Brendan Eich in **1995** while working at Netscape.
3. Java language has no relationship with JavaScript
4. JS there not concept of giving datatype at the start, 
    1. Java -> **int** a = 10;  x -> no possitble a= "Pramod" // Data type 100%
    2. Javascript let a = 10;  -> a= "Pramod"

> JavaScript is an interpreted language with JIT(just in time) compilation at runtime.

**✅ JavaScript: Compile-Time & Runtime?**

- JavaScript is Primarily a Runtime (Interpreted) Language Traditionally, JavaScript code is executed line by line at runtime by the browser's JS engine.
- Simple Terms - JavaScript is a **runtime language** that uses **JIT compilation internally** for performance. 
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. 
JavaScript was only available in the browser , v8 browser -> 

**✅ What is** [Node.js](http://node.js/)**?**

- Node.js is an open-source, **cross-platform JavaScript runtime environment** that allows you to run JavaScript code outside of a web browser primarily on servers.
- It was created by **Ryan Dahl in 2009** and is built on Google Chrome's V8 JavaScript engine.

**Common Use Cases**
- Web Servers & APIs (REST, GraphQL)
- Real-Time Apps (Chat apps, live notifications)
- Microservices Architecture
- Command-Line Tools (CLI apps)
- Streaming Applications (Video/audio)
- IoT (Internet of Things)

## 🟩 **<u>NODE js in simple terms</u>**
**Node.js = JavaScript + V8 Engine + Server-Side Capabilities**, enabling full-stack development using a single language.

**NPM** -> **Node Package Manage**r 
[www.npmjs.com/](https://www.npmjs.com/) 
**pnpm**
[pnpm.io/](https://pnpm.io/) 
**Package Manger - Yarn** 
[yarnpkg.com/](https://yarnpkg.com/) 
**Bun**
[bun.com/package-manager](https://bun.com/package-manager) 

## Source Code
 Source code is something which is written by humans, we are writing in the VS Code - with .js extension

### JavaScript
- High level
- Interpreted with JIT Compilation for complex codes
- Object oriented
- Functional, Event driven programming style
- Dynamically typed - no need to declare the variables explicitly.
- Supports asynchronous programming

### Asynchronous Programming
Technique that allows the program to start a long running task(like fetching server data or reading a file) and remain responsive to other events at the same time, rather than freezing or waiting for the task to finish.

### Single Threaded
JavaScript is single threaded, it can normally onlyb execute one line of code at a time from top to bottom.
Without asynchronous programming, a slow API call would completely lock up a web browser, making the page look frozen
