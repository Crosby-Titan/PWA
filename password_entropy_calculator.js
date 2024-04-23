const inputField = document.getElementById("input_field");
const outputField = document.getElementById("result_field");
const confirmButton = document.getElementById("calculate_button");

const startUpperCaseCode = 65;
const endUpperCaseCode = 90;

const startLowerCaseCode = 97;
const endLowerCaseCode = 122;

const startNumberCode = 48;
const endNumberCode = 57;

const startSpecialSymbolCode = 33;
const endSpecialSymbolCode = 63;

const totalChars = (endLowerCaseCode - startLowerCaseCode) + 1;
const totalNumbers = (endNumberCode - startNumberCode) + 1;
const totalSpecialSymbols = (endSpecialSymbolCode - startSpecialSymbolCode) + 1;

function calculateEntropy(password){

    let H = 0.0;

    for(let i = 0;i < password.length;i++){
        let probability = (!isDigit(password.charAt(i)) ? (isSpecialSymbol(password.charAt(i)) ? 1 / totalSpecialSymbols : 1 / totalChars) : 1/totalNumbers);
        let log2 = Math.log2(probability);

        H += (probability * log2);
    }

    return Math.fround(Math.abs(H));

};

function dataValidation(data){

    if(data == null || data == undefined)
        return false;

    for(let i = 0; i < data.length;i++){

        let char = data.charAt(i);

        if(!(isLowerCase(char) || isUpperCase(char) || isDigit(char) || isSpecialSymbol(char)))
            return false;

    }

    return true;
}

function isLowerCase(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startLowerCaseCode && code <= endLowerCaseCode);
}

function isUpperCase(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startUpperCaseCode && code <= endUpperCaseCode);

}

function isDigit(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startNumberCode && code <= endNumberCode);
}

function isSpecialSymbol(symbol){

    if(symbol == null || symbol == undefined)
        return false;

    if(symbol.length != 1)
        return false;

    let code = symbol.charCodeAt(0);

    return (code >= startSpecialSymbolCode && code <= endSpecialSymbolCode);
}

confirmButton.addEventListener("click", ()=>{
    
    if(!dataValidation(inputField.value)){
        alert("Неверно заполнено поле пароля");
        outputField.value = 0.0;
        return;
    }

    outputField.value = calculateEntropy(inputField.value);
});