const mongoose = require('mongoose');
require('dotenv').config();

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)


const connectToDb = () => {
    //O connect está dentro da bibiotecla mongoose que você baixou.
   mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xagir4b.mongodb.net/?retryWrites=true&w=majority`,
        {   
            //Serve para evitar um erro de conexão url na hora de conectar o projeto backend com o mongoDB.
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(()=> console.log("MongoDb Conectado!"))//Se tiver sucesso na conexão, vai executar essa linha.
    .catch((err) => console.log(err)) //Se não ter sucesso, vai executar essa linha!
};

module.exports = connectToDb;   