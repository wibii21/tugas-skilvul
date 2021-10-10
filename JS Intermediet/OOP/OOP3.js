class Phone {
    constructor(brand, storage, ram){
    this.brand = brand
    this.storage = storage
    this.ram = ram
    }
    getBrandName() {
    
        return this.brand 
    }
   
    setBrandName(a) {
       this.brand = a
    }
    printSpecification() {
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }
    setSpecification(b, c){
        this.storage = b
        this.ram = c
    }
 }


const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();