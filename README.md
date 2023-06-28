# 101
 ## chap01: clicke the box to show coordinates
 
 1. bring up the size whenever it's resized
 used 'addEventListner' object 
![image](https://user-images.githubusercontent.com/110333484/231063807-1c857348-a0fb-4e8e-82bc-a3d8779193bb.png)

2. update the size on loading process
used function 'updateBox' 

- JS and CSS files were not generated since it was a simple practice.

---------

 ## chap02: make the buttons to move the coordinates
 
1. Make the button to move by 100px(Y)
2. Make the button to move to 100px(Y)
3. Make the button to move to the special box

- The scroll APIs were used

=> scrollBy(), scrollTo(), scrollIntoView()

![image](https://github.com/SEONGEUN0415/101/assets/110333484/9934354e-4bcd-4a4a-b1a4-4df15f8aa946)

------ 

 ## chap03: make a target with showing coordinates
 
 ![image](https://github.com/SEONGEUN0415/101/assets/110333484/f8a0637e-7456-455e-b73c-50842a70537e)

 1. Make a structure and design it with HTML and CSS

- transform is used to change the position percisely
- the coordinates were changed from fixed coordinate to responsive one by

```
 coordinates.style.left = `${x}px`;
 coordinates.style.top = `${y}px`;
```

 2. Make a responsible function wih JS
- 'mousemove event' was used

    
