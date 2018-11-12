class Cell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.createCell()
    }

    createCell() {
        this.cell = document.createElement("span")
        this.cell.classList.add("cell")
        this.cell.instance = this
        this.rowParent.appendChild(this.cell)
    }
}