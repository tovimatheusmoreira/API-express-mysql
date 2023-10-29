const db = require('../db')


module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM pecas', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })

    },
    buscarUm: (id_pecas) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM pecas WHERE id_pecas = ?', [id_pecas],(error,results)=>{
                if(error) { rejeitado(error); return;}
                if(results.length > 0 ){
                    aceito(results[0])
                }else{
                    aceito(false)
                } 
            })
        })

    },

    inserir: (nome_peca, descr_peca) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO pecas (nome_peca, descr_peca) VALUES (?, ?)', [nome_peca, descr_peca],(error,results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results.insertCodigo)

                
            })
        })

    },

    alterar: (id_pecas, nome_peca, descr_peca) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE pecas SET nome_peca = ?, descr_peca = ? WHERE id_pecas = ?', [nome_peca, descr_peca, id_pecas],(error,results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results)

            })
        })

    },

    excluir: (id_pecas)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM pecas WHERE id_pecas = ?',[id_pecas], (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })

    }

}