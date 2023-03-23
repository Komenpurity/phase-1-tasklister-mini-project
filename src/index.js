// submitting a form

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", 
  (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);  
  })
});


function handleToDo(task){
  let li = document.createElement("li")
  li.textContent = task

  let btn = document.createElement("button")
  btn.textContent = "X"
  li.appendChild(btn) 

  document.getElementById("tasks").appendChild(li) 
}
