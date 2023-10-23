// data completa
let data = new Date();
//console.log(data)
document.write(data)
//pula linha
document.write("<br>")

// pega o dia 
// +1 incrementa um dia e o -1 decrementa
let data1 = new Date().getDate()
document.write("<br>")
document.write(data1)
document.write("<br>")

//pega Mês
let data2 = new Date().getMonth();
document.write(data2)
document.write("<br>")

//pega o Ano
let data3 = new Date().getFullYear()
document.write(data3)
document.write("<br>")

//pegando o dia atual de um array
let data4 = new Date()
let diaSemana =['Domingo','Segunda','terça','Quarta','Quinta','Sexta','Sabado'];
document.write(diaSemana[data4.getDay()+2]);
document.write("<br>")


//padrão americano completo 
let data5 = new Date();
document.write(data5.toDateString());
document.write("<br>")
//padrão navegador completo
let data6 = new Date();
document.write(data6.toLocaleDateString());
document.write("<br>")


//criando a formatação completa

let data7 = new Date()
let Dia = ('0' +data7.getDate()).slice(-2)
let mes = data7.getMonth();
let Meses =[
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let ano = data.getFullYear();
document.write(Dia + ' de ' +Meses[mes]+  'de ' +ano);
document.write("<br>")
//HORAS

//pegando hora
let horas = new Date();
document.write(horas.getHours());
document.write("<br>")

//pegando os minutos
let minutos = new Date();
document.write(minutos.getMinutes());

//pegando os segundos
let segundos = new Date();
document.write(segundos.getSeconds());
document.write("<br>")

//manipular horas 
let horas1 = new Date();
document.write(horas1.getHours());
document.write("<br>")
horas1.setHours(horas1.getHours()+4);
document.write("<br>")
document.write(horas1.getHours());
document.write("<br>")

//pega a data/hora completa
let horas2 = new Date()
document.write(horas2.toLocaleString());


//FUNÇÕES SETTIMEOUT E SETINTERVAL

function BemVindo(){
   // alert("OLá, Seja bem vindo")

}
//executa uma vez apenas depois de 3 segundos por exemplo 
setTimeout(BemVindo, 3000)


function tempo(){
    let relogio = document.querySelector("#div1")
    let hora = new Date();
    relogio.innerHtml= (hora.toLocaleString()).slice(-8)
}
