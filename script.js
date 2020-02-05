const results = document.querySelector('#result');
const UNInum = [48, 57];
const UNIupper = [65, 90];
const UNIlower = [97, 122];
const UNIsym = [33, 47];

document.querySelector('#generate').addEventListener('click', () => {
    const length = document.querySelector('#length').value;
    const upper = document.querySelector('#uppercase').checked;
    const lower = document.querySelector('#lowercase').checked;
    const numbers = document.querySelector('#numbers').checked;
    const symbols = document.querySelector('#symbols').checked;

    const randomSelector = [];
    const password = [];

    

    if(upper === true) {
        for(let i = UNIupper[0]; i <= UNIupper[1]; i++){
        randomSelector.push(i)
    }
    }

    if(lower === true) {
        for(let i = UNIlower[0]; i <= UNIlower[1]; i++){
        randomSelector.push(i)
    }
    }

    if(numbers === true) {
        for(let i = UNInum[0]; i <= UNInum[1]; i++){
        randomSelector.push(i)
    }
    }

    if(symbols === true) {
        for(let i = UNIsym[0]; i <= UNIsym[1]; i++){
        randomSelector.push(i)
    }
    }

    for (let i = 0; i< length; i++) {
        password.push(String.fromCharCode(randomSelector[Math.floor(Math.random()*randomSelector.length)]))
    }
    results.textContent = password.join('');

})

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = results.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password Copied to Clipboard');
});
