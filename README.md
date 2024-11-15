# To-Do Application Test Project

This project is a simple To-Do application built for testing essential interactions and state management. It includes a minimal UI and a basic API to manage tasks efficiently.

---

## What's Inside?

- **Basic UI Components:** Pre-built components for task management and user interaction.
- **Basic Structure:** Organized project layout for easy development.
- **Base API for To-Do App:** Server-side integration to handle CRUD operations for tasks.

---

## Test Requirements

- [x] **Application Information Display:** Retrieve and show app name and description dynamically from the server.
- [x] **Optimized App Information:** Enhance performance by retrieving application information efficiently.
- [x] **To-Do Listing:** Display all available tasks.
- [x] **To-Do Author Info:** Show the author details of each to-do on user icon click (basic UI already implemented).
- [x] **Real-Time To-Do Creation:** Add a new task and display it instantly in the list without refreshing the page (basic UI already implemented).
- [x] **Instant To-Do Update:** Update a task's status and see the change reflected immediately in the list without page reload (basic UI already implemented).
- [x] **Seamless To-Do Deletion:** Remove a task from the list on deletion without page reload (basic UI already implemented).
- [x] **To-Do Filtering:** Filter tasks by their status (completed, in-progress, all).
- [x] **To-Do Search:** Search tasks based on their title.

---

## API Endpoints

**Base URL:** `https://edtech-todo.vercel.app/api`

- **Get All To-Dos:** `GET /todos`  
  Retrieve a list of all to-dos.

- **Get To-Dos by Status:** `GET /todos?status={completed|in-progress}`  
  Retrieve a list of to-dos filtered by their status (`completed` or `in-progress`).

- **Create a New To-Do:** `POST /todos`  
  Add a new to-do. Requires a `title` field in the form data.

- **Update To-Do Status:** `PUT /todos`  
  Update the completion status of a to-do. Requires a JSON body with:
  ```json
  {
    "id": "<to-do_id>",
    "completed": true or false
  }
- **Delete To-Do:** `DELETE /todos`  
  Remove a to-do. Requires a JSON body with:
  ```json
  {
    "id": "<to-do_id>",
  }


## AUTHORS
- **[Joe Watson SBF](https://github.com/joe-watson-sbf)**
- **[John Cosky](https://github.com/john6847)**