// ======= NAVBAR RESPONSIVO =======
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) this.addClickEvent();
    return this;
  }
}

new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li").init();


// ======= USUÁRIOS =======
document.addEventListener('DOMContentLoaded', function () {
  const formUsuario = document.getElementById('formUsuario');
  const btnUsuario = document.getElementById('btnMostrarForm');

  if (formUsuario && btnUsuario) {
    btnUsuario.addEventListener('click', function () {
      formUsuario.style.display = formUsuario.style.display === 'none' || formUsuario.style.display === '' ? 'block' : 'none';
    });

    formUsuario.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const tipo = document.getElementById('tipo').value;

      const novaLinha = `<tr>
          <td>${nome}</td>
          <td>${email}</td>
          <td>${tipo}</td>
          <td class="actions">
            <button onclick="abrirModal('${nome}', '${email}', '${tipo}')">Editar</button>
            <button>Excluir</button>
          </td>
        </tr>`;

      document.getElementById('tabelaUsuarios').innerHTML += novaLinha;
      formUsuario.reset();
    });
  }
});

function abrirModal(nome, email, tipo) {
  const modal = document.getElementById('modalEdicao');
  if (!modal) return;
  document.getElementById('editNome').value = nome;
  document.getElementById('editEmail').value = email;
  document.getElementById('editTipo').value = tipo;
  modal.style.display = 'flex';
}

function fecharModal() {
  const modal = document.getElementById('modalEdicao');
  if (modal) modal.style.display = 'none';
}


// ======= EVENTOS =======
document.addEventListener('DOMContentLoaded', function () {
  const formEvento = document.getElementById('formEvento');
  const btnEvento = document.getElementById('btnMostrarForm');
  const imagemInput = document.getElementById('imagem');
  const preview = document.getElementById('preview');

  if (btnEvento && formEvento) {
    btnEvento.addEventListener('click', function () {
      formEvento.style.display = formEvento.style.display === 'none' || formEvento.style.display === '' ? 'block' : 'none';
    });

    formEvento.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const data = document.getElementById('data').value;
      const local = document.getElementById('local').value;
      const status = document.getElementById('status').value;

      const novaLinha = `<tr>
          <td>${nome}</td>
          <td>${data}</td>
          <td>${local}</td>
          <td>${status.charAt(0).toUpperCase() + status.slice(1)}</td>
          <td class="actions">
            <button>Editar</button>
            <button>Excluir</button>
          </td>
        </tr>`;

      document.getElementById('tabelaEventos').innerHTML += novaLinha;
      formEvento.reset();
      if (preview) {
        preview.src = '';
        preview.style.display = 'none';
      }
    });
  }

  if (imagemInput && preview) {
    imagemInput.addEventListener('change', function () {
      const file = imagemInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
      }
    });
  }
});
