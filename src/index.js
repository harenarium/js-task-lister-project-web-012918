document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM content has loaded");
  // your code here ....
});

class List{
  constructor(title){
    this.title = title
  }
}

class Task{
  constructor(list, task, priority){
    this.listId = list.id
    this.task = task
    this.priority = priority
  }
}


A user should be able to create a new list. add id to each
A user should be able to add new tasks to a list. if list >0 show form
A list has many tasks
A user should be able to delete a list and its associated tasks.

list has an x

.addEventListener('click', deleteList)

function deleteList(){
  this.id
}
