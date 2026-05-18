const footer = document.getElementById('footer');

const year = document.createElement('span');
year.textContent = new Date().getFullYear();

const quote = document.createElement('span');
quote.textContent = ' • O que sobrou de nós?';
quote.classList.add('quote');

footer.appendChild(year);
footer.appendChild(quote);

const md = document.getElementById('md').textContent;
document.getElementById('conteudo').innerHTML = marked.parse(md);