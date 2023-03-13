/*
1. A través del siguiente taller, construir un menú en una función
alert que gestione las siguientes opciones de menú referentes al
manejo de los arrays, objetos, funciones y otras operaciones en
JavaScript entre dichos temas.
*/
    function gestionarMenu() {
        let seleccion;
        let edad;
        let name;
        const datos={};
        const comidas=[];
        const lista1=[];
        let nameobjeto;
        let nameobjeto1;
        do {
          seleccion = parseInt(prompt(`--------------MENU--------------
          1.  Lectura de Datos
          2.  Crear Objeto
          3.  Mostrar Objeto
          4.  Crear Array
          5.  Mostrar Array
          6.  Eliminar primer elemento del Array
          7.  Eliminar ultimo elemento del Array
          8.  Eliminar cualquier elemento del Array
          9.  Agregar elemento al comienzo del Array
          10. Agregar elemento al final del Array
          11. Crear Array con objetos
          12. Iterar Array con FOR
          13. Iterar Array con objetos ForEacH
          14. Iterar Array con objetos Map y crear copia
          15. Proceso personal
          0.  Salir`));
      
          switch (seleccion) {
            case 1:
              alert("Seleccionaste la opcion 1. Lectura de Datos")   
              name= prompt("Dime tu nombre");
              edad = Number(prompt("Dime tu edad"));
              alert(`Tu nombre es ${name} y tu edad es ${edad}`);
              console.log(`Tu nombre es ${name} y tu edad es ${edad}`);
              break;
            case 2:
              alert("Seleccionaste la opcion 2. Crear objeto");
              datos.nombre=prompt("Dime tu nombre");
              datos.edad=parseInt(prompt("Dime tu edad"));
              datos.numero=parseInt(prompt("Dime tu numero de telefono"));
              datos.correo=prompt("Dime tu correo")
              alert(`gracias ${datos.nombre} tu objeto a sido creado`);
              console.log(`gracias ${datos.nombre} tu objeto a sido creado`);
               
              break;
            case 3:
              alert("Seleccionaste la opcion 3. Mostrar objeto");
              alert(datos);
              console.log(datos);
              break;
            case 4:
              alert("Seleccionaste la opcion 4. Crear array");
              for (let i = 0; i < 5; i++) {
                let comida=prompt("Dime 5 comidas que te gusten")
                comidas.push(comida);
              }
              alert("Hemos creado un array con tus comidas favoritas")
              break;
            case 5:
              alert("Seleccionaste la opcion 5. Mostrar array");
              alert(comidas);
              console.log(comidas);
              break;
            case 6:
              alert("Seleccionaste la opcion 6. Eliminar primer elemento del array");
              comidas.shift();
              console.log(comidas);
              alert(comidas)
              break;
            case 7:
              alert("Seleccionaste la opcion 7. Eliminar último elemento del array");
              console.log("Seleccionaste la opcion 7. Eliminar último elemento del array");
              comidas.pop();
              console.log(comidas);
              alert(comidas);
              break;
            case 8:
              alert("Seleccionaste la opcion 8. Eliminar cualquier elemento del array");
              console.log("Seleccionaste la opcion 8. Eliminar cualquier elemento del array");
              comidas.splice(1,1);
              alert(comidas)
              console.log(comidas);
              break;
            case 9:
              alert("Seleccionaste la opcion 9. Agregar elemento al comienzo del array");
              console.log("Seleccionaste la opcion 9. Agregar elemento al comienzo del array");
              let nuevoElemento= prompt("Dime que comida deseas agregar")
              comidas.unshift(nuevoElemento);
              alert(comidas);
              console.log(comidas);
              break;
              
            case 10:
              alert("Seleccionaste la opcion 10. Agregar elemento al final del array");
              console.log("Seleccionaste la opcion 10. Agregar elemento al final del array");
              let nuevoElemento1= prompt("Dime que comida deseas agregar al final")
              comidas.push(nuevoElemento1);
              alert(comidas);
              console.log(comidas);
              break;


            case 11:
            const objeto={}
              alert("Seleccionaste la opcion 11 .Crear array con objetos");
              console.log("Seleccionaste la opcion 11 .Crear array con objetos");
              nameobjeto=prompt("ingrese el nombre de su objeto")

              for (let index = 0; index < 3; index++) {
                propiedad1=prompt(`Ingrese la propiedad  de su objeto ${nameobjeto}`);
                value1=prompt(`Ingrese el valor de la propiedad ${propiedad1}`);
                objeto[propiedad1]=value1;
            }
            const objeto1={}
              nameobjeto1 = prompt("ingrese el nombre de su objeto2")

              for (let index = 0; index < 3; index++) {
                propiedad2=prompt(`Ingrese la propiedad  de su objeto ${nameobjeto1}`);
                value2=prompt(`Ingrese el valor de la propiedad ${propiedad2}`);
                objeto1[propiedad2]=value2;
            }
            lista1.push(objeto,objeto1);
              console.log(lista1);
              alert(lista1);
              break;

            case 12:
              console.log("Seleccionaste la opcion 12 .Iterar array con FOR");
              for(let j =0; j<lista1.length; j++){
                console.log(`Los elementos  del objeto ${nameobjeto1}son ${lista1[j].propiedad2}--${lista1[j].value2}`);
                console.log(`Los elementos  del objeto ${nameobjeto}son ${lista1[j].value1}--${lista1[j].value1}`);
              }
              a=lista1.length;
              console.log(a);
              break;
            case 13:
              console.log("Seleccionaste la opcion 13 .Iterar array con objetos ForEacH");
              lista1.forEach((arr) => {console.log(`Iterando con ForEach${arr.propiedad1}-${arr.value1}`);});
              lista1.forEach((arr) => {console.log(`Iterando con ForEach${arr.propiedad2}-${arr.value2}`);});
            
              break;
            case 14:
              alert("Seleccionaste la opcion 14  .Iterar array con objetos Map y crear copia");
              lista1.map((arr) => {console.log(`Iterando con Map${arr.propiedad1}-${arr.value1}`);});
              lista1.map((arr) => {console.log(`Iterando con ForEach${arr.propiedad2}-${arr.value2}`);});
              break;
            case 15:
              alert("Proceso personal");
              // Código para proceso personal
              break;
            case 0:
              alert("No te vayas :(, mira que esto se compone");
              break;
            default:
              alert("Seleccione una opción válida de 0 a 15.");
              break;
          }
        } while (seleccion !== 0);
      }
      
      gestionarMenu();
      