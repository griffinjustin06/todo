const TodoListItemCheckboxComponent = (text) => {
  const toggleItemChecked = (el, index) => {
    var itemEl = el.parentNode
    var spanEl = itemEl.children[1]

    if (el.checked) {
      spanEl.setAttribute("class", "done")
      window.state.items = window.state.items.map((item, _index) => {
        if (_index === index) return { done: true, name: item.name }
        else return item
      })
    } else {
      spanEl.removeAttribute("class")
      window.state.items = window.state.items.map((item, _index) => {
        if (_index === index) return { done: false, name: item.name }
        else return item
      })
    }
  }

  var checkboxEl = document.createElement("input")
  checkboxEl.setAttribute("type", "checkbox")
  checkboxEl.setAttribute("name", "status")
  checkboxEl.setAttribute("value", text)

  const index = window.state.items.findIndex((item) => item.name === text)

  if (index > -1 && window.state.items[index].done) {
    checkboxEl.setAttribute("checked", "checked")
  }

  checkboxEl.addEventListener("click", (event) =>
    toggleItemChecked(event.target, index)
  )

  return checkboxEl
}

const TodoListItemDeleteButtonComponent = (text) => {
  const removeItem = (text) => {
    // var itemEl = el.parentNode
    // itemEl.remove()
    window.state.items = window.state.items.filter((item) => item.name !== text)
    console.debug(window.state.items)
  }

  //create delete button
  var deleteButtonEl = document.createElement("button")
  deleteButtonEl.innerText = "x"
  // deleteButtonEl.setAttribute("id", `delete-${text}`)
  deleteButtonEl.addEventListener("click", (event) => removeItem(text))

  return deleteButtonEl
}

const TodoListItemComponent = (item) => {
  //creat list elemment
  var listItemEl = document.createElement("li")

  const checkboxComponent = TodoListItemCheckboxComponent(item.name)

  //creat text span
  var textSpanEl = document.createElement("span")
  textSpanEl.innerText = item.name

  const deleteButtonComponent = TodoListItemDeleteButtonComponent(item.name)

  listItemEl.appendChild(textSpanEl)
  listItemEl.appendChild(deleteButtonComponent) // append delete button
  listItemEl.prepend(checkboxComponent) //prepend checkbox to list item children

  return listItemEl
}

export { TodoListItemDeleteButtonComponent }
export default TodoListItemComponent
