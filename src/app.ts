import * as express from 'express'
import catsRouter from './cats/cats.router'

// 싱글톤으로 리팩
class Server {
  public app: express.Application
  public port: number

  constructor() {
    const app: express.Application = express()
    this.app = app
    this.port = 8000
  }

  private setRouter() {
    this.app.use(catsRouter)
  }

  private setmiddleware() {
    // loging middleware
    this.app.use((req, res, next) => {
      console.log('middleware', req.rawHeaders[1])
      next()
    })

    // json middleware
    this.app.use(express.json())

    // 404 error
    this.app.use((req, res, next) => {
      console.log('middleware', req.rawHeaders[1])
      res.status(400).send({ error: '404 not found error' })
    })
  }

  public listen() {
    this.setRouter()
    this.setmiddleware()
    this.app.listen(this.port, () => {
      console.log('...start server')
    })
  }
}

function init() {
  const server = new Server()
  server.listen()
}

init()
