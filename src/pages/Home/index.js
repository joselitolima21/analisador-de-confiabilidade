import React, { useState } from 'react'
import './style.css'
import readSheet from '../../functions/excelReader'
import check from '../../icons/check.svg'
import ask from '../../icons/ask.svg'

export default function Home({ history }) {

    const [curve, setCurve] = useState('exp')
    const [sheetName, setSheetName] = useState('')
    const [name, setName] = useState(null)
    const [path, setPath] = useState('')

    function handleUploadSheet() {
        console.log(readSheet(path, sheetName))
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
                            onChange={(event) => { setPath(event.target.files[0].path); setName(event.target.files[0].name) }}
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
                            <h1 className='nenhum'>Nenhum Arquivo</h1>
                        </>
                    )}
                </div>

            </div>

            <div className='changeSheet'>
                <input
                    className='inputText'
                    type='text'
                    placeholder='Nome da planilha'
                    onChange={(event) => setSheetName(event.target.value)}
                />

                <button
                    className='calculate'
                    onClick={() => handleUploadSheet()}
                >
                    Calcular
                    </button>
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
                </div>

            </div>

        </div>
    )
};
