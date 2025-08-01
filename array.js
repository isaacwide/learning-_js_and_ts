var numbers = [1, 2, 3];
var names = ['Dani', 'Miguel', 'Maria'];
var imprimir = function (n, x) {
    if (n < 0) {
        return 'Acciones no permitidas';
    }
    else {
        var result = '';
        for (var i = 0; i < n; i++) {
            result = x + ' ' + result;
        }
        return result;
    }
};
for (var i = 0; i < 3; i++) {
    console.log(imprimir(numbers[i], names[i]));
}
