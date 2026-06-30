
// JAVASCRIPT PROTOTYPES 

// 1. Prototype:
// - A prototype is an object that stores shared methods and properties.
// - It allows multiple objects to use the same methods instead of creating copies.

// 2. Why Prototypes?
// - Saves memory.
// - Avoids duplicate functions.
// - Makes code reusable.

// 3. Prototype Chain:
// When a property/method is not found in an object, JavaScript looks in:
// Object → Prototype → Object.prototype → null

// 4. prototype vs __proto__

// prototype:
// - Belongs to constructor functions/classes.
// - Used to define shared methods.

// __proto__:
// - Belongs to objects.
// - Points to the object's prototype.

// Example:
// obj.__proto__ === Constructor.prototype   // true

// 5. new Keyword:
// When 'new' is used:
// - Creates a new object.
// - Links it to Constructor.prototype.
// - Sets 'this' to the new object.
// - Returns the object.

// 6. Classes:
// JavaScript classes internally use prototypes.
// Methods written inside a class are stored on the class prototype.

// Key Point:
// Prototype = Shared object for code reuse.
// Prototype Chain = JavaScript's way of finding properties and methods.
