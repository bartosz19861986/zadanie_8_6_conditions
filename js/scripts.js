var a = 110;
var b = 10;
var value;

value = (a * a) - (2 * a * b) - (b * b);

console.log('Result = ' + value);

if (value > 0) {
    console.log('Wynik dodatni!');
} else if (value < 0) {
    console.log('Wynik ujemny!');
} else {
    console.log('Wartość równa zero');
}