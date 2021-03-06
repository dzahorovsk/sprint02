function getAnswer(question, wrongAnswer, correctAnswer) {
    return(`${question}\nwrong: ${wrongAnswer}\ncorrect: ${correctAnswer}\n\n`);
}

const a = '15';
const b = 4;
const c = true;
const d = 'a';
const e = 'B';
const f = '';

let answer = 'Not my type\n\n';

answer += getAnswer('a+b=?',a + b, sum=Number(a) + b);
answer += getAnswer('a+c=?', a + c, sum=Number(a[0]) + Number(c));
answer += getAnswer('e+d+e+d=?', e + d + e + d, e + d + Number(e) + d);
answer += getAnswer('c+f=?', c + f, String(Number(c)) + f.length);

alert(answer);

/* The web page must display:
Not my type

a+b=?
wrong: 154
correct: 19

a+c=?
wrong: 15true
correct: 2

e+d+e+d=?
wrong: BaBa
correct: BaNaNa

c+f=?
wrong: true
correct: 10
*/