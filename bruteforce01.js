let chave = "ca"
let abc = "aeioubcdfghjklmnpqrstvwxyz"
let res = abc.split("")							// Retorna um array

function quebrar(senha) {
	let key = senha.split("")					// Retorna um array
	let tamanho = key.length
	if (tamanho >= 1) {
		for (let c = 0; c < res.length; c++) {
			console.log(res[c])
			if (res[c] == key[0]) {
				var l1 = res[c]
				console.log(`Primeira letra ${l1}`)
				if (tamanho == 1) {
					console.log(`Encontrado!\nSua sehha é ${l1}`)
				}
				break
			}
			
		}
		if (tamanho >= 2) {
			for (let c = 0; c < res.length; c++) {
				console.log(res[c])
				if (res[c] == key[1]) {
					var l2 = res[c]
					let suaSenha = l1 + l2 
					if (tamanho == 2) {
						console.log(`Encontrado!\nSua sehha é ${suaSenha}`)
					}
					break
				}
				}

		}

	}

	return ''
}



console.log(quebrar(chave))







/*
function createSilaba() {
    if (silabas.length < 105) {
        silabas.push(consoantes[cpos] + vogais[pos])
		pos ++
		if (pos == 5) {
		    cpos++
			pos = 0
		}
		createSilaba()

    } 
}
createSilaba()
*/
