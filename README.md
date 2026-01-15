
---

# 🚀 AI-Powered Spreadsheet App — **V2**

### *A cross-platform, AI-first data-processing engine built on a hybrid Next.js + Python workflow.*

---

## 📌 Overview

**V2 redesign introduces a structured AI Command Router**, a backend action engine, and a clean separation between UI and data processing.

The goal:
**Transform a simple CSV-cleaning prototype into the foundation of a full spreadsheet engine with AI-controlled operations.**

---

## 🏗️ Architecture (V2)

Your app is now split into two clear layers:

### **1. Next.js Frontend**

* File upload
* User instructions / prompts
* Displays cleaned/processed results
* Prepares data summary before sending to AI
* API route communicates with Python scripts

### **2. Python Processing Layer**

Located in the root-level project folders:

```
/prompts/          → router prompt, JSON schema  
/scripts/          → core processors (router.py + actions)  
/notebooks/        → experiments + prototypes  
```

This layer handles:

* AI routing
* JSON schema validation
* Data transformations
* Cleaning, summarizing, chart planning, formatting
* Output back to Next.js

---

## ✨ Key Improvements in V2

### 🔹 AI Command Routing

User instructions are no longer interpreted loosely.
Instead, a **Router Prompt** forces the model to output:

```json
{
 "action": "",
 "columns": [],
 "parameters": {}
}
```

This makes the system predictable, debuggable, and scalable.

### 🔹 Deterministic Backend Engine

Python scripts safely perform operations like:

* Column cleaning
* Data summarization
* Row filtering
* Sorting
* Applying formulas
* Chart planning

The AI never touches the data directly — it only **requests operations**.

### 🔹 Better Project Structure

Your prompts, schema, scripts, and notebooks are now organized into folders designed for long-term growth.

### 🔹 Clean Data Flow

```
Next.js → Python router → AI model → JSON command → Python action → Next.js
```

---

## 🧠 Core Features (V2)

### 🔹 AI Processing

* Operation routing via JSON schema
* Safe and consistent command structure
* Automatic retries for malformed AI output
* Column/row understanding via dynamic data summary

### 🔹 Data Operations

* Remove null / invalid values
* Convert types
* Normalize messy text
* Basic transformations
* Row filtering
* Sorting
* Quick insights
* Dashboard planning (V2.1)

### 🔹 Prototype Spreadsheet Engine (Coming Next)

* Virtual grid
* In-cell actions
* Inline AI suggestions
* Live transformation previews

---

## 🔧 Tech Stack

| Layer       | Technology                              |
| ----------- | --------------------------------------- |
| Frontend    | Next.js                                 |
| Processing  | Python                                  |
| AI Layer    | Gemini / Free APIs + JSON Schema Router |
| Experiments | Jupyter Notebooks                       |
| Storage     | None yet (CSV in-memory)                |

---

## 📂 Project Structure (V2)

```
/project
   /app                     → Next.js frontend
   /prompts
      router_prompt.txt     → system prompt for AI router
      action_schema.json    → JSON schema for AI output
   /scripts
      router.py             → reads AI result & runs actions
      /actions              → modular operations
         clean_columns.py
         summarize.py
         filter_rows.py
         sort_rows.py
         ...
   /notebooks               → prototype workflows
   README.md                → (this file)
```

---

## 🛠️ Implementation Roadmap (Updated for V2)

### **Phase 1 — V1 Prototype (Completed)**

* CSV upload
* Free AI API integration
* Notebook experiments

### **Phase 2 — V2 Command Router (CURRENT)**

* Router Prompt
* JSON Schema
* Python action engine
* Next.js → Python data flow
* Consistent, deterministic operations

### **Phase 3 — Spreadsheet Engine Core**

* Grid component (Next.js)
* Virtualized cells
* Basic formulas
* Undo/redo

### **Phase 4 — Deep AI Integration**

* AI formula generator
* AI insight side panel
* AI cleaning suggestions
* Auto-charts

### **Phase 5 — Cross-Platform**

* Desktop via Tauri
* Mobile via React Native

### **Phase 6 — Business Layer**

* Freemium AI limits
* Accounts & templates
* Team features & collaboration

---

## 💡 Why V2 Is a Major Upgrade

* **Predictable AI** — JSON schema avoids hallucinated actions.
* **Modular backend** — every operation is an isolated Python file.
* **Scalable** — easy to add new operations in the future.
* **Frontend-agnostic** — same engine can power web, desktop, and mobile later.
* **Developer-friendly** — prompt files, schema, scripts separated cleanly.

---

## 🧠 In One Sentence

**V2 transforms the prototype into a structured AI-directed spreadsheet engine with a real backend architecture, deterministic operations, and a scalable command routing system.**

---
