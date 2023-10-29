const carroService = require('../services/carroService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]}

        let pecas = await carroService.buscarTodos()

        for(let i in pecas){
            json.result.push({
                nome: pecas[i].nome_peca,
                descricao: pecas[i].descr_peca
            })
        }
        res.json(json)
    },

    buscarUm: async (req, res) =>{
        let json = {error:'', result:{}}

        let id_pecas = req.params.id_pecas;
        let peca = await carroService.buscarUm(id_pecas)

        if(peca){
            json.result = peca;
        }
        res.json(json);
    },

    inserir: async (req, res) =>{
        let json = {error:'', result:{}}

        let nome_peca = req.body.nome_peca            //vai pegar do corpo da requisicao por isso o body
        let descr_peca = req.body.descr_peca


        if(nome_peca && descr_peca){
            let pecaCodigo = await carroService.inserir(nome_peca, descr_peca)

            json.result = {
                id_pecas: pecaCodigo,
                nome_peca, descr_peca
            };
        }else{
            json.error = 'campos nao eviados'
        }
        res.json(json);
    },

    alterar: async (req, res) =>{
        let json = {error:'', result:{}}

        let id_pecas = req.params.id_pecas
        let nome_peca = req.body.nome_peca            
        let descr_peca = req.body.descr_peca


        if(id_pecas && nome_peca && descr_peca){
            await carroService.alterar(id_pecas,nome_peca, descr_peca)

            json.result = {
                id_pecas,
                nome_peca,
                descr_peca
            };
        }else{
            json.error = 'campos nao eviados'
        }
        res.json(json);

    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}}

        await carroService.excluir(req.params.id_pecas)

        res.json(json)
    }
    
}