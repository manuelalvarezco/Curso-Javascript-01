function capturar() {
    // console.log('capturado');

    function Persona(name, phone, age, email) {
        this.name = name;
        this.phone = phone;
        this.age = age;
        this.email = email;
    }

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;

    newPerona = new Persona(name, phone, age, email);

    // console.log(newPerona);

    agregar();
}

let data = [];

function agregar() {
    data.push(newPerona);
    console.log(data);
}