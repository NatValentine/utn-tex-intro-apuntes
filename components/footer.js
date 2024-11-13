class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <a id="back-to-top" href="#">⬆️</a>

    <footer id="main-footer">
      <p>Copyright &copy; 2024 Nat Valentine</p>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
