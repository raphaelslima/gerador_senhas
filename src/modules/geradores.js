const rand = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const geraMaiusculo = () => {
  return String.fromCharCode(rand(65, 91))
}

const geraNumero = () => {
  return String.fromCharCode(rand(48, 58))
}

const geraMinusculo = () => {
  return String.fromCharCode(rand(97, 123))
}

const simbolos = ['/', '#', '@', '|', '-', '*', ',', '.', '>', '<', '^', '~']

const geraSimbolos = () => {
  const i = rand(simbolos.length, 0)
  const simboloRetornado = simbolos[i]
  return simboloRetornado
}

export default function geraSenha(
  qtd,
  flagMaiusculo,
  flagMinusculo,
  flagNumero,
  flagSimbolo
) {
  let senhaArray = []

  qtd = Number(qtd)

  for (let i = 0; i < qtd; i++) {
    if (flagMaiusculo) {
      senhaArray.push(geraMaiusculo())
    }
    if (flagMinusculo) {
      senhaArray.push(geraMinusculo())
    }
    if (flagNumero) {
      senhaArray.push(geraNumero())
    }
    if (flagSimbolo) {
      senhaArray.push(geraSimbolos())
    }
  }

  const senhaString = senhaArray.join('')
  const senha = senhaString.slice(0, qtd)

  return senha
}

geraSenha(7, true, true, true, true)
