require('dotenv').config({path: 'variaveis.env'})   //dotenv -> para conseguir ler o arquivo variaveis.env  //aqui ta fazendo ler o caminho {path: 'variaveis.env'}
const express = require('express')  
const cors = require('cors')  //nao entendi mas precisa //especificacao da w3c para poder trabalhar cvom api permite acessos a recursos de outros sites mesmo estando em dominios diferentes
const bodyParser = require('body-parser')  //um modulo capaz de converter o body de uma requisicao para varios outros formatos

const routes = require('./routes') //aqui ta mostrando onde estarao as rotas 

const server = express()                                                //chamando o express para controlar
server.use(cors())                                                     //colocando o server em uso      
server.use(bodyParser.urlencoded({extended: false}))

server.use('/api', routes) //todos os enderecos das rotas teram o endereco " /api "

server.listen(process.env.PORT, () =>{
    console.log(`servidor rodando em http://localhost:${process.env.PORT}`)
})