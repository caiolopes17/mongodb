/**
 *  ProcessoPrincipal
 * Estudo com CRUD com MongoDB
 */

//Importação do módulo de conexão (database.js)
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados de clientes
const clienteModel = require('./src/models/Clientes.js')

// CRUD Creat (Função para adicionar um novo cliente)
const criarCliente = async (nomeCli, foneCli) => {
    try {
        const novoCliente = new clienteModel(
            {
                nomeCliente: nomeCli,
                foneCliente: foneCli
            }
        )
            // A linha abaixo salva os dados do cliente no banco
            await novoCliente.save()
            console.log("Cliente adicionado com sucesso.")
        
    } catch (error) {
        console.log(error)       
    }
}

// Execução da aplicação
const  app = async () => {
    await conectar()
    await criarCliente("Caio Lopes", "99999-0000")
    await criarCliente("Leandro Ramos", "99999-0000")
    await desconectar()
}

console.clear()
app()
