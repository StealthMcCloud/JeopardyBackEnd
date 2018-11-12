
class Grid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 6
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()
    }

    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = this.createCell(rowIndex, columnIndex, this.rowElement)
                this.rowArray.push(cell)
            }
        }
    }

    createCell(rowIndex, columnIndex, rowElement) {
        return new Cell(rowIndex, columnIndex, this.rowElement)
    }

    findCellByIndexes (rowIndex, columnIndex) {
        const row = this.gridArray[rowIndex] || []
        const cell = row[columnIndex]
        return (row.length && cell) ? cell : null
    }
}
