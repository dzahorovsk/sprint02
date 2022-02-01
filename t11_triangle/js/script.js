function trianglePrint() {
    let n = prompt('Enter length');
    let str = '';
    let reslt = '';
    for (let i = 0; i < n; i++) {
        str += '*'; 
        reslt += `${str}\n`;   
    }
    alert(`${reslt}`);
}
trianglePrint();