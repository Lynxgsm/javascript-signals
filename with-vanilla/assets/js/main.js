import { getJokes } from './get.js';
import { c, isLoading, jokeResponse } from './store.js';
import { button, historyButton, joke, message, spinner } from './selectors.js';
import { url } from './constants.js';

document.addEventListener('DOMContentLoaded', async () => {
  isLoading.value = !isLoading.value;
  const response = await getJokes(url);
  let actualJoke = '';

  if (response.error) {
    actualJoke = response.message;
  }

  actualJoke = response.joke
    ? response.joke
    : response.setup + '\n' + response.delivery;

  jokeResponse.value = actualJoke;
  isLoading.value = !isLoading.value;
});

if (button && message) {
  c.subscribe((value) => {
    button.textContent = '' + value;
    if (value % 10 === 0) {
      message.textContent = c.value;
    }
  });
}

jokeResponse.subscribe((value) => {
  joke.textContent = value;
});

isLoading.subscribe((value) => {
  spinner.style.display = value ? 'block' : 'none';
});

historyButton.addEventListener('click', () => {
  window.location.pathname = '/with-vanilla/history.html';
});

button.addEventListener('click', () => {
  setInterval(() => {
    c.value = c.value + 1;
  }, 20);
});
