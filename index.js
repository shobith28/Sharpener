// Write the code as shown in the video below:

const mainHeading=document.querySelector('#main-heading')
mainHeading.style.textAlign='right'

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey'
fruits.style.padding='30px'
fruits.style.margin='30px'
fruits.style.width='70%'
fruits.style.borderRadius='5px'
fruits.style.listStyleType='none';

const fruit=document.querySelectorAll('.fruit')
for(let i=0;i<fruit.length;i++){
  fruit[i].style.padding='10px'
  fruit[i].style.margin='10px'
  fruit[i].style.borderRadius='5px'
  fruit[i].style.backgroundColor='white'
}
// Write answer to the questions asked below:

const basketHeading=document.querySelector('#basket-heading')
basketHeading.style.color='brown';

// const evenFruit=document.querySelectorAll('.fruit:nth-child(even)')
// for(let i=0;i<evenFruit.length;i++){
//   evenFruit[i].style.backgroundColor='brown'
//   evenFruit[i].style.color='White'
// }


const fruitElements = document.getElementsByClassName('fruit')
fruitElements[1].style.backgroundColor='brown'
fruitElements[1].style.color='white'
fruitElements[3].style.backgroundColor='brown'
fruitElements[3].style.color='white'
