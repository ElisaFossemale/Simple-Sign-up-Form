


//  Tomar el botón de registro y agregando un evento  clic
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function() {
    
    // Cargando los valores del formulario
    const userName = document.getElementById("userName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validaciones 
    if (userName=== "" || lastName === "" || email === "" || password != 123) {
        Swal.fire('¡Pass incorrecto!');
    } 
    else { 
        window.location.href= "https://www.frontendmentor.io/pro#pricing";


        localStorage.setItem('userName', userName);
        localStorage.setItem('lastName',lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('password',password);

    }
}); 
   




