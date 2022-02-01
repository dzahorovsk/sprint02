const varRegex1 = /[a-zA-Z]/; 
const varRegex2 = /[0-9]/;
const varRegex3 = /\W/;
const varRegex4 = /^male$/;
const varRegex5 = /^female$/;
const varRegex6 = /^0/;
function displayName() { 
    let animal = prompt('What animal is the superhero most similar to?'); 
    if (animal.length >= 21 || varRegex2.test(animal) || varRegex3.test(animal)) {
        alert('Iput is not valid!');    
        return;
    }
    else {
        let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.'); 
        if (gender.length != 0 && varRegex4.test(gender.toLowerCase()) === false && varRegex5.test(gender.toLowerCase()) === false) {
            alert('Iput is not valid!'); 
            return;
        }
        else {
            let age = prompt('How old is the superhero?'); 
            if (age.length >= 6 || varRegex1.test(age) || varRegex3.test(age) || varRegex6.test(age)) {
                alert('Iput is not valid!'); 
                return;
            }
            else if(age < 18 && gender.toLowerCase() === 'male') {
                        let description = 'boy'
                        alert(`The superhero name is: ${animal}-${description}!`);  
            }
            else if(age >= 18 && gender.toLowerCase() === 'male') {
                    let description = 'man'
                    alert(`The superhero name is: ${animal}-${description}!`);  
            }
            else if(age < 18 && gender.toLowerCase() === 'female') {
                    let description = 'girl'
                    alert(`The superhero name is: ${animal}-${description}!`);  
            }
            else if(age >= 18 && gender.toLowerCase() === 'female') {
                    let description = 'woman'
                    alert(`The superhero name is: ${animal}-${description}!`);  
            }
            else if(age < 18 && gender === '') {
                    let description = 'kid'
                    alert(`The superhero name is: ${animal}-${description}!`);  
            }
            else if(age >= 18 && gender === '') {
                    let description = 'hero'
                    alert(`The superhero name is: ${animal}-${description}!`);  
            }
            else {
                alert('This is impossible!!!');
            }
        }    
    }
}
displayName();