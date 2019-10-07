
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

// Adicionar a palavra async -> automaticamente ela retornará uma promise
main()
async function main(){
    try {

        console.time('medida-promise'); //inicia contagem
        
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `);
        console.timeEnd('medida-promise'); //finaliza contagem

        
    }
    catch (Exeption){
        console.error("Deu erro", Exeption);
    }
}
