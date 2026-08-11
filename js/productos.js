// Número de WhatsApp con código de Ecuador
const telefono = "593996866885";

// Información de las cinco camisas
const productos = [
  {
    nombre: "West Indies",
    color: "Blanco / Verde",
    tipo: "Tropical drop",
    imagen: "img/west-indies.png"
  },
  {
    nombre: "All For This Glory",
    color: "Vino tinto",
    tipo: "Statement tee",
    imagen: "img/glory.png"
  },
  {
    nombre: "Love Love Flakk",
    color: "Chocolate",
    tipo: "Street sketch",
    imagen: "img/flakk.png"
  },
  {
    nombre: "Dark Spirit",
    color: "Negro",
    tipo: "Night edition",
    imagen: "img/dark-spirit.png"
  },
  {
    nombre: "Kaisen",
    color: "Blanco / Negro",
    tipo: "Japan series",
    imagen: "img/kaisen.png"
  }
];

// Contenedor donde aparecerán los productos
const lista = document.getElementById("listaProductos");

// Generar cada tarjeta de producto
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

      <div>

        <span class="tipo">
          ${producto.tipo}
        </span>

        <h3>
          ${producto.nombre}
        </h3>

        <span class="color">
          ${producto.color} · Corte oversize
        </span>

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

  // Selector de talla
  const selector = tarjeta.querySelector("select");

  // Botón de compra
  const botonComprar = tarjeta.querySelector(".comprar");

  botonComprar.addEventListener("click", () => {
    const talla = selector.value;

    const mensaje =
      `Hola EAWEAR.EC, quiero comprar la camisa oversize ` +
      `${producto.nombre} en talla ${talla}. ¿Está disponible?`;

    const enlaceWhatsApp =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlaceWhatsApp, "_blank");
  });

  lista.appendChild(tarjeta);
});
