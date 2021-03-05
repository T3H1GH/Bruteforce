let chave = "paralelepipedo"    // Sua senha
let abc = "aeioubcdfghjklmnpqrstvwxyz"    // Caracteres que vamos usar
let caracteres = abc.split("")     // Transforma os caracteres em array

function quebrar(senha) {     // Aqui começa a mágica!
  
  	let key = senha.split("")    // Transfome a senha em arry
	let tamanho = key.length     // Essa é a quantidade de caracteres da senha
	var arrkey = []              // Vamos armazenar os caracteres encontrados com o bruteforce aqui
	console.log(`Sua senha tem ${tamanho} caracteres`)
	for (s in key) {            // Enquanto s(contador) estiver em key(senha no formato de array)
	  let cont = Number(s) + 1  // Criei outro contador aqui pois o "s" vai começar no 0, quero começar do 1
	  // O "s" está como strig por isso passei ele para número antes de somar
	  for (c in caracteres) {   // Enquanto c(mais um contador) estiver em caracteres
			console.log(caracteres[c])   // Isso vai exibir os caracteres um a um até o if abaixo se tornar verdadeiro
			if (caracteres[c] == key[s]) {    // Se o caractere na posição "c" for igual ao caractere da chave na posição "s"
			  // A cada loop ele vai encontrar um caractere da senha
				arrkey.push(caracteres[c])      // Armazena o caractere achado em arrkey
				console.log(`caractere ${cont} encontrado --> ${arrkey[s]}`)   // Aqui eu ultilizo aquele contador que criei mais acima
				break         // Depois que o if se torna verdadeiro ele para o loop (secundário)
			}
		}
	  
        if (cont == tamanho) {           
          // Se o contador for igual ao tamanho da senha ele retorna o valor encontrado no console.
	        console.log(`Encontrado!\nSua sehha é ${arrkey.join('')}`)
		}
	}
    return arrkey.join('')      // A função vai retornar a senha encontrada em string
}
console.log(quebrar(chave))

// Obrigado por ler até aqui!
// Essa função vai quebrar strings de 
// qualquer tamanho com tanto q esteja com 
// os caracteres listados em "abc", senão 
// ele vai dar um loop infinito.
