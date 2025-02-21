/**
 * MOdelos de dados (coleção)
 * Clientes
 */

// Importar da biblioteca
const { model, Schema } = require('mongoose')

//Criação da estrutura de dados ("coleção" que será usada do banco
const clienteSchema = new Schema ({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    }
}, {versionKey: false})

// Importação do modelo de dados
//Obs: Clientes será o nome da coleção
module.exports = model('Clientes', clienteSchema)