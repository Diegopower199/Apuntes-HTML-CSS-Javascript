

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

    const encontrarUsuario = false;

    if (encontrarUsuario) {
        console.log("Ya existe este usuario")
    }


    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        console.log("NO EXISTE ESE CORREO")
    }

    else {

    }

    if (password !== confirmPassword){
        console.log("No hay coincidencia entre las contraseñas")
    }


    window.location.href = "/home/diego/Apuntes de HTML, CSS y Javascript/Trabajo-Fin-Grado-Pagina-Web/Pantalla-Login.html";
}

function pantallaOlvidarContrasena() {

}