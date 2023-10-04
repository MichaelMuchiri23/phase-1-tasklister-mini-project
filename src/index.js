document.addEventListener("DOMContentLoaded", () => {

    let form=document.querySelector('form')
    let input=document.getElementById('new-task-description')
    form.addEventListener('submit',(e)=>{
    createFunction(form.querySelector('#new-task-description').value)
    e.preventDefault()
    form.reset()
  })
});

function createFunction(todo){
  let p=document.createElement('p')
  let bttn=document.createElement('button')
  p.textContent=`${todo}`
  bttn.textContent='X'
  document.querySelector('#list').appendChild(p)
  p.appendChild(bttn)
  bttn.addEventListener('click',deleteButton)
}

function deleteButton(e){
  e.target.parentNode.remove()
}