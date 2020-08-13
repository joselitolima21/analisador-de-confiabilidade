import range from './range'
import { gamma } from 'mathjs'

export default function weibull(dados) {
    const n = dados.length

    //Rank
    const rank = range(1, 1, n)
    // Median rank
    const y = rank.map((i) => {
        return (i - 0.3) / (n + 0.4);
    })

    // x = ln(vida)
    const lnx = dados.map((d) => {
        return Math.log(d);
    })
    const slnx = (lnx.reduce((acumulador, atual) => (acumulador + atual)))

    // y = ln(-ln(1-mr))
    const lny = y.map((mr) => {
        return Math.log(-Math.log(1 - mr));
    })
    const slny = (lny.reduce((acumulador, atual) => (acumulador + atual)))

    // ln(x)^2
    const lnx2 = lnx.map((x) => {
        return x ** 2;
    });
    const slnx2 = (lnx2.reduce((acumulador, atual) => (acumulador + atual)))

    // ln(y)^2
    //const lny2 = lny.map((y) => {
    //    return y ** 2;
    //});
    //const slny2 = (lny2.reduce((acumulador, atual) => (acumulador + atual)))

    // ln(x)*ln(y)
    const lnxlny = lnx.map((x, i) => {
        return x * lny[i]
    })
    const slnxlny = (lnxlny.reduce((acumulador, atual) => (acumulador + atual)))

    // Média de x
    const mlnx = slnx / n;

    // Média de y
    const my = slny / n;

    const beta = (n * slnxlny - slnx * slny) / (n * slnx2 - (slnx ** 2));

    // Coeficiente linear
    const b = my - beta * mlnx;

    // eta
    const eta = Math.exp(-(b / beta));

    //Coeficiente de correlação
    //R = corr2(lnx, lny);

    // Taxa média entre falhas MTBF
    //const MTTF = eta * gamma(1 + (1 / beta));

    // ln(-ln(1 - F(t))) = Beta*ln(t) - b*ln(eta)

    // Ultimo tempo
    const lastTime = dados[n - 1]
    const arrayTempo_w = range(0, lastTime / 20, lastTime)

    // Função densidade de probabilidade de Weibull
    const f_t_w = arrayTempo_w.map((t) => {
        return (beta / eta) * ((t / eta) ** (beta - 1)) * Math.exp(-((t / eta) ** beta))
    })

    // Confiabilidade de Weibull
    const R_t_w = arrayTempo_w.map((t) => {
        return Math.exp(-((t / eta) ** beta))
    })
    // Taxa de falha de Weibull
    const h_t_w = arrayTempo_w.map((t) => {
        return (beta / eta) * ((t / eta) ** (beta - 1))
    })

    // Função distribuição de probabilidade de Weibull
    const F_t_w = arrayTempo_w.map((t) => {
        return 1 - Math.exp(-((t / eta) ** beta))
    })

    // Função distribuição linearizada de Weibull
    const mttf_w = eta * gamma(1 + 1 / beta)

    const yLog = range(lnx[0], lnx[lnx.length - 1] / 50, lnx[lnx.length - 1]).map((l) => {
        return (beta * l + b).toFixed(4)
    })

    return { beta, eta, mttf_w, arrayTempo_w, f_t_w, R_t_w, h_t_w, F_t_w, lnx: lnx.map((l) => l.toFixed(4)), lny: lny.map((l) => l.toFixed(4)), yLog }

}