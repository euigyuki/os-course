# Assignment Help

Welcome! This section provides tips, setup guidance, and common pitfalls for programming assignments (PAs) and written problem sets. Please make sure to review this page **before asking questions** or attending office hours — it will save you time and help you debug more effectively.

---

## 🧑‍💻 Programming Assignments

### 📦 PA1: Thread Creation and Context Switching
**Goals:**
- Implement basic thread management using Java's `Thread` class
- Understand thread lifecycle and context switching

**Resources:**
- 📺 [Thread Basics Video](https://www.youtube.com/your-video-link)
- 🧾 [Starter Code Overview](#)
- 🛠️ Debug Tip: Print thread IDs and current state for each step

**Common Pitfalls:**
- Forgetting to `join()` threads
- Improper synchronization between main and child threads

---

### 📦 PA2: Round-Robin Scheduler
**Goals:**
- Simulate a CPU scheduler using time slices
- Practice Gantt chart visualization in code

**Resources:**
- 📺 [CPU Scheduling Video](https://www.youtube.com/your-video-link)
- 🧾 [Design Strategy](#)
- 🧪 Test Case: Use 3 jobs with staggered burst times

**Common Pitfalls:**
- Miscalculating time slices
- Not accounting for waiting time correctly

---

### 📦 PA3: Synchronization & Shared Resources
**Goals:**
- Use `synchronized`, `wait()`, and `notify()` to prevent race conditions
- Model the producer-consumer problem

**Resources:**
- 📺 [Java Synchronization Deep Dive](https://www.youtube.com/your-video-link)
- 🧾 [Common Design Patterns](#)

**Common Pitfalls:**
- Forgetting to use `while` instead of `if` when checking conditions
- Deadlocks from incorrect lock order

---

### 📦 PA4: Memory Management Simulation
**Goals:**
- Simulate paging, virtual memory, and page replacement
- Implement FIFO and LRU

**Resources:**
- 📺 [Virtual Memory Explained](https://www.youtube.com/your-video-link)
- 🧾 [PA4 Architecture Diagram](#)

**Common Pitfalls:**
- Indexing errors in page tables
- Not resetting metadata on page replacement

---

## ✍️ Problem Sets

### 📝 Problem Set 1: Processes & Threads
- Covers basic terminology, process states, and thread creation
- Practice drawing process lifecycle diagrams

---

### 📝 Problem Set 2: Scheduling
- Includes Gantt chart generation
- Analyze turnaround and waiting times

---

### 📝 Problem Set 3: Synchronization
- Identify race conditions
- Write pseudocode for semaphores and monitors

---

### 📝 Problem Set 4: Virtual Memory
- Calculate page faults using LRU/FIFO
- Translate logical to physical addresses

---

## 🔁 General Advice

- **Start early** — OS assignments often require debugging time.
- **Test incrementally** — don’t write the whole thing before running your code.
- **Use the VSCode debugger** (see [Debugging Tips](#)) — it will save hours.
- Ask questions *after* you’ve tested basic functionality and reviewed the videos.

---

Need help setting up your environment or using the Java debugger? Check the [Debugging Section](#) or attend office hours.
