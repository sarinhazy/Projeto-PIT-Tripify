// Verifica se há usuário logado
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loginBtn = document.getElementById("loginBtn");
  const userName = document.getElementById("userName");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    loginBtn.style.display = "none";
    userName.textContent = `${user.name} (Empresa)`;
    logoutBtn.style.display = "inline-block";
  } else {
    loginBtn.style.display = "inline-block";
    userName.textContent = "";
    logoutBtn.style.display = "none";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    location.reload();
  });
});
