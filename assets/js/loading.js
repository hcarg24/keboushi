'use strict'

{
  const spinner = document.getElementById('loading');

  window.addEventListener('load', ()=> {
    spinner.classList.add('loaded');
  });
}