document.addEventListener('DOMContentLoaded', () => {
    // DOM is Loaded
    // Storing elements needed in variables
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('result');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                display.value = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput),toString();
                    display.value = currentInput;
                } catch {
                    display.value = 'Error';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

});