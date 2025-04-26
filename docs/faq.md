# Frequently Asked Questions

> Before attending office hours, please check here — your question might already be answered!

---

<details>
<summary>💥 Why does <code>fork()</code> return twice?</summary>

It returns once in the parent process (with the child's PID) and once in the child process (with 0). This is how the OS helps distinguish between the two processes after a fork.
</details>

<details>
<summary>🐛 How do I debug a segmentation fault?</summary>

Use a debugger like `gdb` or the VSCode debugger. Check for null pointers, out-of-bound array accesses, and incorrect memory access.
</details>

<details>
<summary>🎲 Why does my thread program behave unpredictably?</summary>

You're likely encountering a race condition. Use synchronization tools like `mutex`, `semaphore`, or `lock` to protect shared data.
</details>

<details>
<summary>😐 Why is my process stuck and not progressing?</summary>

It may be waiting forever due to a full buffer, deadlock, or missed signal. Check your synchronization logic carefully.
</details>

<details>
<summary>🧵 What's the difference between a process and a thread?</summary>

Processes have separate memory spaces; threads share memory within the same process. Threads are lighter and better for parallelism.
</details>

<details>
<summary>🕰️ What’s the difference between <code>wait()</code> and <code>sleep()</code>?</summary>

- `sleep()`: Pauses a process for a specified amount of time.  
- `wait()`: Makes a parent process wait until one of its child processes finishes.
</details>

<details>
<summary>⚖️ Why is my Round Robin scheduler unfair?</summary>

Make sure you're rotating the queue correctly and accounting for context switch overhead. Double-check your time slice handling.
</details>

<details>
<summary>🔒 How do I avoid deadlocks in my code?</summary>

Use:
- A consistent resource acquisition order  
- Avoid holding multiple locks  
- Use timeouts or lock ordering strategies
</details>

<details>
<summary>🔥 What causes thrashing in virtual memory?</summary>

Thrashing happens when too many page faults occur. It means the system spends more time swapping than running — typically due to a large working set.
</details>

<details>
<summary>📊 Do I need to know Gantt charts?</summary>

Yes! They’re essential for understanding scheduling algorithms and computing wait/turnaround time.
</details>

<details>
<summary>📦 What's the difference between internal and external fragmentation?</summary>

- **Internal**: Unused space *inside* an allocated region  
- **External**: Free memory *between* allocations, too small to use
</details>

<details>
<summary>📞 What are system calls?</summary>

System calls allow user programs to interact with the OS — like creating processes, reading files, or allocating memory.
</details>

<details>
<summary>🃏 How do I submit my joke?</summary>

Email your joke to `egk265@brandeis.edu` with the subject line “OS Joke Submission”.  
If it makes the TA team laugh (or groan), you might be featured in recitation!

> ⚠️ Please: No inappropriate content — racist, sexist, or offensive jokes will be disqualified.
</details>
