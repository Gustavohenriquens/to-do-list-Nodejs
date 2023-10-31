//Metodos para criar rotas.
const routes = require("express").Router(); //Router() ->  É um método que cria um novo objeto de roteamento do Express e  é usado para definir as rotas e manipular as solicitações HTTP.
//Importando arquivos dos metodos das rotas.
const taskController = require("../controller/TaskController") 


//Importando os metodos para por nas rotas.
routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);  
routes.get("/getById/:id/:method" , taskController.getById);
routes.post("/updateOne/:id" , taskController.updateOneTask);
routes.get("/deleteOne/:id" , taskController.deleteOneTask);




module.exports = routes;