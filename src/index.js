document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  
  form.addEventListener('submit',  (e)=>{
    e.preventDefault()
    buildTodo(e.target['new-task-description'].value)
    form.reset()
  })
});

function buildTodo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')

  btn.addEventListener('click',handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}




 document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('form').addEventListener('submit', (e) => {
      console.log(e)
    })
 })