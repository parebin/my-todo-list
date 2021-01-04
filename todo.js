

// Selection des elements

const addButton = document.querySelector('#addbutton')
const inputText = document.querySelector('#addtext')
const todolist = document.querySelector('#items')
const items = document.querySelectorAll('.item')
const clear = document.querySelector('#refresh')
const dateElement = document.getElementById('date')
const menuBtn = document.querySelector('#menu-btn')


document.addEventListener('DOMContentLoaded', getTodos);


/*afficher le menu
menuBtn.addEventListener('mouseenter', function(event){
    const menu = document.querySelector('#menu')
    menu.style.display ='block'
})
menuBtn.addEventListener('mouseout', function(event){
    const menu = document.querySelector('#menu')
    menu.style.display ='none'
})*/

// clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear()
    location.reload()
})

// mettre la date du jour
const options = {year:"numeric", weekday : "short", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("fr-FR", options);

// fonction pour ajouter une tache par le bouton 
addButton.addEventListener('click', function(event){
    const taskName = inputText.value 
    inputText.value = ""
    const divItem = document.createElement('div')
    divItem.classList.add('item');
    const check = "unchecked";
    divItem.innerHTML = `
        <input type="checkbox" name="isDone" ${check}>
        <div>
            <p> ${taskName} </p>
        </div>`
    ajouterPoubelle(divItem)
    todolist.appendChild(divItem);
    saveLocalTodos(taskName);     
    });

for (let item of items) {
    ajouterPoubelle(item)
 
}

// fonction pour ajouter par la touche enter
document.addEventListener("keyup",function(even) {
    if(event.keyCode == 13) {
        const taskName = inputText.value 
        inputText.value = ""

        const divItem = document.createElement('div')
        divItem.classList.add('item')
        divItem.innerHTML = `
            <input type="checkbox" name="isDone" id="isDone">
            <div>
                <p> ${taskName} </p>
            </div>
        `
        ajouterPoubelle(divItem)
        todolist.appendChild(divItem);
        saveLocalTodos(taskName);         
    }
});

//fonction pour ajouter le delete et supprimer le div
function ajouterPoubelle(item) {
    const poubelle = document.createElement('button');
    poubelle.innerHTML = '<i class="far fa-trash-alt"></i>';
    poubelle.classList.add('poubelle');
    item.appendChild(poubelle)
    poubelle.addEventListener('click', function(event){
        event.target.parentNode.remove()
        removeLocalTodos(item)
    })
};


//function sauvegarder


function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos')=== null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
};

function getTodos(){
    let todos;
    if (localStorage.getItem('todos')=== null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach(function(todo){   
    const divItem = document.createElement('div')
    divItem.classList.add('item')
    divItem.innerHTML = `
        <input type="checkbox" name="isDone">
        <div>
            <p> ${todo} </p>
        </div>`
    ajouterPoubelle(divItem)
    todolist.appendChild(divItem);

    })
}}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos')=== null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));

}




/*


save.addEventListener('click',function(event){
    saveTache()
})



function saveTache(){
    localStorage.clear();
    localStorage.setItem('items')
}

*/





/*
 Lire l'input
addElement = document.getElementById('addtext').value
nbString = addElement.length
console.log(nbString)

function recupText() {
const addElement =document.getElementById('addtext').value
console.log(addElement)
}

// création d'une nouvelle tache sans message commentaire 

const addBtn = document.querySelector('#addbutton')
addBtn.addEventListener('click', function(event)
{
    const divItem = document.createElement('div')
    divItem.classList.add('item')
    divItem.innerHTML = `
    <input type="checkbox" name="isDone" id="isDone">
    <div>
        <p></p>
    </div>
    <div class="delete">
        <img src="./delete.png" alt="Supprimer">
    </div>
    `
    const todolist = document.querySelector('#items')
    todolist.appendChild(divItem)
    }
);



// suppression item

const supBtn = document.querySelector('#delete')
console.log(supBtn)
supBtn.addEventListener('click', function(event)

{
    const delItem = document.querySelector('#item');
    delItem.removeChild('div')

});


// création d'un nouveau itm
/*
const divItem = document.createElement('div')
divItem.classList.add('item')
divItem.innerHTML = `
    <input type="checkbox" name="isDone" id="isDone">
    <div>
        <p>nelle item</p>
    </div>
    <div class="delete">
        <img src="./delete.png" alt="Supprimer">
    </div>
`
const todolist = document.querySelector("#items")
todolist.appendChild(divItem)
*/

/*
// validation nlle tache + crétion d'une nll boite
const addBtn = document.querySelector('#addbutton')
const divItem = document.createElement('div')
addBtn.addEventListener('click', function(event)
{
    alert('La tache a bien été ajoutée');

    divItem.classList.add('item')
    divItem.innerHTML = `
    <input type="checkbox" name="isDone" id="isDone">
    <div>
        <p>nelle item</p>
    </div>
    <div class="delete">
        <img src="./delete.png" alt="Supprimer">
    </div>
`
    const todolist = document.querySelector("#items")
    todolist.appendChild(divItem) 
}) 
*/