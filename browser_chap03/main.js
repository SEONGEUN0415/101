const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width/2;
const targetHalfHeight = targetRect.height/2;

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    
    
    vertical.style.transform = `translate(${x}px, 0)`;
    horizontal.style.transform = `translate(0, ${y}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    coordinates.style.transform = `translate(${x}px, ${y}px)`;
    coordinates.innerHTML = `${x}px, ${y}px`;
});

