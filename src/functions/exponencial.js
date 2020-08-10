export default function plotGraph(dados) {
    const range = (start, step, end) => {
        const length = (end - start) / step + 1;
        return Array.from({ length }, (_, i) => (start + step * i).toFixed(2));
    }

    // Somatório dos tempos de falha
    const somatorio_t = (dados.reduce((acumulador, atual) => (acumulador + atual)))
    // Tamanho da amostra
    const n = dados.length
    // Fator lambda
    const lambda = n / somatorio_t
    // Ultimo tempo
    const lastTime = dados[n - 1]
    const arrayTempo = range(0, 100, lastTime)
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


    console.log(`------ Exponencial -------`)
    console.log(`lambda: ${lambda}`)
    console.log(`MTTF: ${mttf}`)
    console.log(`--------------------------`)


    return { lambda, mttf, arrayTempo, f_t, R_t, h_t }
}