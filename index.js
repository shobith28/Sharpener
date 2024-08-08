const mainHeading=document.getElementById('main-heading');
mainHeading.textContent='Fruit World'
mainHeading.style.color='orange'

const header=document.getElementById('header');
header.style.backgroundColor='green'
header.style.borderBottom='5px solid orange'

const basketHeading=document.getElementById('basket-heading')
basketHeading.style.color='green'

const thanks=document.getElementById('thanks')
thanks.innerHTML='<P>Please visit us again</P>'

const fruitElements = document.getElementsByClassName('fruit');

for (let i = 0; i < fruitElements.length; i++) {
    fruitElements[i].style.fontWeight = 'bold';
}

fruitElements[2].style.backgroundColor='yellow'