/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  Vehicle.toString = function () {
  console.log(brand.toString(), model.toString(), year.toString(), mileage.valueOf());
  };
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
}

// Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>

// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  return Vehicle.apply(this.brand, this.model, this.year, this.mileage);
  this.fuelType = fuelType;
  this.speed = speed;
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
}
Vehicle.prototype.Car = function () {
  return this.brand, this.model, this.year, this.fuelType;
}
  Car.accelerate = 70;
  console.log(`Автомобіль ${Car.brand} ${Car.model} прискорився до швидкості ${Car.speed} км/год`);


Car.brake = 30;
  console.log(`Автомобіль ${Car.brand} ${Car.model} зменшив до швидкості ${Car.speed} км/год`)

// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.

// Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год

// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

let car = {
  brand: "Audi",
  model: "A6",
  year: 2018,
  mileage: 30000,
  fuelType: "Petrol",
  speed: 0,
}
console.log(car.toString().valueOf());
// Викличемо функції toString та valueOf об'єкта car

// Використовуємо методи для прискорення та передаємо 50
console.log(Car.speed = 50);

// Використовуємо методи для гальмування та передаємо 20
console.log(Car.brak = 20);

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Truck.prototype.Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
}

// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
Truck.specific = 50;
if(Truck.specific > Truck.towingCapacity) {
  console.log("Навантаження занадто важке для буксирування");
} else {
  console.log("Тягнення навантаження...");
}
// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
  const myTruck = {
    brand: "Toyota",
    model: "Tundra" ,
    year: 2019,
    mileage: 20000,
    color: "Red",
    engineType: "V8",
    towingCapacity: 10000,
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    doors: 4,
    weight: 5600,
  }
  myTruck.tow = myTruck.towingCapacity - 2000;
  myTruck.tow = myTruck.towingCapacity + 2000;
// Викликаємо метод tow з вагою меншою за towingCapacity

// Викликаємо метод tow з вагою більшою за towingCapacity

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
let kilometers = 0;
Car.drive = kilometers + kilometers;
console.log(`Подорожуємо ${kilometers} кілометрів у ${Car.brand} ${Car.model}`);
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if(!new.target) {
    return new ElectricCar(brand, model, year, mileage, batteryCapacity);
  }
  return Car.call(this, brand,model,year,mileage);
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
}

// Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh

// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */


console.log(ElectricCar.toString());
// Викликаємо метод toString об'єкту tesla та виводимо в консоль
