import * as express from 'express'
import catsRouter from './cats/cats.router'

export const app: express.Express = express()
const port: number = 8000

const data = [1, 2, 3, 4]

// loging middleware
// app.use((req, res, next) => {
//   console.log('middleware', req.rawHeaders[1])
//   next()
// })

// json middleware
app.use(express.json())

app.use(catsRouter)

// 404 error
app.use((req, res, next) => {
  console.log('middleware', req.rawHeaders[1])
  res.status(400).send({ error: '404 not found error' })
})

app.listen(port, () => {
  console.log('...start server')
})
