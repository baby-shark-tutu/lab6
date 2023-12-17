function power_of_five() {
    let number = parseInt(document.getElementById('number').value);
    let power = Math.log(number) / Math.log(5);

    if (Number.isInteger(power) == true) {
        document.getElementById('result').innerHTML = 'Результат: 1';
    } else {
        document.getElementById('result').innerHTML = 'Результат: 0';
    }
}