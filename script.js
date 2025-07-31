// Seleciona todos os elementos que serão animados
const texto = document.querySelector(".layer-text") // Título "Capturando Momentos"
const audio = document.querySelector(".audio") // Player de áudio
const lente = document.querySelector(".layer-lens") // Lente (elemento decorativo)
const flash = document.querySelector(".layer-flash") // Flash (elemento decorativo)
const fotografo = document.querySelector(".layer-photografo") // Fotógrafo (camada do meio)
const equipamentos = document.querySelector(".layer-equip") // Equipamentos (camada frente)
const fundo = document.querySelector(".layer-back") // Fundo (camada mais distante)

// Adiciona um listener para o evento de scroll na página
document.addEventListener("scroll", () => {
  // Obtém a quantidade de pixels que a página foi rolada (scroll vertical)
  const value = window.scrollY

  // Animação do texto e áudio (movem para baixo)
  texto.style.marginTop = value * 1.2 + "px" // Move 20% mais rápido que o scroll
  audio.style.marginTop = value * 1.1 + "px" // Move 10% mais rápido que o scroll

  // Animação da lente e flash (movimento horizontal)
  lente.style.marginLeft = value * 0.8 + "px" // Move para a direita
  flash.style.marginLeft = value * 0.6 + "px" // Move para a direita (mais devagar)

  // Animação do fotógrafo e equipamentos (movimento horizontal oposto)
  fotografo.style.marginLeft = -value * 0.5 + "px" // Move para a esquerda
  equipamentos.style.marginLeft = -value * 0.3 + "px" // Move para a esquerda (mais devagar)

  // Animação do fundo (movimento vertical para criar profundidade)
  fundo.style.marginBottom = -value * 0.2 + "px" // Fundo se move bem devagar
})

// Funcionalidade do header (muda cor ao fazer scroll)
const header = document.querySelector("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Funcionalidade do botão de scroll para o topo
const scrollUp = document.getElementById("scroll-up")

window.addEventListener("scroll", function () {
  // Quando o scroll for maior que 200px, mostra o botão
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll")
  } else {
    scrollUp.classList.remove("show-scroll")
  }
})

// Função para rolar suavemente para o topo
scrollUp.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Formulário de contato do WhatsApp
const formWhatsApp = document.getElementById("formWhatsApp")
const confirmation = document.getElementById("confirmation")

if (formWhatsApp) {
  formWhatsApp.addEventListener("submit", (e) => {
    e.preventDefault()

    // Simula o envio (você pode implementar a lógica real aqui)
    setTimeout(() => {
      formWhatsApp.classList.add("hidden")
      confirmation.classList.remove("hidden")

      // Rola suavemente para a mensagem de confirmação
      confirmation.scrollIntoView({ behavior: "smooth" })
    }, 1000)
  })
}

// Navegação suave entre seções
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})
