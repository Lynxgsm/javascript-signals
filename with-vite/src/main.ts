import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import signal from './signals.ts';

const c = signal(0);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + Signals</h1>
    <div class="card">
      <button id="counter" type="button">${c.value}</button>
    </div>
    <p class="message">
      
    </p>
  </div>
`;

const button = document.querySelector('#counter');
const message = document.querySelector('.message');

if (button && message) {
  c.subscribe((value) => {
    button.textContent = '' + value;
    if (value % 10 === 0) {
      message.textContent = 'Le compte a passé la barre des ' + c.value;
    }
  });

  button.addEventListener('click', () => {
    setInterval(() => {
      c.value = c.value + 1;
    }, 20);
  });
}
