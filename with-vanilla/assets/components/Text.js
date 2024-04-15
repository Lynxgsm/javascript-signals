const template = document.createElement('template');

template.innerHTML = `
<style>
p{
    padding: 16px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
}
</style>
    <p><slot/></p>
`;

class Text extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-text', Text);

export default Text;
