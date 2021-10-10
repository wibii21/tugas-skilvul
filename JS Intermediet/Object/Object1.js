const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(nama) {
      return "hello," + nama;
    }
  }
  
  /// EDIT HERE
    person.name = "Hermawan Wibisono";
    person.age = 21;
    person.favDrinks[1] = "Coca-cola";
     
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  