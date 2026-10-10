# **How JavaScript Engine Works**
A JavaScript engine is a program that **reads, interprets, and executes** JavaScript code. 
V8 Engine takes JS code >> Parses it into AST(Abstract Syntax Tree): here v8 engine first breaks the raw source code into small meaningful chunks called tokens(keywords, identifiers etc.) --- tokens are converted into structured tree representing the logic by the Parser (if there is a syntax error it will get caught) >> Interpret it into Bytecode via Ignition for fast startup: here light weight bytecode is created from AST and start executing immediately > Ignition also collects data > Profiling: As byte code run, v8 internal profiler monitor code and collect data: If its a simple code/cold code then it is sent to CPU from the Interpreter, If piece of code is executed repeatedly, it is called hot code > if hot code then v8 sends it to turbofan > JIT(Just In Time) compiles hot code via TurboFan into optimized machine code > if Turbofan assumption is wrong then v8 throws away that optimized macine code and it fall back to the Ignition's bytecode > sent to CPU

## JavaScript Basics

let x = 10;
let = keyword
x = Identifier/Variable Name
= = operator
10 = Literal/Variable value
; = end of statement

Rules for identifier/variable name in JavaScript:
- Must begin with letter A-Z or a-z oe underscore (_) or $
- Subsequent characters may include digits(0-9)
- Cannot dstart with digits
- Cannot be a reserved keywords
- Are case sensetive
- My contain unicode letter & unicode escape sequence
- Cannot contain space, -(hyphens), special characters(except _ and $)

ATS example:

├── VariableDeclaration (let)
│     └── Identifier: a
│     └── Literal: 10
└── ExpressionStatement
      └── CallExpression: console.log
            └── Identifier: a

SOURCE CODE: Written and understood by human
BYTE CODE: Intermediate code created by JavaScript engine, which human cannot understand. It is going to be created into binary code later.  Binary code is smaller than machine code and use less memory.
BINARY CODE: 01010001011001 Understood by CPU