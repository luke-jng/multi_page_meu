
// Notes: 
// There should be a module for each tab of content. Each module will export a function that creats a div element, adds the appropriate content and styles to that element then appent it to the dom
// The module may be referring to the es6 module, not the module pattern
// In es6 module, the whole file acts as the module/factory pattern, with the functions intended to be used publicly getting exported instead of returned.
// The module pattern in function expression (aka IIFE) becomes unnecessary, but can still be used.
// Normal function expression becomes the preference. 
// The convension is that the file itself becomes the constructor in a sense, with the file name becoming the constructor name. <- this understanding needs to be double checked.
// However, that does not mean we cannot hold factory functions, classes, and object constructors inside the modules files.
// We can still definitley hold them as well as export them from the files. 
// The files just become a more overarching module pattern, so to speak.

// There is a tutorial on this in the es6 modules section of odin project, the setup is exactly like the restuarant page.

//practice from tutorial
// import myName from './myName';

// function component() {
//     const content = document.createElement('div')
//     content.textContent = myName('Cody');
//     return content;
// }

// document.getElementById('content').appendChild(component());

//index.js will run all the functions from the other es6 module files.
import { navBar } from './navBar';
import { homeContentElems, homeTabClick } from './home';
import { drinkTabClick } from './drinksMenu';
import { pastriesTabClick } from './pastriesMenu';
import { contactUsTabClick } from './contactUs';
import { footerElem } from './footer';
import "./style.css";


navBar();
footerElem()
homeContentElems();
homeTabClick();
drinkTabClick();
pastriesTabClick();
contactUsTabClick();