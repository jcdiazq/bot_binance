const api = require('./api');

setInterval(() => printConsole(), process.env.REFRESH_INTERVAL);

async function printConsole(){
   console.log(await api.price('SHIBUSDT')); 
}