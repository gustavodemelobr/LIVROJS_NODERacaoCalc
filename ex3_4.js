/* 
Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).

Peso da Ração (kg): 2
Consumo Diário (gr): 300
Duração: 6 dias
Sobra: 200gr
*/

const prompt = require("prompt-sync")(); // adiciona o pacote ao programa
const racao = Number(prompt("Peso da ração (KG): ")); // lê dados de entrada
const consumo = Number(prompt("Consumo diário (gr): "));

const pesoGr = racao * 1000; // cria variável auxiliar peso Gr
const duracao = Math.floor(pesoGr / consumo); // cáculo das respostas
const sobra = pesoGr % consumo;

console.log(`Duração: ${duracao} dias.`); // dados de saída
console.log(`Sobra: ${sobra}gr `);