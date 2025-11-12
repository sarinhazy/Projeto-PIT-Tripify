document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const tabela = document.querySelector("table tbody");

  criarToastContainer();
  carregarPacotes();

  // Função para exibir mensagens animadas (toasts)
  function mostrarToast(mensagem, tipo = "info") {
    const container = document.querySelector(".toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${tipo}`;
    toast.innerText = mensagem;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function criarToastContainer() {
    const container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.querySelector("input[placeholder='Nome do Pacote']").value.trim();
    const destino = form.querySelector("input[placeholder='Destino']").value.trim();
    const preco = form.querySelector("input[placeholder='Preço (R$)']").value.trim();
    const vagas = form.querySelector("input[placeholder='Vagas disponíveis']").value.trim();
    const descricao = form.querySelector("textarea").value.trim();

    if (!nome || !destino || !preco || !vagas) {
      mostrarToast("⚠️ Preencha todos os campos obrigatórios!", "erro");
      return;
    }

    const novoPacote = {
      id: Date.now(),
      nome,
      destino,
      preco: parseFloat(preco).toFixed(2),
      vagas: parseInt(vagas),
      descricao,
    };

    const pacotes = JSON.parse(localStorage.getItem("pacotesTripify")) || [];
    pacotes.push(novoPacote);
    localStorage.setItem("pacotesTripify", JSON.stringify(pacotes));

    form.reset();
    carregarPacotes();
    mostrarToast("✅ Pacote cadastrado com sucesso!", "sucesso");
  });

  function carregarPacotes() {
    tabela.innerHTML = "";
    const pacotes = JSON.parse(localStorage.getItem("pacotesTripify")) || [];

    if (pacotes.length === 0) {
      tabela.innerHTML = `<tr><td colspan="5">Nenhum pacote cadastrado ainda.</td></tr>`;
      return;
    }

    pacotes.forEach((pacote) => {
      const linha = document.createElement("tr");
      linha.classList.add("linha-animada");
      linha.innerHTML = `
        <td>${pacote.nome}</td>
        <td>${pacote.destino}</td>
        <td>R$ ${pacote.preco}</td>
        <td>${pacote.vagas}</td>
        <td>
          <button class="editar">Editar</button>
          <button class="excluir">Excluir</button>
        </td>
      `;

      linha.querySelector(".excluir").addEventListener("click", () => {
        if (confirm(`Deseja excluir o pacote "${pacote.nome}"?`)) {
          excluirPacote(pacote.id);
          mostrarToast("🗑️ Pacote excluído com sucesso!", "info");
        }
      });

      linha.querySelector(".editar").addEventListener("click", () => {
        editarPacote(pacote);
        mostrarToast("✏️ Pacote pronto para edição.", "info");
      });

      tabela.appendChild(linha);
    });
  }

  function excluirPacote(id) {
    let pacotes = JSON.parse(localStorage.getItem("pacotesTripify")) || [];
    pacotes = pacotes.filter((p) => p.id !== id);
    localStorage.setItem("pacotesTripify", JSON.stringify(pacotes));
    carregarPacotes();
  }

  function editarPacote(pacote) {
    const nomeInput = form.querySelector("input[placeholder='Nome do Pacote']");
    const destinoInput = form.querySelector("input[placeholder='Destino']");
    const precoInput = form.querySelector("input[placeholder='Preço (R$)']");
    const vagasInput = form.querySelector("input[placeholder='Vagas disponíveis']");
    const descricaoInput = form.querySelector("textarea");

    nomeInput.value = pacote.nome;
    destinoInput.value = pacote.destino;
    precoInput.value = pacote.preco;
    vagasInput.value = pacote.vagas;
    descricaoInput.value = pacote.descricao;

    excluirPacote(pacote.id);
  }
});
