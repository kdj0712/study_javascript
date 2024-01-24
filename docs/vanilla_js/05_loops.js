// for
let i=0;
i<10;
i++; 

//  |
//  V
for (let i=0; i<10; i++ ){

}

// 리터럴 방식 (리스트 사용)
for (let param of list) {

}

// learning after object
const animals_array = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];


for (let animal_object of animals_array) {
    // console.log(`<tr><td>animal_object["name"]</td><td>animal_object["species"]</td></tr>`);
    console.log(animal_object);
}