function init() {
    let solar = prompt('Is this a planet in the solar system?'); 
    let ring = prompt('Does this planet have a ring system?'); 
    let satellite = prompt('Does this planet have a satellite?'); 
    let people = prompt('Do people live on this planet?'); 
    function displayPlanet() { 
            if (solar.toLowerCase() == 'yes' && ring.toLowerCase() == 'no' && satellite.toLowerCase() == 'yes' && people.toLowerCase() == 'yes') {
                alert('This is Earth');
            }
            else if (solar.toLowerCase() == 'yes' && ring.toLowerCase() == 'no' && satellite.toLowerCase() == 'no' && people.toLowerCase() == 'no') {
                alert('This is Venus');
            }
            else if (solar.toLowerCase() == 'yes' && ring.toLowerCase() == 'yes' && satellite.toLowerCase() == 'yes' && people.toLowerCase() == 'no') {
                alert('This is Saturn');
            }
            else {
                alert('Didn\'t recognize!');
            }
    }
    displayPlanet();
}
init(); 