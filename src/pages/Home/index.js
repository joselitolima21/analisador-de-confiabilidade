import React, { useState } from 'react'
import './style.css'
import readSheet from '../../functions/excelReader'
import check from '../../icons/check.svg'
import ask from '../../icons/ask.svg'
import calculate from '../../functions/calculate'
import dataSets from '../../functions/dataSets'
import { Line } from 'react-chartjs-2'

export default function Home({ history }) {

    const [curve, setCurve] = useState('exp')
    const [sheetName, setSheetName] = useState(null)
    const [name, setName] = useState(null)
    const [path, setPath] = useState(null)

    const [results, setResults] = useState({
        'exponencial': { lambda: 0, mttf: 0, arrayTempo: 0, f_t: 0, R_t: 0, h_t: 0 },
        'weibull': { beta: 0, eta: 0, mttf_w: 0, arrayTempo_w: 0, f_t_w: 0, R_t_w: 0, h_t_w: 0, F_t_w: 0, lnx: 0, lny: 0, ylog: 0 }
    })

    const [errSheetName, setErrSheetName] = useState(false)
    const [errProcess, setErrProcess] = useState(false)
    const [errSheetNone, setErrSheetNone] = useState(false)

    const [sets, setDataSets] = useState({})
    const [liner, setLiner] = useState(false)

    function handleUploadSheet() {
        if (!path) {
            setErrSheetNone(true)
        } else {
            if (!sheetName) {
                setErrSheetName(true)
            } else {
                const dados = readSheet(path, sheetName)
                if (dados !== 'erro') {
                    const res = calculate(dados)
                    const se = dataSets(res)
                    setResults(res)
                    setDataSets(se)
                    setErrSheetName(false)
                    setErrProcess(false)
                } else {
                    setErrProcess(true)
                }
            }
        }
    }

    return (
        <div className='main'>
            <div className='buttonsUpload'>


                <div className="box-upload">
                    <label>
                        Abrir arquivo
                        <input
                            className='input-upload'
                            type="file"
                            accept='.xlsx,.xlsm,.xlsb,.xls'
                            onChange={(event) => {
                                if (event.target.files[0].path) {
                                    setPath(event.target.files[0].path);
                                    setName(event.target.files[0].name);
                                    setErrSheetName(false)
                                    setErrProcess(false)
                                    setErrSheetNone(false)
                                }
                            }}
                        />
                    </label>
                </div>

                <div className='infosSheet'>
                    {name && (
                        <>
                            <img src={check} alt="check" />
                            <h1>{name}</h1>
                        </>
                    )}

                    {!name && (
                        <>
                            <img src={ask} alt="ask" />
                            <h1 id='nenhum'>Nenhum Arquivo</h1>
                        </>
                    )}
                </div>

            </div>

            <div className='changeSheet'>
                <input
                    className='inputText'
                    type='text'
                    placeholder='Nome da planilha'
                    onChange={(event) => {
                        setSheetName(event.target.value);
                        setErrSheetName(false)
                        setErrProcess(false)
                    }}
                />

                <button
                    className='calculate'
                    onClick={() => handleUploadSheet()}
                >
                    Calcular
                    </button>

            </div>

            <div className="infoResult">
                <div className="result">
                    {curve === 'exp' &&
                        (<>
                            <h3>Lambda: {results.exponencial.lambda.toFixed(5)}</h3>
                            <h3>MTTF: {results.exponencial.mttf.toFixed(4)}</h3>
                        </>)}

                    {curve === 'wei' &&
                        (<div className='weiDiv'>
                            <div>
                                <h3>Beta: {results.weibull.beta.toFixed(4)}</h3>
                                <h3>Eta: {results.weibull.eta.toFixed(4)}</h3>
                                <h3>MTTF: {results.weibull.mttf_w.toFixed(4)}</h3>
                            </div>
                            <button
                                className='weiButton'
                                onClick={() => setLiner(!liner)}
                            >{!liner && 'Mostrar linearizado'}
                                {liner && 'Mostrar normal'}
                            </button>
                        </div>)}

                </div>

                <div className="log">
                    {errSheetName && <h3>Digite o nome da planilha</h3>}
                    {errProcess && <h3>Ocorreu algum erro com o arquivo ou a planilha digitada não existe</h3>}
                    {errSheetNone && <h3>Selecione algum arquivo .xlsx .xlsm .xlsb .xls</h3>}
                </div>

            </div>

            <div className='graphs'>

                <button
                    className="expCurve"
                    style={curve === 'exp' ? {
                        backgroundColor: '#ffffff'
                    } : {}}
                    onClick={() => setCurve('exp')}
                >
                    <h2>Exponencial</h2>
                </button>

                <button
                    className="weiCurve"
                    style={curve === 'wei' ? {
                        backgroundColor: '#ffffff'
                    } : {}}
                    onClick={() => setCurve('wei')}
                >
                    <h2>Weibull</h2>

                </button>

                <button
                    className="gamaCurve"
                    style={curve === 'gama' ? {
                        backgroundColor: '#ffffff'
                    } : {}}
                    onClick={() => setCurve('gama')}
                >
                    <h2>Gama</h2>

                </button>

                <button
                    className="logCurv"
                    style={curve === 'log' ? {
                        backgroundColor: '#ffffff'
                    } : {}}
                    onClick={() => setCurve('log')}
                >
                    <h2>Log-normal</h2>

                </button>

                <div className="showCurve">
                    <div className='graph'>
                        {curve === 'exp' && (
                            <Line data={sets.exp} options={{
                                scales: {
                                    yAxes: [{
                                        scaleLabel: {
                                            display: false,
                                            //labelString: 'Diâmetro (m)',
                                            fontFamily: 'sans-serif',
                                        },
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }],
                                    xAxes: [{
                                        scaleLabel: {
                                            display: false,
                                            //labelString: 'Nfs',
                                            fontFamily: 'sans-serif',
                                        }
                                    }]
                                }
                            }} />)}

                        {curve === 'wei' && (
                            <>
                                {!liner && (
                                    <Line data={sets.wei} options={{
                                        scales: {
                                            yAxes: [{
                                                scaleLabel: {
                                                    display: false,
                                                    //labelString: 'Diâmetro (m)',
                                                    fontFamily: 'sans-serif',
                                                },
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }],
                                            xAxes: [{
                                                scaleLabel: {
                                                    display: false,
                                                    //labelString: 'Nfs',
                                                    fontFamily: 'sans-serif',
                                                }
                                            }]
                                        }
                                    }} />)}

                                {liner && (
                                    <Line data={sets.weiLiner} options={{
                                        scales: {
                                            yAxes: [{
                                                scaleLabel: {
                                                    display: false,
                                                    //labelString: 'Diâmetro (m)',
                                                    fontFamily: 'sans-serif',
                                                },
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }],
                                            xAxes: [{
                                                scaleLabel: {
                                                    display: false,
                                                    //labelString: 'Nfs',
                                                    fontFamily: 'sans-serif',
                                                }
                                            }]
                                        }
                                    }} />)}


                            </>
                        )}

                    </div>
                </div>

            </div>

        </div>
    )
};
