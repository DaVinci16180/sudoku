export function convertToRows(board) {

    let rows = []

    let topRow = []
    let middleRow = []
    let bottomRow = []

    board.cellGroups.forEach((cellGroup, index) => {
        topRow = topRow.concat(cellGroup.cells.slice(0, 3))
        middleRow = middleRow.concat(cellGroup.cells.slice(3, 6))
        bottomRow = bottomRow.concat(cellGroup.cells.slice(-3))

        if (index === 2 ||index === 5 || index === 8) {
            rows.push(topRow)
            rows.push(middleRow)
            rows.push(bottomRow)

            topRow = []
            middleRow = []
            bottomRow = []
        }
    });

    return rows
}

export function convertToColumns(board) {

    let columns = []

    let leftColumn = []
    let middleColumn = []
    let rightColumn = []

    for (let i = 0; i < 9;) {
        let cellGroup = board.cellGroups[i]

        leftColumn.push(cellGroup.cells[0])
        leftColumn.push(cellGroup.cells[3])
        leftColumn.push(cellGroup.cells[6])

        middleColumn.push(cellGroup.cells[1])
        middleColumn.push(cellGroup.cells[4])
        middleColumn.push(cellGroup.cells[7])

        rightColumn.push(cellGroup.cells[2])
        rightColumn.push(cellGroup.cells[5])
        rightColumn.push(cellGroup.cells[8])

        if (i === 6 || i === 7 || i === 8) {
            columns.push(leftColumn)
            columns.push(middleColumn)
            columns.push(rightColumn)

            leftColumn = []
            middleColumn = []
            rightColumn = []

            if (i == 8) break

            i -= 5
        } else {
            i += 3  
        }

    }

    return columns
}

export function convertXYToCellGroupAndCellIndex(x, y) {
    let groupsHorizontal = parseInt(x / 3, 10)
    let groupsVertical = parseInt(y / 3, 10)

    let cellGroupIndex = groupsVertical * 3 + groupsHorizontal

    let cellsHorizontal = x % 3
    let cellsVertical = y % 3

    let cellIndex = cellsVertical * 3 + cellsHorizontal

    return {cellGroupIndex, cellIndex}
}