class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <a id="back-to-top" href="#">⬆️</a>

    <footer id="main-footer">
      <h4>Agradecimientos:</h4>
      <p>Profesora Ing. Patricia Marino</p>
      <p>Profesora Ing. Cecilia Takashima</p>
      <br />
      <br />
      <p>Copyright &copy; 2024 Nat Valentine</p>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
