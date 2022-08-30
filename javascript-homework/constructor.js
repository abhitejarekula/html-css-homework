/*
function Animal (color,eyes,legs) {
    this.color = color;
    this.eyes = eyes;
    this.legs = legs;
    this.sleep = function () {
        return 'this animal is asleep'
    }
    this.eat = function () {
        return 'nom nom'
    }
}
const Dog = new Animal("black",2,4)
console.log(Dog)
console.log(Dog.sleep())
console.log(Dog.eat())
const Cat = new Animal("Brown",2,4)
console.log(Cat)
console.log(Cat.sleep())
console.log(Cat.eat())
const Sheep = new Animal("White",2,4)
console.log(Sheep)
console.log(Sheep.sleep())
console.log(Sheep.eat())
*/

function Bird (color,eyes,legs) {
    this.color = color;
    this.eyes = eyes;
    this.legs = legs;
    this.sleep = function () {
        return 'this animal is asleep'
    }
    this.eat = function () {
        return 'nom nom'
    }
    this.setName = function (name) {
        this.name = name
    }
    this.getName = function () {
        return this.name
    }
}
const Bird1 = new Bird("white",2,2)
const Bird2 = new Bird("multicolor",2,2)
const Bird3 = new Bird("Brown",2,2)

console.log(Bird1)
console.log(Bird1.eat())
console.log(Bird1.sleep())
Bird1.setName('SWAN')
console.log(Bird1.getName())

console.log(Bird2)
console.log(Bird2.eat())
console.log(Bird2.sleep())
Bird2.setName('Peacock')
console.log(Bird2.getName())

console.log(Bird3)
console.log(Bird3.eat())
console.log(Bird3.sleep())
Bird3.setName('Chicken')
console.log(Bird3.getName())