'use strict'

const add = document.querySelector('.add');
const input = document.querySelector('.input')
const content = document.querySelector('.content');

/*
list new items
*/
function onAdd(){

const text = input.value;
if(text ===''){
  input.focus();
  return;
}

const newItem = creatItem(text);
  
content.append(newItem);

newItem.scrollIntoView({behavior:"smooth"});

input.value = "";
input.focus();
}

function creatItem(text){

  const items = document.createElement('li');
  items.setAttribute('class','items'); 
  const item = document.createElement('div');
  item.setAttribute('class','item'); 
  content.appendChild(items);
  items.appendChild(item);
  
  const item__name = document.createElement('span');
  item__name.setAttribute('class','item__name')
  item__name.innerHTML = text;
  item.appendChild(item__name);
  
  const item__remove = document.createElement('div');
  item__remove.setAttribute('class','item__remove');
  item__remove.innerHTML = `
    <i class="fa-solid fa-trash-can"></i>
    `
    item.appendChild(item__remove);
    item__remove.addEventListener('click',()=>{
    content.removeChild(items);
    input.focus();
  });
    return items

};

input.addEventListener("keydown", (event)=> {
    if (event.keyCode === 13) {
        onAdd();
    }
});

add.addEventListener('click',()=>{
  onAdd();
});


