# 🛠️ Debugging Java in VSCode

Debugging is more than just fixing errors — it's about understanding what your code is doing and *why*. Here’s how to debug Java programs using **Visual Studio Code**, step by step.

---

## ⚙️ 1. Setup VSCode for Java

<!-- 1. Install the **Java Extension Pack** from the VSCode Marketplace.
2. Make sure you have a JDK installed (`java -version` in your terminal).
3. Open your project folder in VSCode (your `.java` files should be in `src/` or similar). -->

---

## 🐞 2. Add Breakpoints

<!-- - Click in the **gutter** (left of the line number) where you want execution to pause.
- Breakpoints show up as red circles.

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i); // ← set a breakpoint here
} -->
## 3. Start Debugging

Press F5 or go to Run > Start Debugging.
If prompted, click “Java” as the debugger.
VSCode will automatically detect the main class and compile your code.
## 🧭 4. Use the Debugger Panel

<!-- Once debugging starts, use:

▶️ Continue — resume running until the next breakpoint
⏭ Step Over — go to the next line (skip function internals)
 Step Into — step inside a function call
⏹ Stop — end the session
Also check:

Variables: watch local/global variables
Call Stack: trace how the program reached this point
Watch Expressions: add any variable or expression manually -->
## 🔍 5. Debugging Tips

🧪 Add Logs While Debugging
Use System.out.println() to quickly trace values and logic flow.

System.out.println("Reached checkpoint A, buffer size = " + buffer.size());
🧵 Debugging Threads
If your project involves multithreading:

Add breakpoints inside run() methods
Watch shared variables like buffers or flags
Use breakpoints to pause competing threads

## 6. Optional: Use Logs Instead of Breakpoints
Not every bug needs a breakpoint. Sometimes, it’s easier to log what your program is doing.
Use Java's Logger:

If you want more control, use java.util.logging.Logger for real log levels

## 💡 Pro Tip: Watch Expressions

Use the Watch panel to track variables, like:

## 🧠 Final Thought

“Don’t just stare at your code — step through it.”
Using the debugger saves time and teaches you how the Java Virtual Machine really runs your code.

