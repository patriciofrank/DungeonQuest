   let nombreElegido;
   let miPersonaje=[]
//    si Hay personaje guardado el el storage Local
   if(localStorage.getItem("miPersonaje")!=null){
   miPersonaje=JSON.parse(localStorage.getItem("miPersonaje"))
   const ultimoCh=miPersonaje.length-1
   recuperarPersonaje(miPersonaje[ultimoCh]);
   }

  
   //Ver razas disponibles

  function verRazas(){
   let selector=document.getElementById("opcionesRazas");
   let tituloRaza=document.createElement("div");
      tituloRaza.innerHTML =`<h2 class="text-center">Elige la Raza</h2>`;
      selector.append(tituloRaza)
    for(const cadauna of razas){
        let select=document.createElement("div");
        select.className="card col-sm-6 col-md-6 col-lg-3";
        select.style="margin-bottom: 1rem"
        select.innerHTML=`
        <div class="card"  style="width: 100%;">
            <img src="${cadauna.imagen}" class="card-img-top text-center" alt="Imagen${cadauna.nombre}">
                <div class="card-body text-center">
                <h5 class="card-title">Raza: ${cadauna.nombre}</h5>
                <p class="card-text"><b>Descripcion :</b></br> ${cadauna.desc}</p>
                </div>
            <div class="text-center">
                <button id="btn${cadauna.nombre}" style="width: 100%;"  class=" btn btn-primary" value="${cadauna.nombre}" >Elegir Raza</a>
            </div>
        </div>
        `;
        selector.append(select);
    } 
     razas.forEach(cadauna => {
        document.getElementById(`btn${cadauna.nombre}`).addEventListener('click',function(){
           console.log (cadauna)
            if(cadauna.nombre!=""){
                const resultado1 = personajes.filter ((item)=> item.raza == (cadauna.nombre));
               
                console.log(resultado1)
                
                if(resultado1!=[0]){
                    verClases(resultado1);
                    noDisplay1();
                   
                }
            }
        })
    });
  }
  let start= document.getElementById("btnEmpezar")
   
  start.onclick=()=>{
    verRazas();
    volver();
    noDisplay();
    noDisplay4();
    
};

//Funcion Ver Clases Segun Raza

function verClases(x){
let selec2=document.getElementById("clase");

let tituloClase=document.createElement("div");
tituloClase.innerHTML =`<h2 class="text-center">Elige la Clase</h2>`;
selec2.append(tituloClase);

    for(const cada of x){
        let botonP=document.createElement("button");
        botonP.className=("btn btn-primary")
        botonP.innerText="Elegir"
        botonP.id=`btn${cada.raza}${cada.clase}`
        let slectt=document.createElement("div");
        slectt.className="card col-sm-6 card col-md-6 col-lg-3";
        slectt.style="margin-bottom: 1rem"
        slectt.innerHTML=`
    <div class="card" style="width: 100%;"> 
            <div>
            <img src="${cada.imagen}" class="card-img-top" alt="${cada.clase}${cada.raza}">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">Clase: ${cada.clase}</h5>
                <p class="card-text">Vitada: ${cada.vida}</p>
                <p class="card-text">Daño Fisico ${cada.golpeF}</p>
                <p class="card-text">Daño Magico ${cada.golpeM}</p>
                <p class="card-text">Vitalidad: ${cada.vitalidad}</p>
                <p class="card-text">Fuerza ${cada.fuerza}</p>
                <p class="card-text">Magia ${cada.magia}</p>
                <p class="card-text">Agilidad ${cada.agilidad}</p>
            </div>
        
    </div>
        `;
        selec2.append(slectt);
        slectt.append(botonP) ;
    }

   //Seleccion de Clase
    x.forEach(cada => {
    document.getElementById(`btn${cada.raza}${cada.clase}`).addEventListener('click',function(){
       
            miEleccion(cada);
            
            noDisplay2();
        })
        } )
    
    
}


//Funciones de borrado

