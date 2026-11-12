// fetch() devuelve una Promesa
// En este momento su estado es PENDING
/*const miPromesa = fetch("usuarios.json");

console.log(miPromesa); // Promise { <pending> }


//Una Promesa tiene dos métodos para manejar lo que pase:
// - `.then()` para manejar el caso exitoso
// - `.catch()` para manejar el caso de error

fetch("usuarios.json")

  // .then() se ejecuta cuando la Promesa se cumple (FULFILLED)
  // 'response' es el resultado exitoso
  .then(response => {
    console.log("Llegó la respuesta:", response.status);

    // response.json() también devuelve una Promesa
    // por eso encadenamos otro .then()
    return response.json();
  })

  // Este segundo .then() recibe el resultado del return anterior
  .then(usuarios => {
    console.log("Usuarios listos:", usuarios);
  })

  // .catch() se ejecuta cuando la Promesa falla (REJECTED)
  // 'error' describe qué salió mal
  .catch(error => {
    console.error("Algo falló:", error);
  });


   Tenemos dos maneras de manejar promesas: con .then() o con async/await. 
  Ambas hacen exactamente lo mismo por dentro, solo cambia la sintaxis.


  // CON PROMESAS — .then()
fetch("usuarios.json")
  .then(response => response.json())
  .then(usuarios => console.log(usuarios))
  .catch(error => console.error(error));


// CON async/await — exactamente lo mismo por dentro
async function cargarUsuarios() {
  try {
    const response = await fetch("usuarios.json");
    const usuarios = await response.json();
    console.log(usuarios);
  } catch (error) {
    console.error(error);
  }
}

*/


/*

// ejemplo 

console.log("1 - antes del fetch");

fetch("usuarios.json")
  .then(r => r.json())
  .then(d => console.log("3 - datos:", d))
  .catch(e => console.error("Error:", e));

console.log("2 - después del fetch");

*/


console.log("1 - antes del fetch");
fetch("usuarios.json").then(r => r.json()).then(d => console.log("3 - datos:", d));
console.log("2 - después del fetch");