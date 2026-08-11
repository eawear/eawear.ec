const telefono = "593996866885";

const productos = [
  {
    nombre: "West Indies",
    color: "Blanco / Verde",
    tipo: "Tropical drop",
    precio: "22,99",
    imagen: "img/west-indies.png"
  },
  {
    nombre: "All For This Glory",
    color: "Vino tinto",
    tipo: "Statement tee",
    precio: "22,99",
    imagen: "img/glory.png"
  },
  {
    nombre: "Love Love Flakk",
    color: "Chocolate",
    tipo: "Street sketch",
    precio: "22,99",
    imagen: "img/flakk.png"
  },
  {
    nombre: "Dark Spirit",
    color: "Negro",
    tipo: "Night edition",
    precio: "22,99",
    imagen: "img/dark-spirit.png"
  },
  {
    nombre: "Kaisen",
    color: "Blanco / Negro",
    tipo: "Japan series",
    precio: "22,99",
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
