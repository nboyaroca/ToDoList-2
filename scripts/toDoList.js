export const toDoList = {
    listState: ['tasca 1', 'tasca 2', 'tasca 3'
    ],

    editByIndex(index, parentContainer){
        console.log(index,parentContainer)

        parentContainer.innerHTML=(`<li class="edit_container">
        <button ${index} class="edit_back_arrow"><i class="fa-solid fa-arrow-left"></i></button>
        <input id="edit_input" type="text" placeholder="No hi ha res per editar" 
        value="patata"/>
        <button id=${index} class="button_save"><i class="fa-solid fa-circle-check"></i></button>
        <button id=${index} class="button_close"><i class="fa-solid fa-xmark fa-lg"></i></button>
        </li>`);
        // fer el render un cop editat (save) o cancel·lat edició (close), no abans.
    },

    addToDo(newToDo) {
        if (newToDo.length > 0){
        this.listState.push(newToDo)
        this.render();
        }

    },

    deleteByIndex(index){
        this.listState.splice(index,1);
        this.render();
    },

    render(){
        let html ="";

        for(let listElement of this.listState){
            html += `<li><div class="toDo_main">
            <button id="status" class="toDo_status_default"></button>
            <div class="toDo_container">${listElement}</div>
            <button id=${this.listState.indexOf(listElement)} class="button_edit"> E </button>
            <button id=${this.listState.indexOf(listElement)} class="button_lock"> L </button>
            <button id=${this.listState.indexOf(listElement)} class="button_delete"> D </button>
            </div></li>`;
        }

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

