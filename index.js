const express = require("express"); 
const path = require("path");//Ele é responsável por direcionar as pastas aqui dentro.
const routes = require("./routes/routes"); //Importando as rotas do arquivo routes.
const connectToDb = require("./database/db");


connectToDb(); //Executando a função. 
const app = express();
const port = 3000;  


app.set("view engine", "ejs");//*O ejs é um modulo, precisa ser instalado.

//.use() -> É usado para servir arquivos estáticos.
// Configura o Express para servir arquivos estáticos do diretório "public". 
app.use(express.static(path.join(__dirname, "public")));  
app.use(express.urlencoded()); //O meu servidor vai conseguir receber o que vinher de um formulário pelo body do index.ejs
app.use(routes); //Usar as rotas.


app.listen(port, () =>{
    console.log(`Servidor Rodando em http://localhost:${port}`)
});
