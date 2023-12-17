var rows = 0;
var columns = 0;
var matrix = [];
// ввод матрицы с клавиатуры
function input_matrix() {
    rows = parseInt(document.getElementById('rows').value);
    columns = parseInt(document.getElementById('columns').value);
    matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        var values = prompt(`Введите элементы ${i + 1} строки через пробел:`).split(' ');
        if (values.length !== columns) {
            alert(`Ошибка: Введено неправильное количество значений. Пожалуйста, введите ${columns} значений.`);
            return; // Завершаем функцию, если количество введенных значений не соответствует количеству столбцов
        }
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = parseFloat(values[j]);
        }
    }
}
// вывод матрицы
function output_matrix() {
    var out_1 = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            console.log(matrix[i][j]);
            out_1 += matrix[i][j] + ' ';
        }
        out_1 += '<br>';
    }
    document.querySelector('.out_1').innerHTML = out_1;
}
// нахождение максимального элемента матрицы
function find_max_elem() {
    var max_elem = matrix[0][0];
    var max_index = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (max_elem < matrix[i][j]) {
                max_elem = matrix[i][j];
                max_index = i;
            }
        }
    }
    document.getElementById('max_elem').innerHTML = 'Максимум: ' + max_elem;
    matrix.splice(max_index, 1);
}
// вывод матрицы с удаленной строкой
function output_matrix_2() {
    var out_2 = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < columns; j++) {
            out_2 += matrix[i][j] + ' ';
        }
        out_2 += '<br>';
    }
    document.querySelector('.out_2').innerHTML = out_2;
}