

function hola() {
    console.log('aaaa');
    console.log(document.getElementById('usuario'));

}


function verificarUsuario() {
    const usuarioBBDD = 'a';
    const passwordBBDD = 'q';

    var idUsuarioHtml = document.getElementById('usuario');
    var idPasswordHtml = document.getElementById('contrasena');


    var usuario = idUsuarioHtml.value;
    var password = idPasswordHtml.value;

    console.log(usuario);
    console.log(password);


    

    if (usuario == usuarioBBDD && password == passwordBBDD) {
        console.log("es igual");
    }
    else {
        console.log("es distinto");
    }
}

function crearUsuario () {

    var idFirstName = document.getElementById('First-Name');
    var idLastName = document.getElementById('Last-Name');
    var idUsuario = document.getElementById('Id-Usuario');
    var idEmail = document.getElementById('Email');
    var idPassword = document.getElementById('Password');
    var idConfirmPassword = document.getElementById('Confirm-Password');

    var firstName = String(idFirstName.value);
    var lastName = String(idLastName.value);
    var usuario = String(idUsuario.value);
    var email = String(idEmail.value);
    var password = String(idPassword.value);
    var confirmPassword = String(idConfirmPassword.value);

    let encontrarUsuario = false;
    let comprobacionNombre = true;
    let comprobacionApellido = true;
    let comprobacionEmail = true;
    let comprobacionPassword = true;

    // expresion regular: https://aprende-web.net/javascript/js13_3.php

    if (!/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/.test(firstName)) {
        console.log("NO puedes poner ese nombre")
        comprobacionNombre = false;
    }

    if (!/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/.test(lastName)) {
        console.log("NO puedes poner ese apellido");
        comprobacionApellido = false;
    }


    if (encontrarUsuario) {
        console.log("Ya existe este usuario");
        encontrarUsuario = true;
    }


    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        console.log("NO EXISTE ESE CORREO");
        comprobacionEmail = false;
    }


    if (password !== confirmPassword){
        console.log("No hay coincidencia entre las contraseñas");
        comprobacionPassword = false;
    }

   
    if (encontrarUsuario === false && comprobacionNombre === true && comprobacionApellido === true && comprobacionEmail === true && comprobacionPassword === true) {
        window.location.href = "/home/diego/Apuntes de HTML, CSS y Javascript/Trabajo-Fin-Grado-Pagina-Web/Pantalla-Login.html";
    }
    else {
        console.log("Poner los errores, que me da pereza hacerlo");
    }
}

function pantallaOlvidarContrasena() {

}