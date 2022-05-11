import { convertToColumns, convertToRows, convertXYToCellGroupAndCellIndex } from './BoardConvertionUtils'

export function checkCellGroups(board) {

    let errors = []
    
    board.cellGroups.forEach((cellGroup, cellGroupIndex) => {
        let valuesFound = []
        let repeatedValues = []

        cellGroup.cells.forEach((cell) => {
            if (cell !== '') {
                if (valuesFound.indexOf(cell) !== -1 && !repeatedValues.indexOf(cell) !== -1) {
                    repeatedValues.push(cell)
                } else if (!valuesFound.indexOf(cell) !== -1) {
                    valuesFound.push(cell)
                }
            }

        })

        cellGroup.cells.forEach((cell, cellIndex) => {
            if (cell !== '') {
                if (repeatedValues.indexOf(cell) !== -1) {
                    errors.push({
                        cellGroupIndex,
                        cellIndex
                    })
                }
            }
        })
    });


    return errors
}

export function checkRows(board) {

    let errors = []

    let rows = convertToRows(board)

    rows.forEach((row, y) => {
        let valuesFound = []
        let repeatedValues = []

        row.forEach(cell => {
            if (cell !== '') {
                if (valuesFound.indexOf(cell) !== -1 && !repeatedValues.indexOf(cell) !== -1) {
                    repeatedValues.push(cell)
                } else if (!valuesFound.indexOf(cell) !== -1) {
                    valuesFound.push(cell)
                }
            }
        })

        row.forEach((cell, x) => {
            if (cell !== '') {
                if (repeatedValues.indexOf(cell) !== -1) {
                    errors.push(convertXYToCellGroupAndCellIndex(x, y))
                }
            }
        })
    })

    return errors
}

export function checkColumns(board) {

    let errors = []

    let columns = convertToColumns(board)

    columns.forEach((column, x) => {
        let valuesFound = []
        let repeatedValues = []

        column.forEach(cell => {
            if (cell !== '') {
                if (valuesFound.indexOf(cell) !== -1 && !repeatedValues.indexOf(cell) !== -1) {
                    repeatedValues.push(cell)
                } else if (!valuesFound.indexOf(cell) !== -1) {
                    valuesFound.push(cell)
                }
            }
        })

        column.forEach((cell, y) => {
            if (cell !== '') {
                if (repeatedValues.indexOf(cell) !== -1) {
                    errors.push(convertXYToCellGroupAndCellIndex(x, y))
                }
            }
        })
    })

    return errors
}