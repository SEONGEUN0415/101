# 101
 ## chap01: clicke the box to show coordinates
 
1. bring up the size whenever it's resized
 used 'addEventListner' object
<img src="https://user-images.githubusercontent.com/110333484/231063807-1c857348-a0fb-4e8e-82bc-a3d8779193bb.png" width="600" hight="400"> 

3. update the size on loading process
used function 'updateBox' 

- JS and CSS files were not generated since it was a simple practice.

---------

 ## chap02: make the buttons to move the coordinates
 
1. Make the button to move by 100px(Y)
2. Make the button to move to 100px(Y)
3. Make the button to move to the special box

- The scroll APIs have been used

=> scrollBy(), scrollTo(), scrollIntoView()

<img src="https://github.com/SEONGEUN0415/101/assets/110333484/9934354e-4bcd-4a4a-b1a4-4df15f8aa946" width="600" height="400"/>

------ 

 ## chap03: make a target with showing coordinates
 <img src="https://github.com/SEONGEUN0415/101/assets/110333484/f8a0637e-7456-455e-b73c-50842a70537e.png" width="600" height="400"/>

 1. Make a structure and design it with HTML and CSS

- transform is used to change the position percisely
- the coordinates were changed from fixed coordinate to responsive one by

```
 coordinates.style.left = `${x}px`;
 coordinates.style.top = `${y}px`;
```

 2. Make a responsible function wih JS
- 'mousemove event' has been used

 3. Improve rendering
- Transform has been used instead of setting top and left

    <img src = "https://github.com/SEONGEUN0415/101/assets/110333484/a814779c-c463-4bb9-b945-df2147d899fc.png" width="600" height="400"/>
```
    vertical.style.transform = `translate(${x}px, 0)`;
    horizontal.style.transform = `translate(0, ${y}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    coordinates.style.transform = `translate(${x}px, ${y}px)`;
```
------

 ## chap04: find a rabbit by using button

 CSS, JS file was not generated apart.
 
 1. arrange items
- 'flex' has been used for css
  
 2. 'onclick'method has been used on button that moves browser to Rabbit and the top
- 'scrollIntoView', 'scrollTo' APIs 

<img src="https://github.com/SEONGEUN0415/101/assets/110333484/e2f51785-d724-47fd-9224-a6c05f1f6bf3.png" width="400" height="300"/>
<img src="https://github.com/SEONGEUN0415/101/assets/110333484/270099a0-7785-4a38-b12f-69af6a75e17e.png" width="400 height="200"/>

### The differenc between onclick and addEvenListenr?
addEventListener does not work in the older versions of some browsers, meanwhile, onclick is compatible with all browsers.
addEvenListener function can attach multiple events to a particular element while onclick function can attach only one event.
addEventListener cannot link HTML and JavaScript files.

    
