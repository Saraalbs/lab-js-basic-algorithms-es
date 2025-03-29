let hacker1 = "Javi";
let conductor = `El nombre del controlador es ${hacker1}`;
console.log(conductor);

let hacker2 = "Berto";
let navegante = `El nombre del navegante es ${hacker2}`;
console.log(navegante);

// console.log(hacker1.length)
// console.log(hacker2.length)

if (hacker1.length >= hacker2.length) {
  console.log(
    `El conductor tiene el nombre más largo, ${hacker1.length} tiene  caracteres`
  );
} else if (hacker1.length <= hacker2.length) {
  console.log(
    `Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres`
  );
} else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`
  );
}

console.log(hacker1.toUpperCase().split(""));
console.log(hacker2.split("").reverse());

let v1 = "El nombre del conductor va primero.";
let v2 = "Yo, el navegador va primero definitivamente.";
let v3 = "¿Qué? ¿Los dos tienen el mismo nombre?";

let cadenas = [v1, v2, v3];
cadenas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(cadenas);
