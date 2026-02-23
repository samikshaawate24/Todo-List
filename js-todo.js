const todoList =[{
    name: 'Make Dinner',
    dueDate:'2026-02-16'
},
{
    name: 'Wash Dishes',
    dueDate :'2026-02-16'
}];
renderTodoList();
function renderTodoList(){
 let todoListHTML ='';

 todoList.forEach((todoObject, index)=>{
    // const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate} = todoObject;
    const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-btn 
        js-delete-todo-button">Delete
    </button>  
    `;
    todoListHTML += html;
 });

 console.log(todoListHTML);
 
document.querySelector('.js-todo-list')
 .innerHTML = todoListHTML;

 document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () =>{
            todoList.splice(index, 1);
        renderTodoList()
        });
  });
}
document.querySelector('.js-add-todo-button').addEventListener('click', () =>{
    addTodo();
});
function addTodo(){
    
    const inputElement =document.querySelector ('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });
    console.log(todoList);

    //Reset the input
    inputElement.value = '';
    renderTodoList();
}


