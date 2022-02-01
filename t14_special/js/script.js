function displayVal() { 
    let n = prompt('Enter number from 1 to 4 only'); 
    if (n < 1 || n > 4) {
        alert('Wrong input'); 
    }
    else {
        if (n == 1) {
            n = n * 2 / 'a';     
            alert(`${n}`);     
        } 
        else if (n == 2) {
            n = n - n / 0;
            alert(`${n}`);
        }  
        else if (n == 3) {
            n = 0 * Infinity;
            alert(`${n}`);
        }  
        else if (n == 4) {
            n = n * 40000000;
            let c = n == Infinity;
            alert(c);
        } 
    }
}
displayVal();