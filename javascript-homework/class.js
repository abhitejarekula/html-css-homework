class Building {
    #hasWalls
    #numofWalls
    #roofShape
    constructor (hasWalls,numofWalls,roofShape) {
        this.#hasWalls = hasWalls;
        this.#numofWalls = numofWalls;
        this.#roofShape = roofShape
    }
    publicSetHasWalls (hasWalls) {
        this.#hasWalls = hasWalls
    }
    publicGetHasWalls () {
        return this.#hasWalls
    }
    publicSetNumofWalls (numofWalls) {
        this.#numofWalls = numofWalls
    }
    publicGetNumofWalls () {
        return this.#numofWalls
    }
    publicSetRoofShape (roofShape) {
        this.#roofShape = roofShape
    }
    publicGetRoofShape () {
        return this.#roofShape
    }
    publicopenDoor () {
        return 'open building door'
    }
    publiccloseDoor () {
        return 'close building door'
    }
}
class Gym extends Building {
    #gymName
    #hasPool
    constructor (hasWalls,numofWalls,roofShape,gymName,hasPool) {
        super(hasWalls,numofWalls,roofShape)
        this.#gymName = gymName;
        this.#hasPool = hasPool
    }
    publicSetGymName (gymName) {
        this.#gymName = gymName
    }
    publicGetGymName () {
        return this.#gymName
    }
    publicSetHasPool (hasPool) {
        this.#hasPool = hasPool
    }
    publicGetHasPool() {
        return this.#hasPool
    }
    publiccloseGym() {
        return 'Gym is closing'
    }
    publicopenGym() {
        return 'Gym is opening'
    }
}
class Bank extends Building {
    #numOfVault
    #numOfStaff
    #name
    constructor (hasWalls,numofWalls,roofShape,numOfVault,numOfStaff,name) {
        super(hasWalls,numofWalls,roofShape)
        this.#numOfVault = numOfVault ;
        this.#numOfStaff = numOfStaff ; 
        this.#name = name
    }
    publicSetNumOfVault (numOfVault) {
        this.#numOfVault = numOfVault
    }
    publicGetNumOfVault () {
        return this.#numOfVault
    }
    publicSetNumOfStaff (numOfStaff) {
        this.#numOfStaff = numOfStaff
    }
    publicGetNumOfStaff() {
        return this.#numOfStaff
    }
    publicSetName (name) {
        this.#name = name
    }
    publicGetName() {
        return this.#name
    }
    publiccloseBank() {
        return 'Bank is closing'
    }
    publicopenBank() {
        return 'Bank is opening'
    }
}
const myGym = new Gym("Yes",4,"Round","Bright", true)
console.log(myGym)
console.log(myGym.publicGetGymName())
const myBank = new Bank("Yes",4,"Oval",50,25,"Money")
console.log(myBank)
console.log(myBank.publicGetHasWalls())
console.log(myBank.publicGetRoofShape())