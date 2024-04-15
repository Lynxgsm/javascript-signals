const template = document.createElement('template');
const active = window.location.pathname;

template.innerHTML = `
<style>
nav{
    display: flex;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
}
    a{
        text-decoration: none;
        color: #333;
    }

    a:hover{
        text-decoration: underline;
    }

    a.active{
        font-weight: bold;
    }
</style>
    <nav>
        <a href="/with-vanilla/" class="${
          active === '/with-vanilla/' && 'active'
        }">Home</a>
        <a href="/with-vanilla/history.html" class="${
          active === '/with-vanilla/history.html' && 'active'
        }">History</a>
    </nav>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-navbar', Navbar);

export default Navbar;
