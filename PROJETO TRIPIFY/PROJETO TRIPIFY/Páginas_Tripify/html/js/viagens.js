// ==== LISTA DE VIAGENS ====
const viagens = [
  { id: 1, nome: "Rio de Janeiro, Brasil", img: "https://images.mnstatic.com/08/7d/087dfd415e06b0651f4528fea6642818.jpg", avaliacao: 4.8, cidade: "Rio de Janeiro", preco: 2500, duracao: 7, descricao: "Praias icônicas e vida vibrante à beira-mar." },
  { id: 2, nome: "Paris, França", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", avaliacao: 4.9, cidade: "Paris", preco: 5600, duracao: 10, descricao: "Cidade luz e capital do romance." },
  { id: 3, nome: "Tóquio, Japão", img: "https://t4.ftcdn.net/jpg/02/51/12/11/360_F_251121174_5xQyUCqSrkswyLHbM9Ne8DQ8Qb0o1HGw.jpg", avaliacao: 4.7, cidade: "Tokyo", preco: 7200, duracao: 12, descricao: "Modernidade e tradição em perfeita harmonia." },
  { id: 4, nome: "Nova York, EUA", img: "https://cdn2.civitatis.com/estados-unidos/nueva-york/galeria/nova-york-guia", avaliacao: 4.6, cidade: "New York", preco: 5800, duracao: 8, descricao: "A cidade que nunca dorme — cultura e energia sem fim." },
  { id: 5, nome: "Florença, Itália", img: "https://www.viajaquepassa.com.br/wp-content/uploads/cupula-duomo-floreca.jpg", avaliacao: 4.8, cidade: "Florence", preco: 4900, duracao: 9, descricao: "Berço do Renascimento e charme histórico." }
];

const API_KEY = "25f3f18472d9c74677f8e4b5fc74ae35"; // 🔑 Chave da OpenWeather
const container = document.getElementById('viagensContainer');

// ==== RENDERIZA OS CARDS ===
viagens.forEach(v => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${v.img}" alt="${v.nome}">
    <div class="card-content">
      <h3>${v.nome}</h3>
      <div class="rating">⭐ ${v.avaliacao}</div>
      <div class="temp" id="temp-${v.cidade.replace(/\s+/g, '')}">Carregando clima...</div>
      <p class="desc">${v.descricao}</p>
      <div class="acoes">
        <button class="reservar-btn" data-id="${v.id}">✈️ Reservar</button>
        <button class="wishlist-btn" onclick="adicionarDesejo('${v.nome}', '${v.img}', ${v.avaliacao})">❤️ Desejos</button>
      </div>
    </div>
  `;
  container.appendChild(card);

  // === Busca temperatura atual ===
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${v.cidade}&appid=${API_KEY}&units=metric&lang=pt_br`)
    .then(res => res.json())
    .then(data => {
      document.getElementById(`temp-${v.cidade.replace(/\s+/g, '')}`).textContent =
        `🌤️ ${data.main.temp.toFixed(1)}°C — ${data.weather[0].description}`;
    })
    .catch(() => {
      document.getElementById(`temp-${v.cidade.replace(/\s+/g, '')}`).textContent = "Clima indisponível";
    });
});

// ==== Função para adicionar à lista de desejos ====
function adicionarDesejo(nome, img, avaliacao) {
  let lista = JSON.parse(localStorage.getItem('listaDesejos')) || [];
  const existe = lista.find(v => v.nome === nome);
  if (!existe) {
    lista.push({ nome, img, avaliacao });
    localStorage.setItem('listaDesejos', JSON.stringify(lista));
    alert(`${nome} foi adicionado à sua lista de desejos! ❤️`);
  } else {
    alert(`${nome} já está na sua lista.`);
  }
}

// ==== Clique do botão "Reservar" ====
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("reservar-btn")) {
    const id = e.target.dataset.id;
    const destino = viagens.find(v => v.id == id);
    localStorage.setItem("destinoSelecionado", JSON.stringify(destino));
    window.location.href = "reservar.html";
  }
});
