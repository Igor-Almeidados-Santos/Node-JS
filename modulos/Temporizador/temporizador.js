const schedule = require('node-schedule');//Pacote node schedule.

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 0', () => {
    console.log('Executando tarefa 1!', new Date().getSeconds());
});//Executando uma tarefa temporizada. O primeiro valor equivale a de quantos em quantos segundos será executada a tarefa, o segundo equivale aos segundos e a hora em que será executado, o terceiro é o dia e o dia e o mês e o ultimo é o dia da semana. Depois tem uma função que realiza a tarefa.


setTimeout(() => {
    tarefa1.cancel(); //Cancela a execusão da tarefa 1
    console.log('Cancelando Tarefa 1');
}, 20000);

//O schedule possui um objeto recurrence rule que serve para setar as configurações feitas acima (dia, hora, etc).
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(0, 5)];
regra.hour = 10;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando tarefa 2!', new Date().getSeconds());
});
