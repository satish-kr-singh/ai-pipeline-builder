# AI Pipeline Builder

An AI workflow orchestration platform built using React + FastAPI + Gemini.

This project allows users to create multi-step AI pipelines where each node:

* accepts prompt templates
* receives dynamic variables
* references outputs from other nodes
* executes automatically based on dependency resolution

The system includes:

* prompt templating
* dependency graph execution
* topological sorting
* context propagation
* pipeline validation
* frontend workflow editor

---

# 🚀 Features

## ✅ Prompt Templates

Supports dynamic placeholders:

```text
Summarize:
{{input}}

Keywords:
{{summary.output}}
```

---

## ✅ Node-to-Node Variable Passing

Outputs from previous nodes can be referenced dynamically:

```text
{{summary.output}}
{{keywords.output}}
```

---

## ✅ Dependency Graph Execution

Execution order is computed automatically using:

* dependency parsing
* graph building
* topological sorting

Users can define nodes in ANY order.

---

## ✅ Pipeline Validation

The system validates:

* missing node dependencies
* invalid references
* self dependencies
* circular dependencies

before execution begins.

---

## ✅ AI Model Integration

Integrated with:

* Google Gemini (`gemini-2.5-flash`)

via:

* `google-genai`

---

## ✅ Frontend Workflow Editor

React frontend supports:

* editing workflow nodes
* modifying templates
* updating variables
* executing pipelines
* viewing outputs per node

---

# 🏗️ Architecture

```text
Frontend (React)
        ↓
FastAPI Backend
        ↓
Pipeline Executor
        ↓
Dependency Graph Builder
        ↓
Topological Sort Engine
        ↓
Template Renderer
        ↓
Gemini API
```

---

# 🧠 Example Pipeline

```text
summary → keywords → tweet
```

Example templates:

## summary

```text
Summarize:
{{input}}
```

## keywords

```text
Extract 3 keywords:
{{summary.output}}
```

## tweet

```text
Write a tweet using:
{{summary.output}}

{{keywords.output}}
```

---

# 📂 Project Structure

```text
project/
│
├── server/
│   ├── services/
│   │   ├── gemini_service.py
│   │   ├── pipeline_executor.py
│   │
│   ├── utils/
│   │   ├── template_engine.py
│   │   ├── dependency_parser.py
│   │   ├── pipeline_validator.py
│   │   ├── graph_builder.py
│   │
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │
│   ├── package.json
│
├── .gitignore
├── README.md
```

---

# ⚙️ Backend Setup

## 1. Create virtual environment

```bash
python -m venv venv
```

Activate:

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## 2. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 3. Create `.env`

Inside `backend/`:

```env
GEMINI_API_KEY=your_api_key_here
```

---

## 4. Start backend

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

Swagger docs:

```text
http://127.0.0.1:8000/docs
```

---

# ⚙️ Frontend Setup

## 1. Install dependencies

```bash
npm install
```

---

## 2. Start frontend

```bash
npm run dev
```

Frontend typically runs on:

```text
http://localhost:5173
```

---

# 🔌 API Example

## POST `/run-pipeline`

Example request:

```json
{
  "nodes": [
    {
      "id": "tweet",
      "template": "Write a tweet using:\n{{summary.output}}\n{{keywords.output}}"
    },
    {
      "id": "summary",
      "template": "Summarize:\n{{input}}",
      "variables": {
        "input": "FastAPI is a modern Python framework."
      }
    },
    {
      "id": "keywords",
      "template": "Extract 3 keywords:\n{{summary.output}}"
    }
  ]
}
```

---

# 🧠 Core Engineering Concepts

This project implements concepts commonly used in:

* AI orchestration systems
* workflow runtimes
* DAG execution engines
* prompt chaining systems
* agent frameworks

Key concepts include:

* dependency graphs
* topological sorting
* context propagation
* dynamic template rendering
* execution orchestration

---

# 🛠️ Tech Stack

## Frontend

* React
* JavaScript
* Fetch API

## Backend

* FastAPI
* Python
* Gemini API

## AI

* Google Gemini 2.5 Flash

---

# 🚀 Future Improvements

Planned upgrades:

* React Flow DAG editor
* parallel node execution
* multi-LLM routing
* persistent workflows
* authentication
* workflow saving/loading
* streaming responses
* execution history
* retry mechanisms
* node-level debugging

---

# 📌 Learning Goals

This project was built to explore:

* AI workflow orchestration
* prompt engineering systems
* DAG execution
* frontend/backend integration
* applied AI engineering concepts

---

MIT License
