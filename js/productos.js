const telefono = "593996866885";

/* PRECIOS SEGÚN LA TALLA */

const preciosPorTalla = {
  S: "16,99",
  M: "22,99",
  L: "24,99"
};

/* PRODUCTOS */

const productos = [
  {
    nombre: "West Indies",
    color: "Blanco / Verde",
    tipo: "Tropical drop",
    significado:
      "Disfruta cada momento con libertad y tranquilidad. Permítete hacer una pausa, sentir la esencia del Caribe y recordar que la vida también está hecha para disfrutarla.",
    imagen: "img/west-indies.png"
  },
  {
    nombre: "All For This Glory",
    color: "Vino tinto",
    tipo: "EAWEAR collection",
    significado:
      "Todo tu esfuerzo tendrá una recompensa. Sigue luchando por tus sueños, confía en tu proceso y nunca te rindas, porque la gloria también puede ser tuya.",
    imagen: "img/glory.png"
  },
  {
    nombre: "Love Love Love Flakk",
    color: "Chocolate",
    tipo: "EAWEAR collection",
    significado:
      "Ama intensamente, vive con libertad y expresa lo que sientes sin miedo. Tu autenticidad es parte de lo que te hace diferente y especial.",
    imagen: "img/flakk.png"
  },
  {
    nombre: "Dream Beyond Fear",
    color: "Negro",
    tipo: "Japan series",
    significado:
      "Haz que tus sueños sean más grandes que tus miedos. Atrévete a avanzar, confía en tus capacidades y no permitas que el temor limite todo lo que puedes alcanzar.",
    imagen: "img/dark-spirit.png"
  },
  {
    nombre: "Kaisen",
    color: "Blanco / Negro",
    tipo: "Japan series",
    significado:
      "No necesitas cambiarlo todo de inmediato. Avanza un poco cada día, aprende de cada experiencia y confía en que tu constancia te acercará a tu mejor versión.",
    imagen: "img/kaisen.png"
  }
];

/* CONTENEDOR DEL CATÁLOGO */

const lista = document.getElementById("listaProductos");

/* CREAR TARJETAS */

productos.forEach((producto) => {
  const tarjeta = document.createElement("article");

  tarjeta.className = "producto";

  /* La talla M aparece seleccionada inicialmente */

  const tallaInicial = "S";
  const precioInicial = preciosPorTalla[tallaInicial];

  tarjeta.innerHTML = `
    <div class="foto">

      <img
        src="${producto.imagen}"
        alt="Camiseta oversize ${producto.nombre}"
        loading="lazy"
      >

    </div>

    <div class="datos">

      <div class="informacion-producto">

        <span class="tipo">
          ${producto.tipo}
        </span>

        <h3>
          ${producto.nombre}
        </h3>

        <span class="color">
          ${producto.color} · Corte oversize
        </span>

        <p class="precio">
          $<span class="valor-precio">${precioInicial}</span>
        </p>

        <div class="significado">

          <p>
            ${producto.significado}
          </p>

        </div>

      </div>

      <div class="compra">

        <label>
          SELECCIONA TU TALLA

<select aria-label="Talla para ${producto.nombre}">

  <option value="S" selected>
    Talla S
  </option>

  <option value="M">
    Talla M
  </option>

  <option value="L">
    Talla L
  </option>

</select>

        </label>

        <button class="comprar">
          PEDIR POR WHATSAPP
        </button>

      </div>

    </div>
  `;

  const selector = tarjeta.querySelector("select");
  const precioVisible = tarjeta.querySelector(".valor-precio");
  const botonComprar = tarjeta.querySelector(".comprar");

  /* CAMBIAR PRECIO CUANDO CAMBIA LA TALLA */

  selector.addEventListener("change", () => {
    const tallaSeleccionada = selector.value;
    const nuevoPrecio = preciosPorTalla[tallaSeleccionada];

    precioVisible.textContent = nuevoPrecio;
  });

  /* ENVIAR PRODUCTO, TALLA Y PRECIO A WHATSAPP */

  botonComprar.addEventListener("click", () => {
    const tallaSeleccionada = selector.value;
    const precioSeleccionado = preciosPorTalla[tallaSeleccionada];

    const mensaje =
      `Hola EAWEAR.EC, quiero comprar la camiseta oversize ` +
      `${producto.nombre}, talla ${tallaSeleccionada}, ` +
      `por $${precioSeleccionado}. ¿Está disponible?`;

    const enlaceWhatsApp =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlaceWhatsApp, "_blank");
  });

  lista.appendChild(tarjeta);
});

/* ==========================================
   GUÍA GENERAL DE TALLAS
========================================== */

const botonAbrirGuia =
  document.getElementById("abrirGuia");

const botonCerrarGuia =
  document.getElementById("cerrarGuia");

const fondoModal =
  document.getElementById("fondoModal");

const modalTallas =
  document.getElementById("modalTallas");

function abrirGuiaTallas() {
  modalTallas.hidden = false;
  document.body.classList.add("modal-abierto");
  botonCerrarGuia.focus();
}

function cerrarGuiaTallas() {
  modalTallas.hidden = true;
  document.body.classList.remove("modal-abierto");
  botonAbrirGuia.focus();
}

botonAbrirGuia.addEventListener(
  "click",
  abrirGuiaTallas
);

botonCerrarGuia.addEventListener(
  "click",
  cerrarGuiaTallas
);

fondoModal.addEventListener(
  "click",
  cerrarGuiaTallas
);

document.addEventListener("keydown", (evento) => {
  if (
    evento.key === "Escape" &&
    !modalTallas.hidden
  ) {
    cerrarGuiaTallas();
  }
});
