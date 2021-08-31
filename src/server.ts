import express, { Request, Response } from 'express'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import path from 'path'
import { router } from './routes/index'

// Configurando variáveis ambiente
dotenv.config()

// Iniciando servidor
const server = express()

// Configurando template engine
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

// Rotas
server.use(router)

server.use((request: Request, response: Response) => {
  response.status(404).render('pages/404')
})

server.listen(process.env.PORT, () => console.log('Server is running on port 3333!'))
