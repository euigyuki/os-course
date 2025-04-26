# Coding Philosophy 

Writing clean, bug-resistant code saves you—and your TAs—hours of debugging. Here are core principles I recommend for all OS projects:

---

## 🧩 1. **Keep Functions Small and Purposeful**

✅ One function = one job  
❌ Avoid long functions that do too many things

```java
// Good
void loadProcess() {
  allocateMemory();
  setPCBFields();
  enqueueToScheduler();
}
```java

🔁 2. Separate Logic Layers

Define:

Low-level helpers: do one small thing (e.g., checkPageValid())
High-level orchestrators: only call helpers (e.g., simulateMemoryAccess())
🧪 3. Test Incrementally

Don’t write 300 lines before testing. Add one block at a time and test each one.

📛 4. Avoid Magic Constants

Use named constants for clarity and maintainability.

public static final int PAGE_SIZE = 4096; // ✅ readable and reusable
🧼 5. Comment Intentionally

Don’t narrate every line — comment to explain why, not what.

// Wait until the buffer has space before producing
while (buffer.isFull()) {
  wait();
}
🧘 6. Code for Future You

Write code that your sleep-deprived self can understand the night before it’s due 😅

🧠 Final Thought

“The best code is the code you don’t need to fix later.”