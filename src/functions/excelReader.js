const XLSX = window.require('xlsx');

export default function readSheet(path,sheetName) {

        // Processando os dados da planilha
        try {
            var workbook = XLSX.readFile(path, {});
            const sheetData = workbook.Sheets[sheetName]
            const ref = workbook.Sheets[sheetName]['!ref']
            
            // Realizando uma filtragem na ref da planilha
            const regExp = /(\D)(\d{1,}):(\D)(\d{1,})/;
            const result = regExp.exec(ref)
            const colunaInicial = result[1]
            const linhaInicial = result[2]
            const colunaFinal = result[3]
            const linhaFinal = result[4]

            // Alocando os dados
            var dados = []
            if (colunaInicial === colunaFinal) {
                // Iterar pela mesma coluna
                for (let index = linhaInicial; index <= linhaFinal; index++) {
                    const cell = colunaInicial + index
                    dados.push(sheetData[cell]['v'])
                }
            } else {
                // Iterar pela mesma linha
            }

            // Ordenando os dados
            dados.sort(function(a, b) {
                return a - b;
            });

            return dados
        }
        catch {
            return 'ocorreu algum erro' 
        }
    }

