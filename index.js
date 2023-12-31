import TodoComponent from "./todo/index.js"

const createState = (state) => {
  let _state = { ...state }
  let _listener = () => {
    // console.debug(_state)
    App()
  }

  if (state === null || Object.keys(state).length === 0) {
    _state = {
      ...state,

      items: [
        { done: false, name: "Get Groceries" },
        { done: false, name: "find catgirl" },
        { done: false, name: "find waifu" },
        { done: false, name: "Setupup OF for both" },
        { done: false, name: "Tell one the other is prettier" },
        { done: false, name: "Sell tickets" },
        { done: false, name: "Fix dinner" },
        { done: false, name: "World Domination" },
        { done: false, name: "Mars Domination" },
        { done: false, name: "Underside of Flat Earth Domination" },
        { done: false, name: "Inside of Hollow Earth Domination" },
        { done: false, name: "Version control w git" },
        { done: false, name: "deployment" },
        { done: false, name: "node" },
        { done: false, name: "Typescript" },
      ],
    }
  }

  return new Proxy(
    {},
    {
      // The get method to access the state data
      get: (target, key) => {
        return _state[key]
      },
      //the set method to modify the state data
      set: (target, key, value) => {
        _state[key] = value
        localStorage.setItem("state", JSON.stringify(_state))
        _listener()
        return true
      },
      registerListener: (listener) => {
        _listener = listener
      },
    }
  )
}
// localStorage.setItem("state", JSON.stringify({}))
const iniState = JSON.parse(localStorage.getItem("state"))
window.state = createState(iniState)

function App() {
  //get app render target
  var mainEl = document.getElementById("app")
  mainEl.innerHTML = null
  // console.debug(window.state.items)

  const todoComponent = TodoComponent(window.state.items)
  mainEl.appendChild(todoComponent)
}

App()
