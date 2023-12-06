const pageForm = document.getElementById('header-form')
pageForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const todoInputField = document.getElementById('todolist')
  const userList = document.createElement('div')
  userList.innerHTML = `
        <p>${todoInputField.value}</p>
        `
        const listSection = document.getElementById('list')
        listSection.appendChild(userList)
        todoInputField.value = ''
})
const externalFunction = function (e) {
    console.log("l'evento è", e)
  }
div.addEventListener('click', externalFunction)