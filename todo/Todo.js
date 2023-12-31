import TodoListComponent from "./TodoList.js"
import { TodoListItemDeleteButtonComponent } from "./TodoListItem.js"
import TodoAddComponent from "./TodoAdd.js"

const TodoComponent = (items) => {
  const addToListComponent = TodoAddComponent()

  const todoListComponent = TodoListComponent(items)

  // const deleteButtonComponent = TodoListItemDeleteButtonComponent(
  //   'node'
  // )

  var divEl = document.createElement("div")
  divEl.appendChild(addToListComponent)
  // divEl.appendChild(deleteButtonComponent)
  divEl.appendChild(todoListComponent)

  return divEl
}

export { TodoComponent }
export default TodoComponent
