let res = document.querySelector('div#res')
let senha = document.getElementById('senha')
let abc = document.getElementById('abc')


function clicar() {

    if (senha.value.length == 0) {
        alert('Digite uma senha')
    } else {
        res.innerHTML = ``
        let abc = "aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ1234567890!@#$%¨&*()_+-= "
        let caracteres = abc.split("")
        let key = senha.value.split("")
        let tamanho = key.length
        var arrkey = []
    
        
        let select01 = document.createElement('select')
        let select02 = document.createElement('select')
        
        select01.size = 10
        select02.size = 10
    
        res.appendChild(select01)
        res.appendChild(select02)
    
     
        criarOption(1, "Caracteres encontrados:")
        criarOption(2, `Sua senha tem ${tamanho} caracteres`)

        
        function criarOption(sel, texto) {
            item = document.createElement('option')
            item.text += texto
            if (sel == 1) {
                select01.appendChild(item)
            } else if (sel == 2) {
                select02.appendChild(item)
            }
        }
    
    
        for (let s in key) {            
            let cont = Number(s) + 1  
            
            for (let c in caracteres) {   
                criarOption(1, caracteres[c])  

                if (caracteres[c] == key[s]) { 
                    arrkey.push(caracteres[c])   
                    criarOption(2, `${arrkey[s]}`)  
                    criarOption(1, `Caractere ${cont} encontrado --> ${arrkey[s]}`)   
                    if (caracteres.length == Number(c) + 1) {
                        if (caracteres[c] == ' ') {
                        } else {
                            criarOption(1, `Caractere não encontrado`)
                            arrkey.push(undefined)
                        }
                    }
                    break;
                }
            }
            
            if (cont == tamanho) {           
                criarOption(1, `Terminado!`)
                criarOption(2, `Sua sehha é ${arrkey.join('')}`)
            }
        }
        if (tamanho != arrkey.length) {
            let diferença = Number(tamanho) - Number(arrkey.length)
            criarOption(2, `${diferença} Caractere não encontrado`)
        }
        senha.focus()
    }
}