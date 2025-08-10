import { Router } from "express";

//inicialização das rotas
const routes = Router();


//routes 'endpoints'
routes.get('/' , (req , res) => {
  res.json({message: ''})
})


export default routes;