import geraSenha from './geradores'

const inputQtd = document.querySelector('.qtd')
const inputMaisculas = document.querySelector('.chk-maisuculas')
const inputMinusculas = document.querySelector('.chk-minusculas')
const inputNumero = document.querySelector('.chk-numeros')
const inputSimbolos = document.querySelector('.chk-símbolos')
const resultado = document.querySelector('.senha-gerada')

export function formGeraSenha() {
  document.addEventListener('click', e => {
    const el = e.target

    if (el.classList.contains('gerar-senha')) {
      if (inputQtd.value > 0 && inputQtd.value <= 50) {
        const senhaGerada = geraSenha(
          inputQtd.value,
          inputMaisculas.checked,
          inputMinusculas.checked,
          inputNumero.checked,
          inputSimbolos.checked
        )
        resultado.innerText = senhaGerada
      } else {
        resultado.innerText =
          'Valor inválido, senha gerada contem entre 2 a 50 caracteres'
      }
    }
  })
}

export function pressformGeraSenha() {
  document.addEventListener('keypress', e => {
    if (e.code === 'Enter') {
      if (inputQtd.value > 0 && inputQtd.value <= 50) {
        const senhaGerada = geraSenha(
          inputQtd.value,
          inputMaisculas.checked,
          inputMinusculas.checked,
          inputNumero.checked,
          inputSimbolos.checked
        )
        resultado.innerText = senhaGerada
      } else {
        resultado.innerText =
          'Valor inválido, senha gerada contem entre 2 a 50 caracteres'
      }
    }
  })
}
