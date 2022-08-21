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

//Parte visual
//Ver razas disponibles
function verRazas(){

 let selector=document.getElementById("opcionesRazas");
 let tituloRaza=document.createElement("div");
    tituloRaza.innerHTML =`<h2 class="text-center">Elige la Raza</h2>`;
    selector.append(tituloRaza)
for(const cadauna of razas){
  let select=document.createElement("div");
  select.className="col-sm-6 col-md-6 col-lg-3";
  select.innerHTML=`
    <div class="card" style="width: 18rem;">
       <img src="${cadauna.imagen}" class="card-img-top text-center" alt="Imagen${cadauna}">
       <div class="card-body text-center">
             <h5 class="card-title">Raza: ${cadauna.nombre}</h5>
             <p class="card-text">Vitalidad: ${cadauna.vitalidad}</p>
             <p class="card-text">Fuerza ${cadauna.fuerza}</p>
             <p class="card-text">Magia ${cadauna.magia}</p>
             <p class="card-text">Agilidad ${cadauna.agilidad}</p>
       </div>
       <div class="text-center">
           <button type="submit" class=" btn btn-primary" value="${cadauna.nombre}">Elegir Raza</a>
        </div>
    </div>
  `;
  selector.append(select);
} 
}
let start= document.getElementById("btnEmpezar")
 
start.onclick=()=>{verRazas()};




