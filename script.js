function addCharacter(character) {
    let output = document.getElementById('output');
    output.value += character;
}

function backspace() {
    let output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
}

function clearInput() {
    let output = document.getElementById('output');
    output.value = '';
}
