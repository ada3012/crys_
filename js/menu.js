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
          position: relative;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #ecf0f1;
          font-size: 24px;
          padding: 10px 20px;
          cursor: pointer;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Montserrat-Medium";
        }

        .nav-list li {
          margin: 0 15px;
        }

        .nav-list li a {
          text-decoration: none;
          color: #ecf0f1;
          font-size: 16px;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-family: "Montserrat-Medium";
          display: inline-block;
        }

        .nav-list li a:hover {
          background-color: rgb(100, 134, 219);
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 4px 10px rgba(73, 227, 238, 0.4);
        }

        .nav-list li img {
          width: 50px;
          height: auto;
          margin-right: 20px;
        }

        .nav-list li.active a {
          background-color: #3498db;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 10px rgba(52, 152, 219, 0.4);
        }

    @media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-list {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease;
    flex-direction: column;
    background-color: #2c3e50;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 0;
  }

  .nav-list.show {
    max-height: 500px; /* Ajusta según la cantidad de elementos */
    opacity: 1;
    padding: 20px 0;
  }

  .nav-list li {
    margin: 10px 0;
    text-align: center;
  }
    img{
    margin-right: 0px;
    }
}

      </style>

      <slot>
        <menu>
          <button class="menu-toggle" aria-label="Abrir menú">&#9776;</button>
          <ul class="nav-list">
            <li>
              <img src="multimedia/logo_1er.png" class="primer_logo" alt="logo" />
            </li>
            <li><a href="index.html">INICIO</a></li>
            <li><a href="tu_casa.html">TU CASA</a></li>
            <li><a href="ubicacion.html">CAMINO A CASA</a></li>
            <li><a href="servicios.html">PREDICAS</a></li>
            <li><a href="contacto.html">CONTACTO</a></li>
          </ul>
        </menu>
      </slot>
    `;

    this.markActiveLink();
    this.setupToggleMenu();
  }

  markActiveLink() {
    const shadow = this.shadowRoot;
    const currentUrl = new URL(window.location.href);
    const pathname = currentUrl.pathname.split("/").pop();
    const idProyecto = currentUrl.searchParams.get("idproyecto");

    const navLinks = shadow.querySelectorAll("menu ul li a");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href");
      if (linkHref) {
        const linkPath = linkHref.split("/").pop();
        const linkUrl = new URL(linkHref, window.location.origin);
        const linkIdProyecto = linkUrl.searchParams.get("idproyecto");

        if (pathname === linkPath || (idProyecto && idProyecto === linkIdProyecto)) {
          link.parentElement.classList.add("active");
        }
      }
    });
  }

  setupToggleMenu() {
    const shadow = this.shadowRoot;
    const toggleButton = shadow.querySelector('.menu-toggle');
    const navList = shadow.querySelector('.nav-list');

    toggleButton.addEventListener('click', () => {
      navList.classList.toggle('show');
    });

    // Opcional: cerrar el menú al hacer clic en un enlace (móvil)
    const links = shadow.querySelectorAll('.nav-list a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('show');
      });
    });
  }
}

customElements.define('main-menu', Menu);
