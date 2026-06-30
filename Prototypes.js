let Computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: Computer, 
};
let tomHardware = {};

// console.log('lenovo' , Computer.__proto__);


let genericCar = {tyres: 4};

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla,genericCar) ;

// console.log('tesla' , tesla);
// console.log('genericCar' , genericCar);
// console.log('tesla' , Object.getPrototypeOf(tesla));


