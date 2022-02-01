function solver(a,b,c,d,e) {
    if (arguments.length != 5) {
        return "Wrong input";
    }
    if (typeof arguments[0] != "number") {
        return "Wrong input";
    }
    if (typeof arguments[1] != "number") {
        return "Wrong input";
    }
    if (typeof arguments[2] != "number") {
        return "Wrong input";
    }
    if (typeof arguments[3] != "number") {
        return "Wrong input";
    }
    if (typeof arguments[4] != "number") {
        return "Wrong input";
    }
    var x = a ** 2 - 5 * b * c + d / 3 + e;
    return Number.parseFloat(x).toFixed(2);
}
alert(solver('3', 2, 0.5, 8, 1));
// // displays 1724.83

// alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
// // displays "Wrong input"

// alert(solver(40, -9, 0.5, 7));
// // displays "Wrong input"

// alert(solver(40, 10, 0.5, 7, -10));
// // displays 1567.33