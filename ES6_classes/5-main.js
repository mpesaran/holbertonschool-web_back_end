import Building from './5-building.js';

try{
    const b = new Building(100);
    console.log(b);

} 
catch(err) {
    console.log(err)
}

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}