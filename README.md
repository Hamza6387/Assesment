# Dynamic UI Renderer

## 📌 Overview
This project dynamically renders UI components based on a JSON schema.  
It supports repeat containers, parent-child relationships, and expression-based data binding.

---

##  Features

- Dynamic UI rendering from JSON
- Repeat container support
- Parent-child mapping using pId
- Expression resolver for {{ }} bindings
- Components: Text Input, Radio Group, Checkbox Group
- Clean and modular structure

---

##  Approach

1. Parsed the JSON schema
2. Built a parent-child mapping using pId
3. Implemented repeat container to loop through data
4. Created a reusable expression resolver for dynamic values
5. Rendered components dynamically based on type

---

## ⚙️ Setup Instructions

1. Clone the repository: 
git clone <repo-link>

2. Install dependencies: 
npm install

3. Run the project:
npm run dev
