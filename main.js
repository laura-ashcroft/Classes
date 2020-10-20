class Kitchen {
    constructor(height, width, walls, doors, colours) {
        this.height = height;
        this.width = width;
        this.walls = walls;
        this.doors = doors;
        this.colours = colours;
    }
    viewKitchen() {
        console.log('Welcome to my kitchen')
    }
}
const myKitchen = new Kitchen ('3m', '5m', 4, 1, 'White');

class Cupboard extends Kitchen {
    constructor(height, width, shelves, doors, materials, colours, handles, buttons) {
    super(height, width, doors, colours)
        this.height = height;
        this.width = width;
        this.shelves = shelves;
        this.doors = doors;
        this.materials = materials;
        this.colours = colours;
        this.handles = handles;
        this.buttons = buttons;
        this.doorOpen = false;
        this.cold = false;
        this.hot = false;
        this.freeze = false;
    }

    openDoor() {
        this.doorOpen = true;
    }
    shutDoor() {
        this.doorOpen = false;
    }
    coolDown() {
        this.cold = true;
    }
    heatUp() {
        this.hot = true;
    }
    freezeIt() {
        this.freeze = true;
    }
    viewCupboard() {
        console.log(`Here's my ${this.colours} cupboard!`)
    }
}

class TemperatureCupboard extends Cupboard {
    constructor (height, width, shelves, doors, materials, colours, handles, buttons, dial) {
        super(height, width, shelves, doors, materials, colours, handles, buttons);
        this.cold = true;
        this.dial = dial;
        this.light = false;
    }
    openDoor() {
        super.openDoor();
        this.light = true;
    }
    shutDoor() {
        super.shutDoor();
        this.light = false;
    }
}


const oven = new Cupboard('100cm', '100cm', '3', '1', 'Glass and metal', 'Black and silver', '1', '3');
console.log(oven);

const fridge = new TemperatureCupboard('180cm', '60cm', '5', '2', 'Plastic and metal', 'White', '2', '1', '1')
console.log(fridge);
 