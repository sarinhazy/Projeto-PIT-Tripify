// Suaviza a rolagem ao clicar nos links da navbar
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

 const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");

    const clienteBtn = document.getElementById("clienteBtn");
    const empresaBtn = document.getElementById("empresaBtn");

    loginBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });

    clienteBtn.addEventListener("click", () => {
      window.location.href = "cliente.html";
    });

    empresaBtn.addEventListener("click", () => {
      window.location.href = "empresa.html";
    });