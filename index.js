// Write your code below:
const h3=document.createElement('h3')
const p=document.createElement('p')

const h3Text=document.createTextNode('Buy high quality organic fruits online')
const pText=document.createTextNode('Total fruits: 4')

h3.appendChild(h3Text)
p.appendChild(pText)

const div=document.getElementsByTagName('div')
div[0].appendChild(h3)

const fruit=document.querySelector('.fruits')
div[1].insertBefore(p,fruit)

p.id='fruits-total'
h3.style.fontStyle='italic'
// console.log(p)