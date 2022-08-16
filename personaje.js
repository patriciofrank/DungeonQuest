//Definir stats del personaje

const sumaStats=(a,b)=>{return (a+b)};


class miPersonaje{
   constructor(nombre,vitalidad,magia,fuerza,agilidad){
      this.nombre=nombre
      this.raza=razaPersonaje.nombre
      this.clase=classPersonaje.nombre
      this.vitalidad=vitalidad
      this.magia=magia
      this.fuerza=fuerza
      this.agilidad=agilidad    
}
}
//Evento seleccionar nombre de personaje
let nombrePersonaje= document.getElementById("nombrePersonaje")
let btnNombre= document.getElementById("btnNombre")

nombrePersonaje.onchange=()=> {console.log(nombrePersonaje.value)};

btnNombre.onclick=()=>{location.reload()}

 let nombreElegido= nombrePersonaje.value

//let nombreElegido=prompt("elegi el nombre de tu personaje")
//let nombreElegido="Evanos"
let personajeVitalidad=sumaStats(classPersonaje.vitalidad,razaPersonaje.vitalidad)
let personajeMagia=sumaStats(classPersonaje.magia,razaPersonaje.magia)
let personajeFuerza=sumaStats(classPersonaje.fuerza,razaPersonaje.fuerza)
let personajeAgilidad=sumaStats(classPersonaje.agilidad,razaPersonaje.agilidad)

const personajeStats=[]



let personajecreado= new miPersonaje(nombreElegido,personajeVitalidad,personajeMagia,personajeFuerza,personajeAgilidad);
personajeStats.push(personajecreado);

console.log(nombreElegido)
console.log(personajeVitalidad)
console.log(personajeMagia)
console.log(personajeFuerza)
console.log(personajeAgilidad)
console.log(personajeStats)

//alert("Estas son las estadisticas de tu personaje :"+JSON.stringify(personajeStats))
let vidaPerdonaje = personajeVitalidad * 20
let golpePersonaje = personajeFuerza * 15
let magiaPersonaje = personajeMagia *15


//Imagenes personajes
class imagen{
   constructor(imagen,raza,clase){
      this.imagen=imagen
      this.raza=raza
      this.clase=clase    
}
}

let img1= new imagen("img/personajes-seleccion/E.Asesino.png","Elfo","Picaro");
let img2= new imagen("img/personajes-seleccion/E.Guerrero.png","Elfo","Guerrero");
let img3= new imagen("img/personajes-seleccion/E.Mago.png","Elfo","Mago");
let img4= new imagen("img/personajes-seleccion/E.Paladin.png","Elfo","Paladin");
let img5= new imagen("img/personajes-seleccion/En.Asesino.png","Enano","Picaro");
let img6= new imagen("img/personajes-seleccion/En.Guerrero.png","Enano","Guerrero");
let img7= new imagen("img/personajes-seleccion/En.Paladin.png","Enano","Paladin");
let img8= new imagen("img/personajes-seleccion/En.Mago.png","Enano","Mago");
let img9= new imagen("img/personajes-seleccion/G.Asesino.png","Gnomo","Picaro");
let img10= new imagen("img/personajes-seleccion/G.Guerrero.png","Gnomo","Guerrero");
let img11= new imagen("img/personajes-seleccion/G.Mago.png","Gnomo","Mago");
let img12= new imagen("img/personajes-seleccion/G.Paladin.png","Gnomo","Paladin");
let img13= new imagen("img/personajes-seleccion/H.Paladin.png","Humano","Paladin");
let img14= new imagen("img/personajes-seleccion/H.Guerrero.png","Humano","Guerrero");
let img15= new imagen("img/personajes-seleccion/H.Mago.png","Humano","Mago");
let img16= new imagen("img/personajes-seleccion/H.Asesino.png","Humano","Picaro");

const imagenes=[]

imagenes.push(img1);
imagenes.push(img2);
imagenes.push(img3);
imagenes.push(img4);
imagenes.push(img5);
imagenes.push(img6);
imagenes.push(img7);
imagenes.push(img8);
imagenes.push(img9);
imagenes.push(img10);
imagenes.push(img11);
imagenes.push(img12);
imagenes.push(img13);
imagenes.push(img14);
imagenes.push(img15);
imagenes.push(img16);

console.table(imagenes)
console.log(personajeRaza)
console.log(clasePersonaje)

const busqueda1= imagenes.filter((a)=>a.raza==(personajeRaza));
console.log(busqueda1)

const busqueda2 = busqueda1.filter ((b)=> b.clase == (clasePersonaje));
console.log(busqueda2)


//Parte visual Html de la creacion del personaje 

//Ver Personaje elegido 
let elec=document.getElementById("personajeCreado");
for(const personaje of personajeStats ){
let eleccion=document.createElement("div");

eleccion.innerHTML=`

   <div class="card " >
    <div class="row">
         <div id="fotoPersonaje" class="cardImg text-center ">

         </div>
         <div class="text-center">
            <div class="card-body text-center">
               <h4 class="card-title">Nombre: ${personaje.nombre}</h4>
               <h5 class="card-text">Clase:  ${personaje.clase}</h5>
               <h5 class="card-text">Raza: ${personaje.raza}</h5>
               
           
                  <p class="card-text">Vida: ${vidaPerdonaje}</p>
                  <p class="card-text">Golpe fisico: ${golpePersonaje}</p>
                  <p class="card-text">Golpe magico: ${magiaPersonaje}</p>
            

               
               <p class="card-text">Vitalidad: ${personaje.vitalidad}</p>
               <p class="card-text">Fuerza: ${personaje.fuerza}</p>
               <p class="card-text">Magia: ${personaje.magia}</p>
               <p class="card-text">Agilidad: ${personaje.agilidad}</p>
                  
               <div class="text-center">
                <button class="btn btn-primary">Elegir</a>
               </div>
            </div>   
         </div>
      </div>
   </div>   
`;
elec.append(eleccion);
}

let fotoElegida=document.getElementById("fotoPersonaje");
const nuevaImagen = document.createElement("img");
nuevaImagen.className=("card-img-top")
nuevaImagen.src=busqueda2[0].imagen;
fotoElegida.append(nuevaImagen);