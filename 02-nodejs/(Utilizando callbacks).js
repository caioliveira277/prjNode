/* 
0 obter usuario
1 obter o numero do telefone de um usuario a partir do seu id
2 obter o endereco do usario pelo id
*/

function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, { 
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date(),
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(function () {
        return callback(null,{
            telefone: '11333232',
            ddd: 11,
        })
    }, 1000);
}

function obterEndereco(idUsuario, callback){
    setTimeout(function () {
        return callback(null,{
            rua: 'boobos',
            numero: 0,
        })
    }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error) {
        console.log('Error User',error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.log('Error Fone',error1);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.log('Error Ende',error2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
            
        });
    });
});
