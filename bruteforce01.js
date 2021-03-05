let chave = "cabo"
let abc = "aeioubcdfghjklmnpqrstvwxyz"
let res = abc.split("")							// Retorna um array

function quebrar(senha) {
	let key = senha.split("")					// Transforma a chave em array
	let tamanho = key.length
	if (tamanho >= 1) {
		for (let c = 0; c < res.length; c++) {
			console.log(res[c])
			if (res[c] == key[0]) {
				var l1 = res[c]
				console.log(`Primeiro caractere --> ${l1}`)
				if (tamanho == 1) {
					console.log(`Encontrado!\nSua sehha é ${l1}`)
				}
				break
			}
		}
	}
	if (tamanho >= 2) {
		for (let c = 0; c < res.length; c++) {
			console.log(res[c])
			if (res[c] == key[1]) {
				var l2 = res[c]
				console.log(`Segundo caractere --> ${l2}`)
				let suaSenha = l1 + l2 
				if (tamanho == 2) {
					console.log(`Encontrado!\nSua sehha é ${suaSenha}`)
				}
				break
			}
		}
	}
	if (tamanho >= 3) {
		for (let c = 0; c < res.length; c++) {
			console.log(res[c])
			if (res[c] == key[2]) {
				var l3 = res[c]
				console.log(`Terceiro caractere --> ${l3}`)
				let suaSenha = l1 + l2 + l3
				if (tamanho == 3) {
					console.log(`Encontrado!\nSua sehha é ${suaSenha}`)
				}
				break
			}
		}
	}
	if (tamanho >= 4) {
		for (let c = 0; c < res.length; c++) {
			console.log(res[c])
			if (res[c] == key[3]) {
				var l4 = res[c]
				console.log(`Quarto caractere --> ${l4}`)
				let suaSenha = l1 + l2 
				if (tamanho == 4) {
					console.log(`Encontrado!\nSua sehha é ${suaSenha}`)
				}
				break
			}
		}
	}

	return ''
}



console.log(quebrar(chave))
