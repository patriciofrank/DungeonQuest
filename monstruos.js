class Monstruos{
    constructor(imagen,nombre,vida,golpe,agilidad){
       this.imagen=imagen
       this.nombre=nombre
       this.vida=vida
       this.golpe=golpe
       this.agilidad=agilidad    
 }
 }

let mostruo1= new Monstruos("/img/monstruos.png/GoblinJr.png","Goblin jr",1000,35,25)
let mostruo2= new Monstruos("/img/monstruos.png/GoblinGuerrero.png","Goblin Guerrero",1300,45,25)
let mostruo3= new Monstruos("/img/monstruos.png/GoblinCampeon.png","Goblin Campeon",1800,55,20)
let mostruo4= new Monstruos("/img/monstruos.png/GoblinCapitan.png","Goblin Capitan",2100,65,15)
let mostruo5= new Monstruos("/img/monstruos.png/Troll.png","Troll",1500,65,25)
let mostruo6= new Monstruos("/img/monstruos.png/Orco.png","Orco",1900,85,25)
let mostruo7= new Monstruos("/img/monstruos.png/Ogro.png","Ogro",2000,120,25)
let mostruo8= new Monstruos("/img/monstruos.png/Golem.png","Golem",4000,75,15)
let mostruo9= new Monstruos("/img/monstruos.png/lizardMan.png","Lizard Man",3500,75,65)
let mostruo10= new Monstruos("/img/monstruos.png/Naga.png","Naga",4400,135,75)
let mostruo11= new Monstruos("/img/monstruos.png/DragonBorn.png","Dragonoid",6000,175,85)
let mostruo12= new Monstruos("/img/monstruos.png/Dragon.png","Dragon",10000,275,95)

const piso1 = [];

piso1.push(mostruo1);
piso1.push(mostruo2);
piso1.push(mostruo3);
piso1.push(mostruo4);

console.table(piso1)

const piso2 = [];

piso2.push(mostruo5);
piso2.push(mostruo6);
piso2.push(mostruo7);
piso2.push(mostruo8);

console.table(piso2)

const piso3=[];

piso3.push(mostruo9);
piso3.push(mostruo10);
piso3.push(mostruo11);
piso3.push(mostruo12);

console.table(piso3)

let monstruosPiso1=document.getElementById("monstruos");
for(const mons of piso2){
    let select=document.createElement("div");
    select.className="card col-sm-6 col-md-6 col-lg-3";
    select.innerHTML=`
      <div class="card" style="width: 18rem;">
         <img src="${mons.imagen}" class="card-img-top text-center" alt="Imagen${mons}">
         <div class="card-body text-center">
               <h5 class="card-title">Criatura: ${mons.nombre}</h5>
               <p class="card-text">Vida: ${mons.vida}</p>
               <p class="card-text">Golpe ${mons.golpe}</p>
               <p class="card-text">Agilidad ${mons.agilidad}</p>
         </div>
      </div>
    `;
    selector.append(monstruosPiso1);
} 