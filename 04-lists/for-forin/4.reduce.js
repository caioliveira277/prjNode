/* eslint-disable no-undef */
const { obterPessoas } = require('./service'); //extração de um item especifico

Array.prototype.meuReduce = function (callback, valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index],this)
    }
    return valorFinal;
}

async function main(){

    try {
        const { results } = await obterPessoas('a');
        var pesos = results.map(item => parseInt(item.height))
        // [20.3, 30.3, 40.5] = 0

        // var total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo;
        // },0) // <=valor caso array seja vazio

        const minhaLista = [
            ['Caio', 'Henrique'],
            ['NodeBr', 'Node'],
        ]
        var total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo);
        }, []).join(', ') // join transforma a lista em string = implode
        
    } catch (error){
        console.error(error);
    }
    finally {
        console.log(pesos);
        
        console.log(`total: ${total}`);
        
    }
}

main();