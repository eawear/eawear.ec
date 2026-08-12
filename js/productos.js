const telefono = "593996866885";

const productos = [
  {
    nombre: "West Indies",
    color: "Blanco / Verde",
    tipo: "Tropical drop",
    precio: "22,99",
    significado:
      "Disfruta cada momento con libertad y tranquilidad. Permítete hacer una pausa, sentir la esencia del Caribe y recordar que la vida también está hecha para disfrutarla.",
    imagen: "img/west-indies.png"
  },
  {
    nombre: "All For This Glory",
    color: "Vino tinto",
    tipo: "Statement tee",
    precio: "22,99",
    significado:
      "Todo tu esfuerzo tendrá una recompensa. Sigue luchando por tus sueños, confía en tu proceso y nunca te rindas, porque la gloria también puede ser tuya.",
    imagen: "img/glory.png"
  },
  {
    nombre: "Love Love Love Flakk",
    color: "Chocolate",
    tipo: "Street sketch",
    precio: "22,99",
    significado:
      "Ama intensamente, vive con libertad y expresa lo que sientes sin miedo. Tu autenticidad es parte de lo que te hace diferente y especial.",
    imagen: "img/flakk.png"
  },
  {
    nombre: "Dream Beyond Fear",
    color: "Negro",
    tipo: "Japan series",
    precio: "22,99",
    significado:
      "Haz que tus sueños sean más grandes que tus miedos. Atrévete a avanzar, confía en tus capacidades y no permitas que el temor limite todo lo que puedes alcanzar.",
    imagen: "img/dark-spirit.png"
  },
  {
    nombre: "Kaisen",
    color: "Blanco / Negro",
    tipo: "Japan series",
    precio: "22,99",
    significado:
      "No necesitas cambiarlo todo de inmediato. Avanza un poco cada día, aprende de cada experiencia y confía en que tu constancia te acercará a tu mejor versión.",
    imagen: "img/kaisen.png"
  }
];

const lista = document.getElementById("listaProductos");

productos.forEach((producto, indice) => {
  const tarjeta = document.createElement("article");

  tarjeta.className = "producto";

  tarjeta.innerHTML = `
    <div class="foto">

      <span class="numero">
        0${indice + 1}
      </span>

      <img
        src="${producto.imagen}"
        alt="Camisa oversize ${producto.nombre}"
      >

    </div>

    <div class="datos">

      <div class="informacion-producto">

        <span class="tipo">
          ${producto.tipo}
        </span>

        <h3>${producto.nombre}</h3>

        <span class="color">
          ${producto.color} · Corte oversize
        </span>

        <p class="precio">
          $${producto.precio}
        </p>

        <div class="significado">


          <p>
            ${producto.significado}
          </p>

        </div>

      </div>

      <div class="compra">

        <label>
          Talla

          <select aria-label="Talla para ${producto.nombre}">
            <option value="S">S</option>
            <option value="M" selected>M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

        </label>

        <button class="comprar">
          Pedir por WhatsApp ↗
        </button>

      </div>

    </div>
  `;

  const selector = tarjeta.querySelector("select");
  const botonComprar = tarjeta.querySelector(".comprar");

  botonComprar.addEventListener("click", () => {
    const talla = selector.value;

    const mensaje =
      `Hola EAWEAR.EC, quiero comprar la camisa oversize ` +
      `${producto.nombre}, talla ${talla}, por $${producto.precio}. ` +
      `¿Está disponible?`;

    const enlaceWhatsApp =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlaceWhatsApp, "_blank");
  });

  lista.appendChild(tarjeta);
});
