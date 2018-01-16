let logado = JSON.parse(localStorage.getItem("logado"))
let usuario = localStorage.getItem("nomeUsuario")

LoginUsuario_render({
  logado: logado,
  usuario: localStorage.getItem("nomeUsuario"),
  onLogin: (nomeUsuario) => {
    logado = true,
    localStorage.setItem("logado", true),
    localStorage.setItem("nomeUsuario", nomeUsuario)
    usuario = nomeUsuario
  },
  onLogout: () => {
    logado = false,
    localStorage.setItem("logado", false),
    localStorage.removeItem("nomeUsuario")
  }
})