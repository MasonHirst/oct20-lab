// My cipher is going to turn each letter of a string into the letter (x) spots before that. (x) will be determined by the string, which will always start with a single-digit number.

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let string = '6 I love cryptography!'


//function to encipher the string
function encipher(str) {
    let encipheredStr = str[0]

    let lowerStr = str.toLowerCase()

    for (let i = 1; i < str.length; i++) {
        if (alphabet.includes(lowerStr[i])) {
            let index = alphabet.indexOf(lowerStr[i])
            // console.log(index)

            index -= +lowerStr[0]
            if (index < 0) {
                index += 26
            }
            encipheredStr += alphabet[index]
        } else {
            encipheredStr += lowerStr[i]
        }
    }
    return encipheredStr
}

console.log(encipher(string))


let encipheredStr = encipher(string)



//function to decipher the string
function decipher(str) {
    let decipheredStr = str[0]

    for (let i = 1; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            let index = alphabet.indexOf(str[i])

            index += +str[0]
            if (index > 25) {
                index -= 26
            }

            decipheredStr += alphabet[index]
        } else {
            decipheredStr += str[i]
        }
    }
    return decipheredStr
}

console.log(decipher(encipheredStr))





