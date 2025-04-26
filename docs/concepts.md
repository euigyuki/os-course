# OS Concepts 

---

## 🗂 Processes

### 🧠 Key Concepts
- Definition and purpose of a process  
- Process Control Block (PCB)  
- Process creation mechanisms: `fork()`, `exec()`  
- Process states: new, ready, running, waiting, terminated  
- Context switching  
- Process scheduling and management  

## 🎬 Related Videos

- 📺 [What is a Process vs. a Thread?](https://youtube.com/link1)  
  Explains PCB, fork/exec, and thread separation using analogies.



---

## 🗂 Threads

### 🧠 Key Concepts
- Difference between threads and processes  
- Benefits of multithreading  
- Thread libraries: Pthreads, Java threads  
- User-level vs. kernel-level threads  
- Multithreading models: many-to-one, one-to-one, many-to-many  

- 📺 [Multithreading Models Explained](https://youtube.com/link2)  
  Covers many-to-one, one-to-one, many-to-many with diagrams.
---

## 🗂 CPU Scheduling

### 🧠 Key Concepts
- Scheduling criteria: CPU utilization, throughput, turnaround time, waiting time, response time  
- Scheduling algorithms:  
  - First-Come, First-Served (FCFS)  
  - Shortest Job First (SJF)  
  - Round Robin (RR)  
  - Priority scheduling  
  - Multilevel queue scheduling  
  - Multilevel feedback queue scheduling  
- Gantt charts for visualizing schedules 
### 🎬 Suggested Videos
- 📺 **How Scheduling Algorithms Work (with Gantt Charts)**  
  Explains timing calculations and visualizes common schedulers.  
- 📺 **Multilevel Feedback Queues: Explained Simply**  
  Uses concrete analogies like theme park lines.


---

## 🗂 Synchronization

### 🧠 Key Concepts
- Critical-section problem  
- Peterson's solution  
- Synchronization hardware: test-and-set, compare-and-swap  
- Semaphores  
- Monitors  
- Mutex locks and condition variables  
- Deadlock prevention in synchronization  
### 🎬 Suggested Videos
- 📺 **Understanding Critical Sections & Race Conditions**  
  Counter increment demo with output anomalies.  
- 📺 **Semaphores & Mutex Locks (Java Examples)**  
  With working examples using `synchronized`, `Lock`, and `Semaphore`.

---

## 🗂 Deadlocks

### 🧠 Key Concepts
- System model for deadlocks  
- Deadlock characterization:  
  - Mutual exclusion  
  - Hold and wait  
  - No preemption  
  - Circular wait  
- Resource Allocation Graph (RAG)  
- Methods for handling deadlocks:  
  - Deadlock prevention  
  - Deadlock avoidance (Banker's algorithm)  
  - Deadlock detection and recovery  
### 🎬 Suggested Videos
- 📺 **Deadlocks Explained Visually**  
  Step-by-step RAG example + 4 conditions.  
- 📺 **Banker's Algorithm: Should You Even Bother?**  
  High-level intuition and how it relates to safety.

---

## 🗂 Memory Management

### 🧠 Key Concepts
- Contiguous memory allocation  
- Paging and segmentation  
- Address translation and Memory Management Unit (MMU)  
- Fragmentation: internal and external  
- Swapping  
- Allocation algorithms: first-fit, best-fit, worst-fit  

### 🎬 Suggested Videos
- 📺 **Paging vs. Segmentation: What’s the Difference?**  
  Visual layout of memory and translation logic.

---

## 🗂 Virtual Memory

### 🧠 Key Concepts
- Demand paging  
- Page replacement algorithms:  
  - FIFO (First-In, First-Out)  
  - LRU (Least Recently Used)  
  - Optimal page replacement  
- Thrashing and working set model  
- Memory-mapped files  
- Shared memory  
### 🎬 Suggested Videos
- 📺 **How Virtual Memory Works**  
  Explains page faults and demand paging with diagrams.  
- 📺 **Page Replacement Algorithms**  
  Walkthroughs of FIFO, LRU, and optimal replacement.
---

## 🗂 File-System Interface

### 🧠 Key Concepts
- File concept and attributes  
- File operations: create, read, write, delete  
- File types and structures  
- Access methods: sequential, direct, indexed  
- Directory structures:  
  - Single-level  
  - Two-level  
  - Tree-structured  
  - Acyclic graph  
  - General graph  
- File sharing and protection  

### 🎬 Suggested Videos
- 📺 **Directory Structures Explained**  
  Simple visual examples of each directory model.  
- 📺 **Access Methods for Files**  
  Examples of sequential and direct access.

---

## 🗂 File-System Implementation

### 🧠 Key Concepts
- File system structure and layout  
- File Control Blocks (FCB)  
- Directory implementation  
- Allocation methods: contiguous, linked, indexed  
- Free-space management: bitmaps, linked list, grouping  
- Efficiency and performance considerations  

### 🎬 Suggested Videos
- 📺 **File Allocation Methods Explained**  
  Grid-based examples comparing allocation types.

---

## 🗂 Mass-Storage Structure

### 🧠 Key Concepts
- Overview of mass-storage devices: HDDs, SSDs  
- Disk structure and scheduling algorithms:  
  - FCFS  
  - SSTF  
  - SCAN  
  - C-SCAN  
  - LOOK  
  - C-LOOK  
- Disk management: formatting, boot blocks, bad blocks  
- RAID structures and levels  
- Swap-space management  
### 🎬 Suggested Videos
- 📺 **Disk Scheduling Algorithms**  
  Head movement animations for each algorithm.


---

## 🗂 I/O Systems

### 🧠 Key Concepts
- I/O hardware: buses, controllers, device drivers  
- Application I/O interface  
- Kernel I/O subsystem: scheduling, buffering, caching, spooling  
- I/O protection and error handling  
- Performance aspects of I/O systems  

### 🎬 Suggested Videos
- 📺 **How I/O Works in the OS**  
  Overview of the stack from hardware to system calls.

---

## 🗂 Protection

### 🧠 Key Concepts
- Goals of protection  
- Domain of protection  
- Access matrix and its implementation  
- Access control lists and capability lists  
- Revocation of access rights  
- Language-based protection  
### 🎬 Suggested Videos
- 📺 **Access Matrix and ACLs**  
  Visual walkthrough with file-permission examples.


---

## 🗂 Security

### 🧠 Key Concepts
- Security problems and threats:  
  - Program threats  
  - System threats  
  - Network threats  
- Cryptography as a security tool  
- User authentication mechanisms  
- Security defenses: firewalls, intrusion detection systems  
- Trusted systems and security policies  
- Security auditing and monitoring  

### 🎬 Suggested Videos
- 📺 **Common OS Security Threats**  
  Examples of buffer overflow, spoofing, and privilege escalation.  
- 📺 **Authentication & Firewalls**  
  Explains login logic, tokens, and access filtering.
