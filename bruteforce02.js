let chave = "cupixo"
let dicionario =  ["a", "e", "i", "o", "u", "ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qa", "qe", "qi", "qo", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xu", "za", "ze", "zi", "zo", "zu"]

/*
for (i1 in dicionario) {
	let s1 = dicionario[i1]
	for (i2 in dicionario) {
		let s2 = dicionario[i2]
		for (i3 in dicionario) {
			let s3 = dicionario[i3]
			x = s1 + s2 + s3
			if (x == chave) {
				console.log('Encontrei!')
				break
			}
		}
	}
}
*/

function procurar(c) {
	s1 = 0
	if (s1 < dicionario.length) {
		var i1 = dicionario[s1]
		s1++
		if (s1 == 'zu') {
			s1 = 0
			let s2 = 0
			var i2 = dicionario[s2]
			s2++
			if (s2 == 'zu') {
				s1 = 0
				s2 = 0
				let s3 = 0
				var i3 = dicionario[s3]
				s3++
				var x = i1 + i2 + i3
				console.log(x)
			}
			
		}
		
	}
	

	if (x == c) {
		console.log(`Essa é sua chave: ${x}`)
	}
	
	return procurar()
	}
	
	

procurar(chave)