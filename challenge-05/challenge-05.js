/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [ 1, 'fernando', {}, [], false ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myFunction(myarray)[1];
'fernando'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function twoParam(arr, index ) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var fiveValues = [5, 'fernando', false, {a: 'azul'}, null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

twoParam(fiveValues,[0]);   //  5
twoParam(fiveValues,[1]);   //  'fernando'
twoParam(fiveValues,[2]);   //  false 
twoParam(fiveValues,[3]);   //  {a: 'azul'}
twoParam(fiveValues,[4]);   //  null

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( bookName ) {    
    var allBooks = {
        'Livro da vida': { 
            quantidadePaginas: 200,
            autor: 'Fernando L Silva',
            editora: 'Record'                
        },

        'Livro da alma': { 
            quantidadePaginas: 300,
            autor: 'Anna P Brito',
            editora: 'Ebert'                
        },

        'Livro do coração': { 
             quantidadePaginas: 500,
             autor: 'Adam P Morgam',
             editora: 'Novaes CM'                
        },

    };
            return bookName === undefined ? allBooks : allBooks[bookName];
        
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();
{Livro da vida: {…}, Livro da alma: {…}, Livro do coração: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

'O livro Livro da alma tem ' + book('Livro da alma').quantidadePaginas + ' páginas!'
//'O livro Livro da alma tem 300 páginas!'

var bookName = 'Livro da alma';

'O ' + bookName + ' tem ' + book('Livro da alma').quantidadePaginas + ' páginas!' 
// 'O Livro da alma tem 300 páginas!'


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

'O autor do ' + bookName + ' é ' + book( bookName ).autor + '.';
// 'O autor do Livro da alma é Anna P Brito.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

'O ' + bookName + ' foi publicado pela editora ' + book( bookName ).editora + '.';
// 'O Livro da alma foi publicado pela editora Ebert.'







