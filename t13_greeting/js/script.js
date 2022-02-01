const varRegex1 = /^[A-Za-z]+\s[A-Za-z]+$/; 
const varRegex2 = /(^|\s)\S/g;
function displayName() { 
    let name = prompt('Enter your first name and last name'); 
    if (varRegex1.test(name)) {
        function capitalize(str) {
          let newname = name.toLowerCase();  
          name = newname.replace(varRegex2, function(a) {return a.toUpperCase()});
          return name;
        }
        alert(capitalize(name)); 
        console.log(capitalize(name));
    }
    else {
        alert('Wrong input!');   
        console.log('Wrong input!');
    }
}
displayName();