export default function datasets(results) {

    return {
        'exp': {
            labels: results.exponencial.arrayTempo,
            datasets: [{
                label: 'f(t)',
                data: results.exponencial.f_t,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'R(t)',
                data: results.exponencial.R_t,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'h(t)',
                data: results.exponencial.h_t,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },



        'wei': {
            labels: results.weibull.arrayTempo_w,
            datasets: [{
                label: 'f(t)',
                data: results.weibull.f_t_w,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'R(t)',
                data: results.weibull.R_t_w,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'h(t)',
                data: results.weibull.h_t_w,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'F(t)',
                data: results.weibull.F_t_w,
                backgroundColor: [
                    'rgba(25, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(25, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },

        'weiLiner': {
            labels: results.weibull.lnx,
            datasets: [{
                label: 'Vida',
                data: results.weibull.lny,
                backgroundColor: 'rgba(2, 2, 2, 0.2)',
                borderColor: 'rgba(2, 2, 2, 1)',
                borderWidth: 2,
                showLine: false,
                pointStyle: 'circle'
            },
            {
                label: 'Linear',
                data: results.weibull.yLog,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
                fill: false
            }]
        },


        'gama': {
            labels: results.exponencial.arrayTempo,
            datasets: [{
                label: 'f(t)',
                data: results.exponencial.f_t,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'R(t)',
                data: results.exponencial.R_t,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'h(t)',
                data: results.exponencial.h_t,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },


        'log': {
            labels: results.exponencial.arrayTempo,
            datasets: [{
                label: 'f(t)',
                data: results.exponencial.f_t,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'R(t)',
                data: results.exponencial.R_t,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'h(t)',
                data: results.exponencial.h_t,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
    }
};
