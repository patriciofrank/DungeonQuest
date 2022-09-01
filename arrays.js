// Array razas
class RAZA{

  constructor(imagen,nombre,desc){
       this.imagen=imagen
       this.nombre=nombre
      this.desc=desc
    }
  }
  let Humano=new RAZA ("img/personajes-seleccion/Humanos.png","Humano","Son conocidos por su balance de estadisticas brindandoles un equilibrio perfecto para cualquier clase");
  let Elfo=new RAZA("img/personajes-seleccion/Elfos.png","Elfo","Destacados por su agilidad y su magia son letales al momento de ataques furtivos")
  let Enano=new RAZA("img/personajes-seleccion/Enanos.png","Enano","Son una raza poco inteligente pero muy longeba y fuerte")
  let Gnomo=new RAZA("img/personajes-seleccion/Gnomos.png","Gnomo","Amantes de la naturaleza y con una conexion especial con el mana")
  const razas=[]
  razas.push(Humano);
  razas.push(Elfo);
  razas.push(Enano);
  razas.push(Gnomo);
  
  console.table(razas)

  //array personajes

  class PersonajesDisp{
    constructor(nombre,imagen,raza,clase,vitalidad,fuerza,magia,agilidad,){
        this.nombre=nombre
        this.imagen=imagen
        this.raza=raza
        this.clase=clase
        this.vitalidad=vitalidad
        this.fuerza=fuerza
        this.magia=magia
        this.agilidad=agilidad
        this.vida=this.vitalidad*200
        this.golpeF=this.fuerza*15
        this.golpeM=this.magia*15
    }
};

let char1= new  PersonajesDisp("","img/personajes-seleccion/E.Asesino.png","Elfo","Asesino",8,8,12,22);
let char2= new  PersonajesDisp("","img/personajes-seleccion/E.Guerrero.png","Elfo","Guerrero",18,18,2,12);
let char3= new  PersonajesDisp("","img/personajes-seleccion/E.Mago.png","Elfo","Mago",6,6,21,17);
let char4= new  PersonajesDisp("","img/personajes-seleccion/E.Paladin.png","Elfo","Paladin",10,11,14,15);
let char5= new  PersonajesDisp("","img/personajes-seleccion/En.Asesino.png","Enano","Asesino",13,13,5,19);
let char6= new  PersonajesDisp("","img/personajes-seleccion/En.Guerrero.png","Enano","Guerrero",23,23,0,9);
let char7= new  PersonajesDisp("","img/personajes-seleccion/En.Paladin.png","Enano","Paladin",15,16,7,12);
let char8= new  PersonajesDisp("","img/personajes-seleccion/En.Mago.png","Enano","Mago",11,11,14,14);
let char9= new  PersonajesDisp("","img/personajes-seleccion/G.Asesino.png","Gnomo","Asesino",7,5,14,24);
let char10= new PersonajesDisp("","img/personajes-seleccion/G.Guerrero.png","Gnomo","Guerrero",17,15,4,10);
let char11= new PersonajesDisp("","img/personajes-seleccion/G.Mago.png","Gnomo","Mago",5,3,23,19);
let char12= new PersonajesDisp("","img/personajes-seleccion/G.Paladin.png","Gnomo","Paladin",9,8,16,17);
let char13= new PersonajesDisp("","img/personajes-seleccion/H.Paladin.png","Humano","Paladin",12,13,12,13);
let char14= new PersonajesDisp("","img/personajes-seleccion/H.Guerrero.png","Humano","Guerrero",20,20,0,10);
let char15= new PersonajesDisp("","img/personajes-seleccion/H.Mago.png","Humano","Mago",8,8,19,15);
let char16= new PersonajesDisp("","img/personajes-seleccion/H.Asesino.png","Humano","Asesino",10,10,10,20);

const personajes=[]

personajes.push(char1);
personajes.push(char2);
personajes.push(char3);
personajes.push(char4);
personajes.push(char5);
personajes.push(char6);
personajes.push(char7);
personajes.push(char8);
personajes.push(char9);
personajes.push(char10);
personajes.push(char11);
personajes.push(char12);
personajes.push(char13);
personajes.push(char14);
personajes.push(char15);
personajes.push(char16);

console.table(personajes)

// Monstruos Enemigos
class Monstruos{
  constructor(imagen,nombre,vida,golpe,agilidad){
     this.imagen=imagen
     this.nombre=nombre
     this.vida=vida
     this.golpe=golpe
     this.agilidad=agilidad    
}
}

let mostruo1= new Monstruos("img/monstruos.png/GoblinJr.png","Goblin jr",1000,35,25)
let mostruo2= new Monstruos("img/monstruos.png/GoblinGuerrero.png","Goblin Guerrero",1300,45,25)
let mostruo3= new Monstruos("img/monstruos.png/GoblinCampeon.png","Goblin Campeon",1800,55,20)
let mostruo4= new Monstruos("img/monstruos.png/GoblinCapitan.png","Goblin Capitan",2100,65,15)
let mostruo5= new Monstruos("img/monstruos.png/Troll.png","Troll",1500,65,25)
let mostruo6= new Monstruos("img/monstruos.png/Orco.png","Orco",1900,85,25)
let mostruo7= new Monstruos("img/monstruos.png/Ogro.png","Ogro",2000,120,25)
let mostruo8= new Monstruos("img/monstruos.png/Golem.png","Golem",4000,75,15)
let mostruo9= new Monstruos("img/monstruos.png/lizardMan.png","Lizard Man",3500,75,65)
let mostruo10= new Monstruos("img/monstruos.png/Naga.png","Naga",4400,135,75)
let mostruo11= new Monstruos("img/monstruos.png/DragonBorn.png","Dragonoid",6000,175,85)
let mostruo12= new Monstruos("img/monstruos.png/Dragon.png","Dragon",10000,275,95)

const piso1 = [];

piso1.push(mostruo1);
piso1.push(mostruo2);
piso1.push(mostruo3);
piso1.push(mostruo4);
piso1.push(mostruo5);
piso1.push(mostruo6);
piso1.push(mostruo7);
piso1.push(mostruo8);
piso1.push(mostruo9);
piso1.push(mostruo10);
piso1.push(mostruo11);
piso1.push(mostruo12);

console.table(piso1)