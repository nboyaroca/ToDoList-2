import { toDoList } from "./toDoList.js";

document.getElementById("buton_add").addEventListener('click',()=>{
    toDoList.addToDo(input_task.value);
    input_task.value="";
})

toDoList.render();