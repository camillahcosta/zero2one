/*
//Exibe nome de uma variável
const exibeNome = () =>{
    let nome = 'Camilla'
    console.log(nome);
    nome = 'Milla';
    console.log(nome);
};

exibeNome(); 

*/

/*
//Função passando parãmetros e imprimindo mensagem
function exibeNome2(novoNome, idade){
    ////console.log(novoNome);
    //console.log(idade);
    return novoNome + ', você nao sabe nem eu!';
}
//exibeNome2('Hostin', 26);
*/

/*function exibeNome2(novoNome){
    return novoNome + ', você nao sabe nem eu!';
}

const fraseEscrota = exibeNome2('Irineu');
console.log(fraseEscrota);*/

/*exibeNome = (nome) => {
    return nome + ' Hostin Costa!'
}

const nomeConst = exibeNome('Camilla');
console.log(nomeConst);
*/

/*function exibeNome(novoNome){
    if (novoNome  === 'Camilla'){
        console.log(novoNome);
    }else{
        console.log(novoNome);
    }

}

exibeNome('Hostin')*/

//const produtosMarotos = [];
/*const produtosMarotos = ['gato','cao','passaro'];
const adicionaNaLista = (produto) => {
    produtosMarotos.push(produto);
};

adicionaNaLista('Gato');
adicionaNaLista('Cachorro');
adicionaNaLista('Passaro');
adicionaNaLista('Elefante');

console.log(produtosMarotos[2]);*/

const nomes = ['Rodolfo', 'José', 'Matheus','Joana', 'Maria','Roberta'];

/*nome.shift();
console.log(nome);

nome.shift();
console.log(nome);

nome.splice(2,1, 'Renata');
console.log(nome);

nome.pop();
console.log(nome);

nome.shift();
console.log(nome);*/
// Procura as palavras que contem a letra O
// const novoArray = nomes.filter((item) => {return item.includes('o')});
// console.log(novoArray);


// let novaLista = [];
// nomes.forEach((item) => {
//     if (item.includes('o') == 1) {
//         novaLista.push(item);
//     }
// })

// console.log(novaLista);

// Contador
// for (let passo = 0; passo < 5; passo ++){
//     console.log(passo, 'Passos');
// }

const casa = {
    cor: 'branco',
    corPorta: 'amarelo',
    corTelhado: 'vermelho',
    altura: 4,
    largura: 3
}

console.log(JSON.stringify(casa));

casa.cor = 'azul';
console.log('cor', casa.cor);

delete casa.cor;

console.log('cor', casa.cor);

casa['cor'] = 'preto';
console.log('cor',casa.cor);

casa.corTelhado = 'Rosa';
console.log('corTelhado', casa.corTelhado);