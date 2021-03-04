var res = document.querySelector('div#res')
function clicar() {
    res.innerHTML = 'começando...'
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let silabas = []
    let pos = 0
    let cpos = 0
    function criarSilabas() {
        if (silabas.length < 105) {
        silabas.push(consoantes[cpos] + vogais[pos])
		pos ++
    	if (pos == 5) {
	        cpos++
		    pos = 0
		}
        criarSilabas()
        res.innerHTML += `${silabas}`
    }
    criarSilabas()
    } 
    
}

