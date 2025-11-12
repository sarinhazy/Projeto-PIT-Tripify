document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const user = { name };
  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "index.html";
});
