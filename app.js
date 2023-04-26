const result = document.getElementById(`result`);
function makePassword(upper, lower, num, sym, length) {
    let result = '';
    const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCharacters = `abcdefghijklmnopqrstuvwxyz`;
    const numbers = `0123456789`;
    const symbols = `!@#$%^&*(){}[]=<>/,.`
    let randomChars = ``;
    if (upper) randomChars += upperCharacters;
    if (lower) randomChars += lowerCharacters;
    if (num) randomChars += numbers;
    if (sym) randomChars += symbols;
    const charactersLength = randomChars.length;
    if (charactersLength == 0) alert(`Please enter an option`);
    for (i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const generate = document.getElementById(`generate`);
generate.addEventListener(`click`, () => {
    const upper = document.getElementById(`uppercase`).checked;
    const lower = document.getElementById(`lowercase`).checked;
    const num = document.getElementById(`numbers`).checked;
    const sym = document.getElementById(`symbols`).checked;
    const length = document.getElementById(`length`).value;
    result.innerText = makePassword(upper, lower, num, sym, length);
});

const clipboard = document.getElementById(`clipboard`);
clipboard.addEventListener(`click`,  () => {
    navigator.clipboard.writeText(result.innerText);
});