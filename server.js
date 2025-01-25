const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get(/.*/, (req, res) => {
	try {
		const url = new URL(req.url, 'https://codedamn.com')
		url.pathname = url.pathname === '/' ? '/index.html' : url.pathname
		const file = path.resolve(__dirname, `out${url.pathname}`)

		console.log({ file })
		res.end(fs.readFileSync(file))
	} catch (error) {
		res.writeHead(500)
		res.end()
	}
})

app.listen(3000, () => {
	console.log('up on http://localhost:3000')
})
