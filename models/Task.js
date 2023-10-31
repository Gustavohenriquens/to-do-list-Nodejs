//Esse Task é modelo de documento da minha coleção do BD

const mongoose = require("mongoose");


//new mongoose.Schema -> É Estrutura dos documentos(registros), que serão armazenados em uma coleção(tabela), no banco de dados.  
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true //Indica que esse campo é obrigatório.
    },
    check: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date, //Representa a data de criação da tarefa.
        default: Date.now()
    },
});

module.exports = mongoose.model("Task", taskSchema);



