class Menu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
      @import url("../css/fonts.css");
menu {
    background-color: #2c3e50;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
}

menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:"Montserrat-Medium";
}

menu ul li {
    margin: 0 15px;
}

menu ul li a {
    text-decoration: none;
    color: #ecf0f1;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 25px;
    transition: all 0.3s ease;
    align-items:center;
    font-family:"Montserrat-Medium";
}

menu ul li a:hover {
    background-color:rgb(100, 134, 219);
    color: #fff;
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(73, 227, 238, 0.4);
}

menu ul li img {
    width: 50px;
    height: auto;
    margin-right: 20px;
    font-family:"Montserrat-Medium";
}

      </style>
      <slot>
          <menu>
        <ul>
          <li>
            <img src="multimedia/logo_1er.png" class="primer_logo" alt="logo" />
          </li>
          <li><a href="index.html">INICIO</a></li>
          <li><a href="tu_casa.html">TU CASA</a></li>
          <li><a href="servicios.html">CAMINO A CASA</a></li>
          <li><a href="contacto.html">MIS PRIMEROS PASOS</a></li>
          <li><a href="servicios.html">PREDICAS</a></li>
          <li><a href="contacto.html">CONTACTO</a></li>
        </ul>
      </menu>
      </slot>
    `;
  }
}

customElements.define('main-menu', Menu);
