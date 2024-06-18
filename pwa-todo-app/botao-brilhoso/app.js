document.getElementById('todo-form').addEventListener("subimit", function (e) {
    e.preventDefault();
    const input= document.getElementById("todo-input") ;
    addtodo (input.value);
    input.value="";
});
function addtodo(tarefa){const list = document.getElementById("todo-list") ;
    const listItem = document.createElement ("li") ;
    listItem.textContent =tarefa;
    list.appendChild(listitem) ;
}