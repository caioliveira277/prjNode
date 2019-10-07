const EventEmitter = require('events');

class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';
    
// meuEmissor.on(nomeEvento, function (click) {
//     console.log('um usuario clicou', click);
// })

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

// let i = 0;
// setInterval(function () {
//     meuEmissor.emit(nomeEvento, 'no ok' + (i++));
// }, 1000);

// openStdin -> escuta o evento
const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`Voce digitou: ${value.toString().trim()}`);
})


// Evento é para ações continuas e promises para executar uma unica vez