function noDisplay(){
    let borrado=document.querySelector("#borrado1") 
     borrado.style= `display:none`;
  }
 function noDisplay1(){
     let borrado2=document.querySelector("#opcionesRazas") 
     borrado2.style= `display:none`;
 }
 function noDisplay2(){
     let borrado3=document.querySelector("#clase") 
     borrado3.style= `display:none`;
 }
 function noDisplay3(){
    let borrado4=document.querySelector("#Bnombre") 
    borrado4.style= `display:none`;
}
function noDisplay4(){
    let borrado5=document.querySelector("#crearPersonaje button") 
    borrado5.style= `display:none`;
}
function noDisplay5(){
    let borrado6=document.querySelector("#personaje ") 
    borrado6.style= `display:none`;
}
function noDisplay6(){
    let borrado7=document.querySelector("#volver button")
    borrado7.style= `display:none`;
}
//Boton volver
function volver(){
    let volv = document.getElementById("volver");
    let botonEsc = document.createElement("button");
    botonEsc.className="btn btn-primary ";
    botonEsc.innerText ="Volver"
    volv.append(botonEsc);

    botonEsc.onclick=()=>{
        location.reload();
    }
}
//Elegir Personaje
function miEleccion(chart){
    miPersonaje.push(chart)
    let miCharter=document.getElementById("personaje");    
    let charter=document.createElement("div");

    charter.className="card col-sm-12 card col-md-12 col-lg-12";
    charter.innerHTML=`
    <div class="card mb-3" style="max-width: 100%;">
    <div class="row g-0">
      <div class="col-md-8">
        <img src="${chart.imagen}" class="img-fluid rounded-start" alt="${chart.raza}-${chart.clase}">
      </div>
      <div class="col-md-4">
  
        <div id="miPersonaje" class="card-body text-center">
            <h5 class="card-title">Raza:${chart.raza} Clase: ${chart.clase} </h5>
            <p class="card-text">Vitada: ${chart.vida}</p>
            <p class="card-text">Daño Fisico ${chart.golpeF}</p>
            <p class="card-text">Daño Magico ${chart.golpeM}</p>
            <p class="card-text">Vitalidad: ${chart.vitalidad}</p>
            <p class="card-text">Fuerza ${chart.fuerza}</p>
            <p class="card-text">Magia ${chart.magia}</p>
            <p class="card-text">Agilidad ${chart.agilidad}</p>
        </div>
       
   </div>
    `;
    ;
    miCharter.append(charter);
    let chartName=document.getElementById("Bnombre");
    let nombrech=document.createElement("div")
    nombrech.className=("d-grid gap-2 col-10 mx-auto");
    nombrech.innerHTML=`  
    <input type="email" class="col-4 mx-auto" id="input" placeholder="Elige el nombre de tu personaje">
    <button  id="miPersonaje" class="d-grid gap-2 col-2 mx-auto btn btn-primary">
        Elegir
    </button>
    `; 
    chartName.append(nombrech);
    document.getElementById("miPersonaje").addEventListener('click',function(){
        elegirNombre();
        noDisplay3();
    })
}
//Elegir nombre
function elegirNombre(){
        let charterName=document.getElementById("input")
        nombreElegido=charterName.value;
        let posicion=miPersonaje.length-1
        miPersonaje[posicion].nombre=nombreElegido
         if(nombreElegido!=""){
            let nombrePersonaje=document.getElementById("nombre")
            let nombreAsignado=document.createElement("h2")
            nombreAsignado.innerText=`${nombreElegido}`
            nombrePersonaje.append(nombreAsignado)
    }
    crearPersonaje();
    console.log(miPersonaje)
    
}
//Boton de creacion de personaje con grabado en local storage
function crearPersonaje(){
    let crear= document.getElementById("crearPersonaje");
    let botonCrear = document.createElement("button");
    botonCrear.className="btn btn-primary ";
    botonCrear.innerText ="Crear"
    crear.append(botonCrear);

    botonCrear.onclick=()=>{
        localStorage.setItem("miPersonaje",JSON.stringify(miPersonaje))
        console.log(miPersonaje);
        batallaPiso1(miPersonaje[ultimoCh],piso1[1]);
        noDisplay4();
        noDisplay6();
    }
}

function recuperarPersonaje(a){
    let crear= document.getElementById("crearPersonaje");
    let recPers =document.createElement("button");
    recPers.className="btn btn-primary";
    recPers.innerText="Recuperar Personaje"
    crear.append(recPers)
    recPers.onclick=()=>{
            recup(a);
            comenzar();
            volver();
            noDisplay();
            noDisplay4();
        }

}

function recup(a){
    let miCharter=document.getElementById("personaje");    
    let charter=document.createElement("div");

    charter.className="card col-sm-12 card col-md-12 col-lg-12";
    charter.innerHTML=`
    <div class="card mb-3" style="max-width: 100%;">
    <div class="row g-0">
      <div class="col-md-8">
        <img src="${a.imagen}" class="img-fluid rounded-start" alt="${a.raza}-${a.clase}">
      </div>
      <div class="col-md-4">
  
        <div id="miPersonaje" class="card-body text-center">
            <h2 class="card-title">Nombre: ${a.nombre}</h2>
            <h5 class="card-title">Raza: ${a.raza} Clase: ${a.clase} </h5>
            <p class="card-text">Vitada: ${a.vida}</p>
            <p class="card-text">Daño Fisico ${a.golpeF}</p>
            <p class="card-text">Daño Magico ${a.golpeM}</p>
            <p class="card-text">Vitalidad: ${a.vitalidad}</p>
            <p class="card-text">Fuerza ${a.fuerza}</p>
            <p class="card-text">Magia ${a.magia}</p>
            <p class="card-text">Agilidad ${a.agilidad}</p>
        </div>
       
   </div>
    `;
    ;
    miCharter.append(charter);

    }
