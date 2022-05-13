let numberOne; //o let deve ser criado antes de ser declarado. Com a var é possível driblar essa regra.

numberOne = 1;

console.log(numberOne + 2);

var firstName = 'João';
let lastName = 'Souza';
const PRIMEIRO_NOME = 'Stephany'; //as constantes são declaradas em SNAKE_UPPER_CASE, por convenção.


if(firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';
    lastName = 'Rodrigues'
    console.log("Dentro do bloco é " + firstName, lastName + ".");
    
}

console.log("Fora do bloco é " + firstName, lastName + ".");
console.log(PRIMEIRO_NOME);



//o let não carrega escopo global. Ele carrega escopo apenas dentro do bloco em que ele está.
 
