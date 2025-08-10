import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/routes.js'

//inicialização do dotenv
dotenv.config()


/* Inicializo o express, converto as respostas para arquivo json 
e registro todas as rotas definidas no arquivo de rotas */
const app = express()
app.use(express.json());
app.use(routes);



export default app