const express = require("express")
const app = express()
const categories = require("./categories")
app.use(express.json())
app.use(express.static('public'))

app.get('/api/category/:id', (request, response) => {
  const requestedCategory = categories.find(category => category.id == request.params.id)
  response.send(requestedCategory)
})  

app.listen(3000, () => console.log("My Jeopardy backend app is running at port 3000"))