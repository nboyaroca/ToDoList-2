export const toDoList = {
    listState: ['Visitar a la família', 'Comprar vols'
    ],

    editByIndex(index, parentContainer){
        console.log(index,parentContainer)

        parentContainer.innerHTML=(`<div class="edit_container">
        <button id=${index} class="edit_back_arrow"><i class="fa-solid fa-arrow-left"></i></button>
        <input id="edit_input" type="text" placeholder="No hi ha res per editar" 
        value=""/>
        <button id=${index} class="button_save"><i class="fa-solid fa-circle-check"></i></button>
        <button id=${index} class="button_close"><i class="fa-solid fa-xmark fa-lg"></i></button>
        </div>`);
        // fer el render un cop editat (save) o cancel·lat edició (close), no abans.
    },

    addToDo(newToDo) {
        if (newToDo.length > 0){
        this.listState.push(newToDo)
        this.render();
        } {console.log("Error. The input is empty")}
    },

    deleteByIndex(index){
        this.listState.splice(index,1);
        this.render();
    },

    render(){
        let html ="";
        let listZone = document.getElementById("list_object");


        if (this.listState.length>0){
            for(let listElement of this.listState){
                html += `<li><div class="toDo_main">
                <div class="toDo_status">
                <i id=${this.listState.indexOf(listElement)} class="fa-solid fa-circle-notch toDo_status_default"></i>
                </div>
                <div class="toDo_task">${listElement}</div>
                <i id=${this.listState.indexOf(listElement)} class="fa-solid fa-pen button_edit"></i>
                <i id=${this.listState.indexOf(listElement)} class="fa-solid fa-lock button_lock"></i>
                <i id=${this.listState.indexOf(listElement)} class="fa-solid fa-trash-can button_delete"></i>
                </div></li>`;
            }
            listZone.style.justifyContent=("flex-start");
        }
        else{html=`<p>There's nothing to do!<br><span>#relaxingtime</spant></p><i class="fa-solid fa-ghost fa-5x"></i>`
        listZone.style.display=("flex");
        listZone.style.justifyContent=("center");
        }

        // <i id=${this.listState.indexOf(listElement)} class="fa-solid fa-check toDo_status_done"></i> --> icona status done
        // <i class="fa-solid fa-exclamation toDo_status_important"></i> --> icona status important
        // <i class="fa-solid fa-clock-rotate-left toDo_status_remind"></i> --> icona status remind


        let listByDOM = document.getElementById("list_object");
        listByDOM.innerHTML=html;

        //li assignem un event listener als botons dels elements de la llista
        let buttons = document.querySelectorAll(".button_delete");
        buttons.forEach((button)=>{

            button.addEventListener("click", (e) => this.deleteByIndex(e.target.id))        
        })

        let editButtons = document.querySelectorAll(".button_edit");
        editButtons.forEach((editButton) =>{

            editButton.addEventListener('click',(e) => this.editByIndex(e.target.id,e.target.parentElement))
        })
    }
}

