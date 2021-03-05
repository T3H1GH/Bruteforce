let chave = "cupixo"
let abc = "aeioubcdfghjklmnpqrstvwxyz"
let res = abc.split("")

function quebrar(senha) {
  
  let key = senha.split("")
	var arrkey = []
	for (s in key) {
	  
	  
	}
	
	let tamanho = key.length
	if (tamanho >= 1) {
		for (c in res) {
			console.log(res[c])
			if (res[c] == key[0]) {
				arrkey.push(res[c])
				console.log(`Primeiro caractere --> ${l1}`)
				if (tamanho == 1) {
					console.log(`Encontrado!\nSua sehha é ${l1}`)
				}
				break
			}
		}
	}