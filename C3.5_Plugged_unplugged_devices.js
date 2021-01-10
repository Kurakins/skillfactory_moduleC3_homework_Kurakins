class ElectricalDevice {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = true;
  }
  // Methode - das Gerät ist eingeschaltet
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  // Methoede - das Gerät ist ausgeschaltet
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

// Device 1
class Lamp extends ElectricalDevice {
  constructor (name, brand, power) {
    super(name, power);
    this.brand = brand;
    this.isPlugged = true;
  }
}

// Device 2
class Computer extends ElectricalDevice {
  constructor(name, brand, power, type) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.isPlugged = true;
  }
}

// Device: lamp
const tableLamp = new Lamp("Table lamp", "Funke", 15);

// Device: computer
const homePC = new Computer("Table PC", "Dell", 180, "working PC");

// Lampe ausschalten
tableLamp.unplug();

// PC einschalten
homePC.plugIn();

// Ergebnis
console.log(homePC)
console.log(tableLamp)