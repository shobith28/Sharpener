
// Add the Edit Button:
document.querySelectorAll('.fruit').forEach(li => {
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  li.appendChild(editBtn);
});

// Implement the code as in video but with one extra 'Edit' button in 'li'
const form=document.querySelector('form');
const fruit=document.querySelector('.fruits');

form.addEventListener('submit',function(event){
event.preventDefault();
const fruitToAdd=document.getElementById('fruit-to-add');

const newLi=document.createElement('li');
newLi.innerHTML=fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'

fruit.appendChild(newLi)
// console.log(newLi)
})

fruit.addEventListener('click',function(event){
if(event.target.classList.contains('delete-btn')){
  const fruitDelete=event.target.parentElement;
  fruit.removeChild(fruitDelete)
}
})
