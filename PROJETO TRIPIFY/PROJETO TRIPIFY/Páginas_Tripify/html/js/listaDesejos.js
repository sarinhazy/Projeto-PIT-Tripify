document.addEventListener("DOMContentLoaded", () => {
  const listaContainer = document.getElementById("listaContainer");
  let lista = JSON.parse(localStorage.getItem("listaDesejos")) || [];

  function renderLista() {
    listaContainer.innerHTML = "";

    if (lista.length === 0) {
      listaContainer.innerHTML = `<p class="empty">Você ainda não adicionou viagens aos seus desejos 💙</p>`;
      return;
    }

    lista.forEach((viagem, index) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${viagem.img}" alt="${viagem.nome}">
        <div class="card-content">
          <h3>${viagem.nome}</h3>
          <div class="rating">⭐ ${viagem.avaliacao}</div>
          <p>${viagem.descricao || "Descrição não disponível."}</p>
          <div class="card-buttons">
             <a href="reservar.html" class="btn-reservar">✈️ Reservar</a>
            <button class="remover-btn" data-index="${index}">🗑️ Remover</button>
          </div>
        </div>
      `;

      listaContainer.appendChild(card);
    });

    document.querySelectorAll(".remover-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = e.target.dataset.index;
        removerDesejo(index);
      });
    });
  }

  function removerDesejo(index) {
    const viagem = lista[index];
    if (confirm(`Deseja remover "${viagem.nome}" da sua lista de desejos?`)) {
      lista.splice(index, 1);
      localStorage.setItem("listaDesejos", JSON.stringify(lista));
      renderLista();
    }
  }

  renderLista();
});
