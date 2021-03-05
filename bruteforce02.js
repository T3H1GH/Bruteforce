let chave = "paralelepipedo"
let abc = "aeioubcdfghjklmnpqrstvwxyz"
let res = abc.split("")

function quebrar(senha) {
  
    let key = senha.split("")
	let tamanho = key.length
	var arrkey = []
	console.log(`Sua senha tem ${tamanho} caracteres`)
	for (s in key) {
	  let cont = Number(s) + 1
	  for (c in res) {
			console.log(res[c])
			if (res[c] == key[s]) {
				arrkey.push(res[c])
				console.log(`caractere ${cont} encontrado --> ${arrkey[s]}`)
				break
			}
		}
	  
        if (cont == tamanho) {
	        console.log(`Encontrado!\nSua sehha é ${arrkey.join('')}`)
		}
	}
    return arrkey.join('')
}
console.log(quebrar(chave))