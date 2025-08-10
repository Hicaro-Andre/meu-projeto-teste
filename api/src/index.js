import app from "./app.js"


//criando um servidor com express
app.listen(3333, () => {
  console.log('✅ Servidor rodando em http://localhost:3333');
});