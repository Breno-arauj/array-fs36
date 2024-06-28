const nomes = [];

const nomesPessoas = ['Junior', 'Pedro', 'Lucas'];

// const idades = [1, 23, 12]

const anos = [12, '23', 30]

nomes.push('Breno Aragao');

///console.log(nomes);

nomes.push('Edmar');

///console.log(nomes);

nomes.push(2)

///console.log(nomes);

const idades = [1, 23, 92, 8, 58, 60, 20, 87, 22, 36]

// console.log(idades)

///imprimir o sexto elemento, assim o indice = posicao -1, 6-1 = 5 (indice)
// console.log(idades[5])

//iterar um array

for(let index =0; index < idades.length; index++ ) {
    // console.log(idades[index]);
}

idades.forEach(function(value, index, idades){
    console.log(value * 3);
})