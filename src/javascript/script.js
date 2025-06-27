// menu navbar
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
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
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
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init()

// script usuários html
function abrirModal(nome, email, tipo) {
  document.getElementById('editNome').value = nome;
  document.getElementById('editEmail').value = email;
  document.getElementById('editTipo').value = tipo;
  document.getElementById('modalEdicao').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modalEdicao').style.display = 'none';
}

// apenas simulação de cadastro na tabela
document.getElementById('formUsuario').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const tipo = document.getElementById('tipo').value;

  const novaLinha = `<tr>
        <td>${nome}</td>
        <td>${email}</td>
        <td>${tipo}</td>
        <td class="actions">
          <button onclick=\"abrirModal('${nome}', '${email}', '${tipo}')\">Editar</button>
          <button>Excluir</button>
        </td>
      </tr>`;

  document.getElementById('tabelaUsuarios').innerHTML += novaLinha;
  this.reset();
});

// script eventos html
const imagemInput = document.getElementById('imagem');
const preview = document.getElementById('preview');

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

document.getElementById('formEvento').addEventListener('submit', function (e) {
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
  this.reset();
  preview.src = '';
  preview.style.display = 'none';
});
