class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="main-header">
      <div class="container">
        <h1>Introducción a la Industria Textil</h1>
      </div>
    </header>

    <nav id="navbar">
      <div class="container">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="fibras-textiles.html">Fibras Textiles</a></li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define("header-component", Header);
