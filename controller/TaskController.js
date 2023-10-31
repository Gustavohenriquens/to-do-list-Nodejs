//Controlador de metodos de rotas
// Metodos da rota aqui.

const Task = require("../models/Task"); 



/*Em resumo, este código trata da recuperação de todas as tarefas do banco de dados e renderiza uma página 
HTML para exibir essas tarefas. Em caso de erro, retorna uma resposta de erro com uma mensagem explicativa.*/
const getAllTasks =  async (req, res) => {

    try{ 
        const tasksList = await Task.find(); //Vai procurar todas as tarefas.
        return res.render("index", {tasksList , task: null, taskDelete: null});// Usado quando você está renderizando uma página HTML. E todos esses codigos depois do "index", são variáveis sendo enviadas para usar no HTML.
    } catch(err) {
        res.status(500).send({error: err.message});    
    }       
};
        


/*Em resumo, este código trata da criação de uma nova tarefa no banco de dados com
base nos dados fornecidos no corpo da requisição. Antes de criar a tarefa, ele verifica se a 
chave "task" está preenchida. Em caso de sucesso, redireciona o cliente de volta para a página inicial.*/
const createTask = async (req, res) => {
    const task = req.body; // Armazenar os dados da tarefa que foram enviados no corpo da requisição.

    if(!task.task) { //Se não tiver nada no campo task vai recarregar a página.
        return res.redirect("/");
    }

    try{
        //await -> Espere a Task ser criada..
        await Task.create(task);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};





//Para editar primeiro precisa saber qual é o id do item da lista que vai iditar.   
/*usada para buscar informações de tarefas (ou tasks) no banco de dados com base nos
parâmetros da solicitação e renderizar uma página HTML chamada "index" com essas informações. 
Ela lida com os casos em que a solicitação é para atualizar uma tarefa ou excluí-la, mostrando informações apropriadas na página.*/
const getById = async (req, res) => {
    try{
        const tasksList = await Task.find(); //Espere que ele encontre todos os documentos da Task.
        if (req.params.method == "update"){
            const task = await Task.findOne({_id: req.params.id}); //Espere que a task encontre um id no BD.
            res.render("index" , {task,taskDelete: null, tasksList}); //Está renderizando um modelo chamado "index" (provavelmente um arquivo de modelo de visualização, como um arquivo HTML).
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id});
            res.render("index" , {task: null ,taskDelete, tasksList}); //Está renderizando um modelo chamado "index" (provavelmente um arquivo de modelo de visualização, como um arquivo HTML).
        }
    }catch (err) {
        res.status(500).send({error: err.message});
    } 
};



/*Em resumo, este código trata de atualizar uma única tarefa com base em seu ID e, 
em caso de erro, retorna uma resposta de erro com uma mensagem explicativa.*/
const updateOneTask = async (req, res) => { 

    try {
        const task = req.body;
        await Task.updateOne({ _id: req.params.id}, task); //Vai atualizar uma única tarefa no banco de dados. Irá atualizar a tarefa cujo ID corresponda ao valor passado na URL como um parâmetro.
        res.redirect("/");
    }catch (err) {
        res.status(500).send({error: err.message}); 
    }
};



/*Em resumo, este código trata da exclusão de uma única tarefa com base em seu ID e, 
em caso de erro, retorna uma resposta de erro com uma mensagem explicativa. */
const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id});  //Vai deletar uma única tarefa no banco de dados. Irá deletar cujo ID corresponda ao valor passado na URL como um parâmetro.
        res.redirect("/");
    }  catch (err) {
        res.status(500).send({error: err.message});
    }
};


//Exportando os metodos para importar no arquivos de routes.
module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
};