import exponencial from './exponencial'
import weibull from './weibull'

export default function calculate(dados) {
    const { lambda, mttf, arrayTempo, f_t, R_t, h_t } = exponencial(dados)
    const { beta, eta, mttf_w, arrayTempo_w, f_t_w, R_t_w, h_t_w, F_t_w, lnx, lny, yLog } = weibull(dados)

    return {
        'exponencial': { lambda, mttf, arrayTempo, f_t, R_t, h_t },
        'weibull': { beta, eta, mttf_w,arrayTempo_w, f_t_w, R_t_w, h_t_w, F_t_w , lnx, lny, yLog}
    }
}