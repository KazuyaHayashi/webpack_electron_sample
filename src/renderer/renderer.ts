import greeter from './greeter';

let user = "webpack";
let element = document.createElement('div');

element.innerHTML = greeter(user);

document.body.appendChild(element);
