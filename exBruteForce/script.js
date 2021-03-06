let res = document.querySelector('div#res')
let senha = document.getElementById('senha')
let abc = document.getElementById('abc')


function clicar() {
    res.innerHTML = ``
    let abc = "aeioubcdfghjklmnpqrstvwxyzAEIOUBCDFGHJKLMNPQRSTVWXYZ1234567890"
    let caracteres = abc.split("")
    let key = senha.value.split("")
    let tamanho = key.length
    var arrkey = []

    
    let select01 = document.createElement('select')
    let select02 = document.createElement('select')
    
    select01.size = 10
    select01.style.width = '200px'
    select01.style.marginLeft = '15px'
    select01.style.marginTop = '20px'
    
    
    select02.size = 10
    select02.style.width = '200px'
    select02.style.marginLeft = '15px'
    select02.style.marginTop = '20px'

    res.appendChild(select01)
    res.appendChild(select02)

 
    criarOption(2, "Caracteres encontrados")
    criarOption(1, `Sua senha tem ${tamanho} caracteres`)
    

    function criarOption(sel, texto) {
        if (sel == 1) {
            item = document.createElement('option')
            item.text += texto
            select01.appendChild(item)
        } else if (sel == 2) {
            item = document.createElement('option')
            item.text += texto
            select02.appendChild(item)
        }
    }
    

    for (s in key) {            
        let cont = Number(s) + 1  
        
        for (c in caracteres) {   
              criarOption(2, caracteres[c])  
              
            if (caracteres[c] == key[s]) {    
                arrkey.push(caracteres[c])   
                criarOption(1, `${arrkey[s]}`)  
                criarOption(2, `Caractere ${cont} encontrado --> ${arrkey[s]}`)   
                break         
            }
        }
        
        if (cont == tamanho) {           
            criarOption(2, `Terminado!`)
            criarOption(1, `Sua sehha é ${arrkey.join('')}`)
        }
    }
}



