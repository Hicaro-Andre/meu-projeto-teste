import { Router } from "express";

//inicialização das rotas
const routes = Router();


//routes 'endpoints'
routes.get('/' , (req , res) => {
  res.json({message: ''})
})

//routes cadastro de usuarios
routes.get('/users' , (req ,res) => {
  res.send("rota de cadastro funcionando")
})

export default routes;