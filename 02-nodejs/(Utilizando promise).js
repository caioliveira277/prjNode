// PROMISE
// quando der algum problema -> reject(ERROR)
// quando success -> Resolve

// importamos um módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco); // funciona se seguir padrao callback

function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            // return reject(new Error ('Erro no reject new error'));

            return resolve({ 
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date(),
            })
        }, 1000);
    })
};

function obterTelefone(){
    return new Promise(function (resolve, reject){
        setTimeout(function () {

        return resolve({
            telefone: '11333232',
            ddd: 11,
            })
        }, 1000);
    })
};

function obterEndereco(idUsuario, callback){
    setTimeout(function () {
        return callback(null,{
            rua: 'boobos',
            numero: 0,
        })
    }, 2000);
}

const usuarioPromise = obterUsuario();

usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(telefone){
            return {
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                },
                telefone: telefone
            }
        })

    })
    .then(function (result){
        const endereco = obterEnderecoAsync(result.usuario.id)
        return endereco.then(function resolverEndereco(results){
            return {
                usuario: result.usuario,
                telefone: result.telefone,
                endereco: results,
            }
        })
    })
    .then(function (result){
        console.log(`
        ID: ${result.usuario.id}
        Nome: ${result.usuario.nome}
        Telefone: (${result.telefone.ddd}) ${result.telefone.telefone}
        Endereco: ${result.endereco.rua}, Nº ${result.endereco.numero}
        `);
    })
    .catch(function (error){
        console.log(error);
    });
    
    // usuario -> telefone -> telefone (conceito pype)
// para manipular o sucesso usamos a função .then
// para manipular o erros usamos a função .catch