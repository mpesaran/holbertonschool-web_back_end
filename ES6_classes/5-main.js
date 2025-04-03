import Building from './5-building';

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return "Evacuate immediately!";
  }
}

try {
  new Building(200); // Should throw "Class is of abstract type and cannot be instantiated"
} catch (error) {
  console.log(error.message); // Expected output
}

try {
  const building = new TestBuilding(300); // Should not throw error
  console.log(building.evacuationWarningMessage()); // Should print "Evacuate immediately!"
} catch (error) {
  console.log(error.message); // Unexpected
}