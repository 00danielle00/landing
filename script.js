// 1. Sombra en la barra de navegación al hacer scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navbar.classList.add("con-sombra");
  } else {
    navbar.classList.remove("con-sombra");
  }
});

// 2. Cerrar el menú en móvil al pulsar un enlace
const enlaces = document.querySelectorAll(".navbar-nav .nav-link, .btn-contacto");
const menu = document.getElementById("menu");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});

// 3. Validación del formulario de contacto
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const campos = formulario.querySelectorAll(".form-control");
  let todoCorrecto = true;

  campos.forEach(function (campo) {
    if (campo.checkValidity()) {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
    } else {
      campo.classList.remove("is-valid");
      campo.classList.add("is-invalid");
      todoCorrecto = false;
    }
  });

  if (!todoCorrecto) {
    respuesta.classList.add("d-none");
    return;
  }

  // Abre el correo del usuario con el mensaje ya escrito.
  // Cambia el email por el tuyo.
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const asunto = encodeURIComponent("Contacto desde tu portfolio: " + nombre);
  const cuerpo = encodeURIComponent(mensaje + "\n\nMi correo: " + email);
  window.location.href = "mailto:danielleludovicoo@gmail.com?subject=" + asunto + "&body=" + cuerpo;

  respuesta.classList.remove("d-none");
  formulario.reset();
  campos.forEach(function (campo) {
    campo.classList.remove("is-valid");
  });
});

// 4. Año actual en el footer
document.getElementById("anio").textContent = new Date().getFullYear();
