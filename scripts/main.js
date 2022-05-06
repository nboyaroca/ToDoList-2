import { toDoList } from "./toDoList.js";

document.addEventListener('DOMContentLoaded', keyPress("Enter"))

function keyPress (tecla){ 
    let inputElement = document.getElementById('input_task');
    inputElement.addEventListener("keypress", function(keyAction) {
        if (keyAction.key === tecla) {

          document.getElementById("buton_add").click();
        }
    }
)};


document.getElementById("buton_add").addEventListener('click',()=>{
    toDoList.addToDo(input_task.value);
    input_task.value="";
})

toDoList.render();