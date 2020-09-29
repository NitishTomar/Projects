// Selectors

const todolist = document.querySelector(".todolist");
const uilist = document.querySelector(".todoui");
const addTodo = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
uilist.addEventListener('click', deleteCheck)
// event Listener

addTodo.addEventListener('click', appendTodo);



// Functions

function appendTodo(event){
    event.preventDefault();
    const tododiv = document.createElement('div');
    const newTodo = document.createElement('li');
    const deleteButton = document.createElement('button');
    const addButton = document.createElement('button');


    tododiv.classList.add('tododiv');
    newTodo.classList.add('todo-item');
    deleteButton.classList.add('delete-button');
    addButton.classList.add('add-button');
    deleteButton.innerText = "-"
    addButton.innerText = "+"

    newTodo.innerText = todoInput.value;

    if(todoInput.value != ""){
    tododiv.appendChild(newTodo);
    tododiv.appendChild(addButton);
    tododiv.appendChild(deleteButton);
    uilist.appendChild(tododiv);
    }
    else{
        alert("Empty Item");
    }

    todoInput.value = "";

}

function deleteCheck(e){
    const t = e.target

    if(t.classList[0] === "delete-button" ){
        const item = t.parentElement;
        item.classList.add("deleteAnimation");
        item.addEventListener("transitionend", function(){

            item.remove();

        })


    }

    if(t.classList[0] === "add-button" ){

        const item = t.parentElement;
        item.classList.toggle("completed");
    }


}






