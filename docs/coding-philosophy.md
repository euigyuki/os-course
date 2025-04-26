# Coding Philosophy 

Writing clean, bug-resistant code saves you—and your TAs—hours of debugging. Here are core principles I recommend for all OS projects:

---

## 1. **Keep Functions Small and Purposeful**

<!-- ✅ One function = one job  
❌ Avoid long functions that do too many things

```java
// Good
void loadProcess() {
  allocateMemory();
  setPCBFields();
  enqueueToScheduler();
}
``` -->

## 2. Separate Logic Layers

<!-- Define:

Low-level helpers: do one small thing (e.g., checkPageValid())
High-level orchestrators: only call helpers (e.g., simulateMemoryAccess()) -->
## 3. Test Incrementally

Don’t write 300 lines before testing. Add one block at a time and test each one.

## 4. Avoid Magic Constants

<!-- Use named constants for clarity and maintainability.

public static final int PAGE_SIZE = 4096; // ✅ readable and reusable -->
## 5. Comment Intentionally

Don’t narrate every line — comment to explain why, not what.

// Wait until the buffer has space before producing
while (buffer.isFull()) {
  wait();
}
## 6. Embrace Object-Oriented Design

Use classes and objects to model real-world OS concepts:

<!-- 🧱 Model What You Manage
Instead of juggling loose variables and functions:

// Messy: managing queues and priorities separately
int[] priorities;
Queue<Process> readyQueue;
Use a class to encapsulate the logic:

class Scheduler {
  private Queue<Process> readyQueue;
  public void addProcess(Process p) { ... }
  public Process pickNext() { ... }
} -->
### Benefits of OOP:
- ✅ Encapsulation: group related data + behavior  
- ✅ Reusability: avoid rewriting logic for every PA  
- ✅ Abstraction: hide complex implementation details  
- ✅ Maintainability: easier to read, extend, and debug  


<!-- Use Java interfaces or abstract classes to handle variation:

interface PageReplacementPolicy {
  int chooseVictimPage();
}

class FIFOReplacement implements PageReplacementPolicy {
  public int chooseVictimPage() { ... }
}

class LRUReplacement implements PageReplacementPolicy {
  public int chooseVictimPage() { ... }
}
💡 This lets you switch strategies easily — no messy if (policy == "LRU") checks everywhere. -->
### 🧼 Avoid God Classes

A God class does everything and knows too much. If a class is longer than ~200 lines or manages multiple responsibilities, break it up.

Use SRP (Single Responsibility Principle) — every class should do one thing well.

### Final Thought on OOP

"If you're writing a memory manager, write a MemoryManager class."
Model the OS like you're building your own — one object at a time.

## 7. Code for Future You

Write code that your sleep-deprived self can understand the night before it’s due 😅

## 8. Final Thought

“The best code is the code you don’t need to fix later.”