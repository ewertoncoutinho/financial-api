const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
	res.status(200).send()
})

app.listen(port, () => {
	console.log(
		`started server on 0.0.0.0:${port}, url: http://localhost:${port}`
	)
})
