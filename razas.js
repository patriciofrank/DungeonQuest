//Tipos de Raza array
class RAZA{
    constructor(imagen,nombre,vitalidad,magia,fuerza,agilidad){
       this.imagen=imagen
       this.nombre=nombre
       this.vitalidad=vitalidad
       this.magia=magia
       this.fuerza=fuerza
       this.agilidad=agilidad
    }
 }
 let Humano=new RAZA ("img/personajes-seleccion/Humanos.png","Humano",0,0,0,0);
 let Elfo=new RAZA("img/personajes-seleccion/Elfos.png","Elfo",-2,+2,-2,+2)
 let Enano=new RAZA("img/personajes-seleccion/Enanos.png","Enano",+3,-5,+3,-1)
 let Gnomo=new RAZA("img/personajes-seleccion/Gnomos.png","Gnomo",-3,+4,-5,+4)
 const razas=[]
 razas.push(Humano);
 razas.push(Elfo);
 razas.push(Enano);
 razas.push(Gnomo);
 
 console.table(razas)
 
 
 //Definir Raza elegida
 
 //let personajeRaza=prompt("Elige que raza Humano,Elfo,Enano,Gnomo");

 function razaElegida(disponibles,elegida){
    for (const raz of disponibles) {
       if(raz.nombre== elegida){
          return raz;
       }
    }
 }
 

 //alert("La raza y stats de la raza elegida :"+JSON.stringify(razaPersonaje));
 
//Parte visual
//Ver razas disponibles
let selector=document.getElementById("opcionesRazas");
for(const cadauna of razas){
    let select=document.createElement("div");
    select.className="card col-sm-6 col-md-6 col-lg-3";
    select.innerHTML=`
      <div class="card" style="width: 18rem;">
         <img src="${cadauna.imagen}" class="card-img-top text-center" alt="Imagen${cadauna}">
         <div class="card-body text-center">
               <h5 class="card-title">Raza: ${cadauna.nombre}</h5>
               <p class="card-text">Vitalidad: ${cadauna.vitalidad}</p>
               <p class="card-text">Fuerza ${cadauna.fuerza}</p>
               <p class="card-text">Magia ${cadauna.magia}</p>
               <p class="card-text">Agilidad ${cadauna.agilidad}</p>
               <div class="text-center">
               <button class="btnRaza btn btn-primary">Elegir</a>
               </div>
         </div>
      </div>
    `;
    selector.append(select);
} 
let selectorRazas= document.getElementById("selectorRazas")
let btnRaza= document.getElementById("btnRaza")

selectorRazas.onchange=()=> {console.log(selectorRazas.value)};

btnRaza.onclick=()=>{location.reload()}

 let personajeRaza= selectorRazas.value

console.log("Elegiste"+ personajeRaza)

const razaPersonaje = razaElegida(razas,personajeRaza);
console.log(razaPersonaje);

