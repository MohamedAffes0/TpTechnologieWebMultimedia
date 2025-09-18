console.log("Script loaded");

// Array to hold tasks
let tasks = [];

// Event listeners for adding tasks
document.getElementById('addTaskButton').addEventListener("click", addTask);
document.getElementById('addTaskButton').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

/**
 * 
 * Add a new task to the list
 * 
 */
function addTask() {
    
    // Get the input value
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    // If the input is empty, do nothing
    if (text === '') return;

    // Create a new task object
    const task = {
        text: text,
        terminated: false,
    }
    tasks.push(task);

    taskInput.value = "";

    showTasks(); // Update the display
    saveTasks(); // Save to local storage
}

/**
 * 
 * Display the tasks in the list
 */
function showTasks() {
    // Get the task list element    
    const taskList = document.getElementById('taskList');

    taskList.innerHTML = ""; // Clear the list

    // Loop through the tasks and create list items
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index]; // Current task
        const li = document.createElement("li"); // Create a list item

        // Create the content of the task
        const content = document.createElement("p");
        content.textContent = element.text;
        
        // If the task is terminated, add a line-through style
        if (element.terminated === true) {
            content.style.textDecoration = "line-through"
        }

        // Create the terminate button
        const terminateButton = document.createElement("button");
        terminateButton.textContent = "Terminer"
        terminateButton.addEventListener("click", () => terminateTask(index));

        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer"
        deleteButton.addEventListener("click", () => deleteTask(index));

        // Append content and buttons to the list item
        li.appendChild(content)
        li.appendChild(terminateButton);
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);
    }
}

/**
 * 
 * Toggle the terminated status of a task
 * @param {*} index Index of the task in the array
 * 
 */
function terminateTask(index) {
    tasks[index].terminated = !tasks[index].terminated; // Toggle the status
    showTasks(); // Update the display
    saveTasks(); // Save to local storage
}

/**
 * 
 * Delete a task from the list
 * @param {*} index Index of the task in the array
 */
function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks(); // Update the display
    saveTasks(); // Save to local storage
}

/**
 * 
 * Save tasks to local storage
 */
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * 
 * Load tasks from local storage
 */
function loadTasks() {
    const data = localStorage.getItem("tasks");
    if (data) {
        tasks = JSON.parse(data);
    }

    showTasks(); // Update the display
}

window.onload = loadTasks(); // Load tasks when the page is loaded
