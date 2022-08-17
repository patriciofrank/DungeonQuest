//Tipos de Clases Array
class OFICIOS{
    constructor(imagen,nombre,vitalidad,magia,fuerza,agilidad){
       this.imagen=imagen
       this.nombre=nombre
       this.vitalidad=vitalidad
       this.magia=magia
       this.fuerza=fuerza
       this.agilidad=agilidad
    }
 }
 let mago= new OFICIOS("img/personajes-seleccion/Magos.png","Mago",8,19,8,15);
 let guerrero=new OFICIOS("img/personajes-seleccion/Guerreros.png","Guerrero",20,0,20,10)
 let picaro=new OFICIOS("img/personajes-seleccion/Asesinos.png","Picaro",10,10,10,20)
 let paladin=new OFICIOS("img/personajes-seleccion/Paladines.png","Paladin",12,12,13,13)
 const clases=[]
 clases.push(mago);
 clases.push(guerrero);
 clases.push(picaro);
 clases.push(paladin);
 
 console.table(clases)


//FUNCION PARA SELECCIONAR LAS VARIABLES DE LA CLASE ELEGIDA
function claseElegida(disponibles1,elegida2){
   for (const ofi of disponibles1) {
      if(ofi.nombre == elegida2){
         return ofi;
      }
   }
}


//Ver clases disponibles
let seleccion=document.getElementById("opcionesClases");
for(const clase of clases){
    let slect=document.createElement("div");
    slect.className="card col-sm-6 card col-md-6 col-lg-3";
    slect.innerHTML=`
   <div class="card" style="width: 18rem;"> 
   <div>
   <img src="${clase.imagen}" class="card-img-top" alt="...">
   </div>
   <div class="card-body text-center">
         <h5 class="card-title">Raza: ${clase.nombre}</h5>
         <p class="card-text">Vitalidad: ${clase.vitalidad}</p>
         <p class="card-text">Fuerza ${clase.fuerza}</p>
         <p class="card-text">Magia ${clase.magia}</p>
         <p class="card-text">Agilidad ${clase.agilidad}</p>
      </div>
   </div>
    `;
    seleccion.append(slect);
}

let selectorClase= document.getElementById("selectorclases")

selectorClase.onchange=()=> {console.log(selectorClase.value)};

let clasePersonaje= selectorClase.value

console.log(clasePersonaje)

const classPersonaje = claseElegida (clases , clasePersonaje)
console.log (classPersonaje)