const express = require('express'); //importa o express para o index

const server = express(); //variavel server que chama o express
server.use(express.json()); //para o express entender o json
const btech = []; //salvar as info dentro deste array 

//GET serve para buscar alguma informação no back temos mais 3 alem desses 
//POST serve para criar info no back
//PUT serve para alterar alguma info 
//DELETE serve para apagar alguma info do back
//REQ serve para qualquer dado da requisição RES usa todas as infos p/ informar o front

server.get('/btech', (req, res) => {
    
    return res.json(btech); //listando todos os btech da empresa

})
//metodo GET buscar
server.get('/btech/:index', ( req, res ) => {
    return res.json(req.user);

})

//metodo POST incluir 
server.post('/btech', (req, res) => {
    const { name } = req.body; //aqui é para buscar o name informado no body da req
    btech.push(name);
    return res.json(btech); //retorna a informação
    
})

//metodo PUT editar
server.put('/btech/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    btech [ index ]= name;
    return res.json (btech);
});

//metodo DELETE apagar
server.delete('/btech/:index', (req, res) => {
    const { index } = req.params;

    btech.splice (index, 1);
    return res.send ();

});


server.listen (3000); //é para rodar o servidor na porta 3000 do localhost