import greeter from "./greeter";

const user = "webpack";
const element = document.createElement("div");

element.innerHTML = greeter(user);

document.body.appendChild(element);
