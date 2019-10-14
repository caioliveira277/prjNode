const service = require('./service') // ./ para modulos que eu exportei



async function main(){
    try{
        console.time('start');
        const result = await service.obterPessoas('a');
        console.log(result);
        
        console.timeEnd('start');
        // const names = [];
        
        // for(let i = 0; i <= result.results.lenght - 1; i++){
        //     const pessoa = result.results[i];
        //     names.push(pessoa.name);
        // }


        // for(let i in result.results){ // para este caso foi o mais performatico
        //     const pessoa = result.results[i]
        //     names.push(pessoa.name);
        // }
       

        // for(pessoa of result.results){
        //     names.push(pessoa.name)
        // }



        // console.log('names', names);
        

    }
    catch(error){
        console.error('erro interno', error);
        
    }
}

main();