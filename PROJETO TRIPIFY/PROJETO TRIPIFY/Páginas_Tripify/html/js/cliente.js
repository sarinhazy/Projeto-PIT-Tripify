document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const reservasList = document.getElementById("reservasList");
  const wishlist = document.getElementById("wishlist");
  const userWelcome = document.getElementById("userWelcome");
  const logoutBtn = document.getElementById("logoutBtn");

  // Se o usuário não estiver logado
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  userWelcome.textContent = user.name;
  document.getElementById("userName").textContent = `${user.name} (Cliente)`;

  // Carregar dados do localStorage
  let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  let desejos = JSON.parse(localStorage.getItem("desejos")) || [];

  function renderLists() {
    reservasList.innerHTML = "";
    wishlist.innerHTML = "";

    // Viagens marcadas
    if (reservas.length === 0) {
      document.getElementById("noReservas").style.display = "block";
    } else {
      document.getElementById("noReservas").style.display = "none";
      reservas.forEach((trip, index) => {
        const card = document.createElement("div");
        card.classList.add("trip-card");
        card.innerHTML = `
          <img src="${trip.img}" alt="${trip.nome}">
          <h4>${trip.nome}</h4>
          <p>${trip.descricao}</p>
          <button class="cancel-btn" data-index="${index}">Cancelar</button>
        `;
        reservasList.appendChild(card);
      });
    }

    // Lista de desejos
    if (desejos.length === 0) {
      document.getElementById("noDesejos").style.display = "block";
    } else {
      document.getElementById("noDesejos").style.display = "none";
      desejos.forEach((trip, index) => {
        const card = document.createElement("div");
        card.classList.add("trip-card");
        card.innerHTML = `
          <img src="${trip.img}" alt="${trip.nome}">
          <h4>${trip.nome}</h4>
          <p>${trip.descricao}</p>
          <button class="wish-btn" data-index="${index}">Remover</button>
        `;
        wishlist.appendChild(card);
      });
    }

    // Cancelar reserva
    document.querySelectorAll(".cancel-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const i = e.target.dataset.index;
        reservas.splice(i, 1);
        localStorage.setItem("reservas", JSON.stringify(reservas));
        renderLists();
      });
    });

    // Remover da lista de desejos
    document.querySelectorAll(".wish-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const i = e.target.dataset.index;
        desejos.splice(i, 1);
        localStorage.setItem("desejos", JSON.stringify(desejos));
        renderLists();
      });
    });
  }

  renderLists();

  // Logout
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
});
