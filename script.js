// Seleciona o elemento da barra de navegação
const nav = document.querySelector('nav');

// Seleciona todos os links da barra de navegação
const links = nav.querySelectorAll('a');

// Itera por cada link e adiciona um ouvinte de evento de clique
links.forEach(link => {
  link.addEventListener('click', e => {
    // Previne o comportamento padrão do link, que é abrir a URL do href
    e.preventDefault();

    // Remove a classe 'active' de todos os links
    links.forEach(link => link.classList.remove('active'));

    // Adiciona a classe 'active' ao link clicado
    e.target.classList.add('active');
  });
});

const home = document.getElementById('home');

//home
home.addEventListener('mouseover', function(){
    home.style.transform = 'scale(1.1)';
  })
  
  home.addEventListener('mouseout', function(){
    home.style.transform = 'scale(1)';
  })
//series
  const series = document.getElementById('series');

series.addEventListener('mouseover', function(){
    series.style.transform = 'scale(1.1)';
  })
  
  series.addEventListener('mouseout', function(){
    series.style.transform = 'scale(1)';
  })

  //filmes
  const filmes = document.getElementById('filmes');

filmes.addEventListener('mouseover', function(){
    filmes.style.transform = 'scale(1.1)';
  })
  
  filmes.addEventListener('mouseout', function(){
    filmes.style.transform = 'scale(1)';
  })

  //novidades

const novidades = document.getElementById('novidades');

novidades.addEventListener('mouseover', function(){
    novidades.style.transform = 'scale(1.1)';
  })
  
  novidades.addEventListener('mouseout', function(){
    novidades.style.transform = 'scale(1)';
  })

  //minhalista

  const minhalista = document.getElementById('minhalista');

minhalista.addEventListener('mouseover', function(){
minhalista.style.transform = 'scale(1.1)';
  })
  
minhalista.addEventListener('mouseout', function(){
minhalista.style.transform = 'scale(1)';
  })

  //titulo rgb
  

  
  function mudarCorRGB() {
    setInterval(() => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const rgb = `rgb(${red}, ${green}, ${blue})`;
      const palavra = document.getElementById("palavra");
      palavra.style.color = rgb;
    }, 1000);
    
  }

  mudarCorRGB()

  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    const searchUrl = `http://127.0.0.1:5500/index.html/search?q=${searchTerm}`;
    window.location.href = searchUrl;
  }
});

// Seleciona todos os links do menu
const linksDoMenu = document.querySelectorAll('.nav-link');

// Adiciona um ouvinte de eventos para cada link do menu
linksDoMenu.forEach(link => {
  link.addEventListener('click', event => {
    // Evita que o comportamento padrão do link seja acionado
    event.preventDefault();

    // Obtém o ID da coluna correspondente ao link do menu clicado
    const target = link.getAttribute('href');

    // Usa o método `scrollIntoView()` para rolar suavemente até a coluna correspondente
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

