function greeter(person: string) {
    return "Hello, " + person;
}

let user = "webpack";
let element = document.createElement('div');

element.innerHTML = greeter(user);

document.body.appendChild(element);
