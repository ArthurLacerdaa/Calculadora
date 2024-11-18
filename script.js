function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const sanitizedExpression = display.value.replace(/[^0-9+\-*/().]/g, '');
        const result = new Function('return ' + sanitizedExpression)();

        if (result === Infinity || isNaN(result)) {
            throw new Error("Resultado inválido");
        }

        display.value = result;
    } catch (e) {
        alert("Erro: " + (e.message || "Entrada inválida"));
        clearDisplay();
    }
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculateResult();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    });
});