function alertaBatalla(){
    Swal.fire({
        title: 'Preparate!',
        text: 'Afila tu espada y comienza la batalla',
        imageUrl:("/img/personajes-seleccion/CrossSword.png"),
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'img batalla',
      })
    }
    function comenzar(){
        let btnEmpezar=document.getElementById("volver")
        let botonEmpezar = document.createElement("button");
        botonEmpezar.className="btn btn-primary ";
        botonEmpezar.innerText ="Comenzar!"
        btnEmpezar.append(botonEmpezar);
        botonEmpezar.onclick=()=>{
                alertaBatalla();
                batallaPiso1(miPersonaje[ultimoCh],piso1[1]);
                noDisplay5();
                noDisplay6();
        };
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
   //Funciones de Pelea
function batallaPiso1(a,b){
    let batalla1=document.getElementById("batalla1");    
    let bt1=document.createElement("div");

    bt1.className="card-group";
    bt1.innerHTML=`
        <div class="card">
            <img src="${a.imagen}" class="img-fluid rounded-start" alt="${a.raza}-${a.clase}" style="max-width: 100%;">
            <div class="card-body">
                    <h2 class="card-title">Nombre: ${a.nombre}</h2>
                    <h5 class="card-title">Raza: ${a.raza} Clase: ${a.clase} </h5>
                    <p class="card-text">Vitada: ${a.vida}</p>
                    <p class="card-text">Daño Fisico ${a.golpeF}</p>
                    <p class="card-text">Daño Magico ${a.golpeM}</p>
                    <p class="card-text">Vitalidad: ${a.vitalidad}</p>
                    <p class="card-text">Fuerza ${a.fuerza}</p>
                    <p class="card-text">Magia ${a.magia}</p>
                    <p class="card-text">Agilidad ${a.agilidad}</p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <button class="d-grid gap-4 col-4 mx-auto btn btn-primary">Atacar</button>
            <button class="d-grid gap-4 col-4 mx-auto btn btn-primary">Magia</button>
            <button class="d-grid gap-4 col-4 mx-auto btn btn-primary">Bloquear</button>
            </div>
        </div>
        <div class="card">
            <img src="${b.imagen}" class="img-fluid rounded-start" alt="${b.nombre}">
        <div class="card-body">
                <h2 class="card-title">Nombre: ${b.nombre}</h2>   
                <p class="card-text">Vida: ${b.vida}</p>
                <p class="card-text">Fuerza: ${b.golpe}</p>
                <p class="card-text">Agilidad: ${b.agilidad}</p>
        </div>
    `;
    batalla1.append(bt1);

}


function batalla(per,enem){
let monstruo1=enem
let personajeElegido=per

const  vidaBatallaP = personajeElegido.vida
const  golpeBatallaP = personajeElegido.golpeF
const  magiaBatallaP = personajeElegido.golpeM
const  vidaBatallaM1 = monstruo1.vida
const  golpeBatallaM1 = monstruo1.golpe

const ambosVivos = () => vidaBatallaP != 0 && vidaBatallaM1 != 0
const calcularGolpeP = () => Math.round(Math.random() *100 + golpeBatallaP )
const calcularMagiaP = () => Math.round(Math.random() *100 + magiaBatallaP )
const calcularGolpeM1 = () => Math.round(Math.random() *100 + golpeBatallaM1 )
 
let pasarNivel=document.getElementById("siguienteNivel");
let botonAccion = document.getElementForClass("btnAccion")

let figth = 0

const victoria = () =>  monstruo1.vida  >= 0

while (ambosVivos()){
    figth ++
    const golpePe = calcularGolpeP()
    const golpeMo = calcularGolpeM1()
    const magiaPe = calcularMagiaP()
    
   botonAccion.onclick=()=>{
    
    if (on.click.value="Atacar"){
       console.log ("Atacas al enemigo con un golpe de ${golpeP}.")
       vidaBatallaM1 -= golpePe;
       monstruo1.vida.push=vidaBatallaM1;
       console.log ("El enemigo te ataca y pierdes ${golpeP} de vida.")
       vidaBatallaP -= golpePe;
       miPersonaje.vida.push=vidaBatallaM1;
    }else if (on.click.value="Magia") {
       console.log ("Atacas al enemigo con un ataque magico de ${magiaP}.")
       vidaBatallaM1 -= magiaPe; 
       console.log ("El enemigo te ataca y pierdes ${golpeP} de vida.")
       vidaBatallaP -= golpeMo;
    }else{
		
	console.log("Ataque enemigo bloqueado !")

	}
    }
}

if (victoria()){
    console.log("VICTORIA!!!! HAZ DERROTADO AL OPONENTE!")
    let pasarLvl=document.createElement("div");
    pasarLvl.className="text-center";
    pasarLvl.innerHTML=`
	<button id="btn1-2" class="btn btn-primary">Empezar Aventura</button>
        `
    pasarLvl.append(pasarNivel);	
} else {
    console.log ("PERDISTE , VE A PULIR TUS HABILIDADES Y VUELVE A INTENTARLO")
    let volver=document.createElement("div");
    volver.className="text-center";
    volver.innerHTML=`
	<a href="seleccion.html" class="btn btn-primary">Empezar Aventura</a>
        `
    volver.append(pasarNivel);	
}  
}

const ultimoCh=miPersonaje.length-1;
console.log(ultimoCh)