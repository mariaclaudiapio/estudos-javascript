// tipos primitivos: number, string e boolean

var vNumber = 5; //aceita tanto inteiros como decimais
var vString = "abacaxi";
var vBoolean = true;

var vNumber = "cinco";

console.log(typeof vNumber);

// objetos

var aluno1 = {
    matrícula: 7627364,
    nome: "Danilo Ferreira",
    curso: "Bootcamp Front End",
    ativo: true
};

console.log(aluno1);
console.log(aluno1.curso);

aluno1.dataDeNascimento = "03 de julho de 1985"; // inclui o campo no objeto

console.log(aluno1);

delete aluno1.dataDeNascimento; // o comando "delete" exclui o campo especificado de um objeto

console.log(aluno1);

var x; // variável não inicializada recebe valor indefinido
var y = null; // para a variável ser nula, ela tem que ser expressamente definida dessa forma

console.log(x);
console.log(y);

//arrays
var frutas = ["morango", "laranja", "kiwi", "maçã"];
console.log(frutas);

frutas.push("abacaxi");
console.log(frutas); // a função push acrescenta elementos a um array

// atribuição por valor e por referência

var primitivo1 = 1;
var primitivo2 = primitivo1; // copia o valor
primitivo2 = 2;

console.log(primitivo1); // imprime 1
console.log(primitivo2); // imprime 2 
 // imprime 2 
// no caso acima, o valor da variável 1 não se alterará porque o que foi copiado para ela foi o valor

var objeto1 = { x: 1 };
var objeto2 = objeto1; // copia a referência
objeto2.x = 2;
console.log(objeto1); // imprime 2
console.log(objeto2); // imprime 2
// no caso acima, o valor da variável 1 se alterará porque o que foi copiado para ela foi a referencia (endereço de memória) da variável 2


