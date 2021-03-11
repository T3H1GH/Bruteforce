let senha = "bsa"
let abc = "aeioubcdfghjklmnpqrstvwxyz"  //AaEeIiOoUuBbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz1234567890!@#$%¨&*()_+-= 
let caracteres = abc.split("")


let key

for (let c in caracteres) {
    let l1 = caracteres[c]
    if (key == senha) {break}
    for (let c in caracteres) {
        let l2 = caracteres[c]
        if (key == senha) {break}
        for (let c in caracteres) {
            let l3 = caracteres[c]
            key = l1 + l2 + l3
            console.log(key)
            if (key == senha) {
                console.log("Encontrado!")
                break
            }
        }
    }
}