import range from './range'

export default function exponencial(dados) {

    // Somatório dos tempos de falha
    const somatorio_t = (dados.reduce((acumulador, atual) => (acumulador + atual)))
    // Tamanho da amostra
    const n = dados.length
    // Fator lambda
    const lambda = n / somatorio_t
    // Ultimo tempo
    const lastTime = dados[n - 1]
    const arrayTempo = range(0, lastTime/20, lastTime)
    // Funçao densidade
    const f_t = arrayTempo.map((t) => {
        const y = lambda * Math.exp(-lambda * t)
        return y
    })
    // Funçao confiabilidade
    const R_t = arrayTempo.map((t) => {
        const y = Math.exp(-lambda * t)
        return y
    })
    // Taxa de falha
    const h_t = arrayTempo.map((t) => {
        const y = lambda
        return y
    })
    const mttf = 1 / lambda

    return { lambda, mttf, arrayTempo, f_t, R_t, h_t }
}



