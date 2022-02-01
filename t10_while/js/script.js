let n = Number(prompt('Enter simple number','4'));
let i = 1;
let reslt = '';
do {
	reslt += n + ` x ${i} = ` + n * i + `\n`;
	i++;
} while (i <= 10);
alert(`The multiplication table for the number: ${n}\n${reslt}`);