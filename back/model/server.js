import express from 'express'
import { config } from 'dotenv'
import ManageRotues from '../manage_sales/routes/manage.routes.js'
import cors from 'cors'
config()

export class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.manageRoute = '/manage'
    this.middlewares()
    this.routes()
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`)
    })
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes () {
    this.app.use(this.manageRoute, ManageRotues)
  }
}
