'use strict'

const add = document.querySelector('.add');
const input = document.querySelector('.text')
const items = document.querySelector('.items');


//버튼누르면 value 값 붙이기
add.addEventListener('click',()=>{
      on();
      
    })

function on(){
    
    // create a div element(item)
    const item = document.createElement("div");
    item.setAttribute('class','item');

    // add the item div on the items div
    items.appendChild(item);

    // add the text node to the item div
    const inputValue = document.createTextNode(`${input.value}`);
    item.appendChild(inputValue);

    //create a trashcan
    const trashCan = document.createElement('div');
    trashCan.setAttribute('class','trashCan');
    trashCan.innerHTML = `
    <i class="fa-solid fa-trash-can"></i>
    `
    // add the trashcan icon to the item div
    item.appendChild(trashCan);

}


