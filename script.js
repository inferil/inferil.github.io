const year = new Date().getFullYear();
document.getElementById('footer').textContent = year;

const md = document.getElementById('md').textContent;
document.getElementById('conteudo').innerHTML = marked.parse(md);