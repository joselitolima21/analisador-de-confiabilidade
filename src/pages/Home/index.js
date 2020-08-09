import React from 'react'
import './style.css'
const XLSX = window.require('xlsx');


export default function Home({ history }) {

    function handleUploadFile(event) {
        const file = event.target.files[0]

        var workbook = XLSX.readFile(file.path,{});

        const ref = workbook.Sheets['dados1']['!ref']
        const regExp = /(\D)(\d{1,}):(\D)(\d{1,})/;
        const result = regExp.exec(ref)
        
        const colunaInicial = result[1]
        const colunaFinal = result[2]
        const linhaInicial = result[3]
        const linhaFinal = result[4]

        if(colunaInicial===colunaFinal) {
            // Iterar pela mesma coluna
            
        } else {
            // Iterar pela mesma linha
        }
    }

    return (
        <>
            <p>Home</p>
            <div className="box-upload">
                <label>
                    Abrir arquivo
                <input
                        className='input-upload'
                        type="file"
                        accept='.xlsx,.xlsm,.xlsb,.xls'
                        onChange={(event) => handleUploadFile(event)}
                    />
                </label>
            </div>
        </>
    )
};
