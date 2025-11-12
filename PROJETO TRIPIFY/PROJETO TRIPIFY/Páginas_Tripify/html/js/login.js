document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const nameFromEmail = email.split("@")[0];

  const user = { name: nameFromEmail };
  localStorage.setItem("user", JSON.stringify(user));

  // Redireciona para página do cliente
  window.location.href = "cliente.html";
});
