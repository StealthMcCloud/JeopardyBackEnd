class JeopardyGrid extends Grid {   

    constructor(options) {
        options.numberOfColumns = options.categoryIDs.length
        super(options)
        this.categoryIDs = options.categoryIDs
        this.homeServerURL = "http://localhost:3000/api/category/"
        this.categories = null

        this.getCategories()
        this.gridContainer.addEventListener("click", this.onClick.bind(this))
    }

    createCell(rowIndex, columnIndex) {
        return new JeopardyCell(rowIndex, columnIndex, this.rowElement)
    }

    onClick(event) {
        if (!event.target.classList.contains("cell")) return
        const cell = event.target.instance
        if (cell.isCategoryHeader) return

        cell.showQuestion()
    }

    async getCategories() {
        const categoryPromises = this.categoryIDs.map(id => {
            return fetch(this.homeServerURL + id).then(res => res.json())
        })

        this.categories = await Promise.all(categoryPromises)
        this.assignCluesToCells()
    }

    assignCluesToCells() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = this.gridArray[rowIndex][columnIndex]
                const category = this.categories[columnIndex]
                if (rowIndex === 0) {
                    cell.assignCategoryTitle(category)
                } else {
                    cell.assignClue(category.clues)
                }
            }
        }
    }
}