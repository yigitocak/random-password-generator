const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "@#$%^&*()_+~|}{[]></-="
const length = 16

const allChar = upperCase + lowerCase + numbers + symbols

function createPassword (){
    let password = ""

    while (length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    console.log(password)
}

createPassword()