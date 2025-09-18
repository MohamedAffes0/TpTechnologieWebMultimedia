console.log("Script loaded");

// Array to hold tasks
let tasks = [];

// Event listeners for adding tasks
document.getElementById('addTaskButton').addEventListener("click", addTask);

// Allow adding task by pressing Enter key
document.getElementById('taskInput').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Event listener for clearing all tasks
document.getElementById('clearTasksButton').addEventListener("click", function() { 
    tasks = [];
    showTasks(tasks); 
    saveTasks();
});

// Event listener for searching tasks
document.getElementById('searchInput').addEventListener("input", function(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchText));
    
    showTasks(filteredTasks);
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

    showTasks(tasks); // Update the display
    saveTasks(); // Save to local storage
}

/**
 * 
 * Display the tasks in the list
 */
function showTasks(tasks) {
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
        terminateButton.addEventListener("click", () => terminateTask(index, tasks));

        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer"
        deleteButton.addEventListener("click", () => deleteTask(index, tasks));

        const div = document.createElement("div");
        div.className = "buttons";
        div.appendChild(terminateButton);
        div.appendChild(deleteButton);

        // Append content and buttons to the list item
        li.appendChild(content)
        li.appendChild(div);

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
function terminateTask(index, tasks) {
    tasks[index].terminated = !tasks[index].terminated; // Toggle the status
    showTasks(tasks); // Update the display
    saveTasks(); // Save to local storage
}

/**
 * 
 * Delete a task from the list
 * @param {*} index Index of the task in the array
 */
function deleteTask(index, tasks) {
    tasks.splice(index, 1);
    showTasks(tasks); // Update the display
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

    showTasks(tasks); // Update the display
}

window.onload = loadTasks(); // Load tasks when the page is loaded
