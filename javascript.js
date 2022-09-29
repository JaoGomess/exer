/* Crie duas variáveis com o valor 10 e 100. Mostre o valor da soma, subtração, divisão e multiplicação em um ALERT. */
const x = 100, y = 10;

alert(`
    [SOMA]: ${parseInt(x + y)} \n 
    [SUBTRAÇÃO]: ${parseInt(x - y)} \n 
    [DIVISÃO]: ${parseInt(x / y)} \n 
    [MULTIPLICAÇÃO]: ${parseInt(x * y)} \n   
`)

/* Crie um loop que mostre na tela o valor de 10 a 100. */

for (let i = 10; i <= 100; i++) {
    console.log('10 a 100: ' + i);
}

/* Crie uma variável que recebe o valor fixo 5. Mostre a tabuada desse número. */
const number = 5;
var concatena = "";

for (let i = 1; i <= 10; i++) {
    concatena += `5 x ${i} = ${5 * i}` + '\n';
}
console.log(concatena);

/* Adapte o exercício anterior para o valor não ser mais fixo. O valor deve ser recebido de um campo da tela. */

function calcTabuada() {
    const calc = parseInt(document.getElementById('txtTabuada').value);
    var s = "";

    if (calc > 0) {
        for (let i = 1; i <= 10; i++) {
            s += `${calc} x ${i} = ${calc * i}` + ' \n | ';
        }
        return document.getElementById('tabuadaValor').value = s;
    }
}

/* Fazer um calculadora que receberá dois valores e a operação (+,-,*,/). Ao clicar no botão calcular o resultado é demonstrado. */

function calcCalculadora() {
    const val1 = parseFloat(document.getElementById('numberValor1').value);
    const val2 = parseFloat(document.getElementById('numberValor2').value);
    var pushLista = document.getElementById('lista').value;
    console.log(typeof pushLista)
    var result = "";
    switch(pushLista) {
        case "+":
            result += `[OPERAÇÃO ${pushLista} ]: ${val1 + val2}`;
            break;
        case "-":
            result += `[OPERAÇÃO ${pushLista} ]: ${val1 - val2}`;
            break;
        case "*":
            result += `[OPERAÇÃO ${pushLista} ]: ${val1 * val2}`;
            break;
        case "/":
            result += `[OPERAÇÃO ${pushLista} ]: ${val1 / val2}`;
            break;
    }
    return document.getElementById('calcResult').value = result;
    
}

/* Percorra o array [1,2,3,4,5,6,7,8,9,10] e exiba apenas os valores pares. */

var lista = [1,2,3,4,5,6,7,8,9,10];

console.log(lista.filter((get) => get % 2 == 0));

/* O custo de um carro novo ao consumidor é obtido com a seguinte fórmula:
custo final = custo de fábrica + (custo de fábrica * percentual do distribuidor) + (custo de fábrica * percentual de impostos)

O usuário terá uma tela para entrar com os valores:

custo de fábrica => nome do input custoFabrica
% distribuidor => nome do input percDistribuidor
% impostos => nome do input percImpostos
Valor final => nome do input valorfinal
Deverá executar o cálculo e demonstrar o resultado no “valorfinal” quando clicar no botão “btncalcular”. */


function btncalcular() {
    const custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
    const final = custoFabrica +
        (custoFabrica * parseFloat(document.getElementById("percDistribuidor").value)) +
        (custoFabrica * parseFloat(document.getElementById("percImpostos").value));

    return document.getElementById("valorfinal").value = final;
}



