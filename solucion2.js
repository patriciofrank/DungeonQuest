   let nombreElegido;
   let miPersonaje=[]
   let miCharter;
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
     let borrado=document.querySelector("#opcionesRazas") 
     borrado.style= `display:none`;
 }
 function noDisplay2(){
     let borrado=document.querySelector("#clase") 
     borrado.style= `display:none`;
 }
 function noDisplay3(){
    let borrado=document.querySelector("#Bnombre") 
    borrado.style= `display:none`;
}
function noDisplay4(){
    let borrado=document.querySelector("#crearPersonaje .btn") 
    borrado.style= `display:none`;
}
function noDisplay5(){
    let borrado=document.querySelector("#personaje ") 
    borrado.style= `display:none`;
}
function noDisplay6(){
    let borrado=document.querySelector("#volver .btn")
    borrado.style= `display:none`;
}
function noDisplay7(){
    let borrado=document.querySelector("#nombre")
    borrado.style= `display:none`;
}
function noDisplay8(){
    let borrado=document.querySelector("#crearBtn")
    borrado.style= `display:none`;
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
    botonCrear.id=`crearBtn`;
    botonCrear.className="btn btn-primary ";
    botonCrear.innerText ="Crear";
    crear.append(botonCrear);

    botonCrear.onclick=()=>{
        localStorage.setItem("miPersonaje",JSON.stringify(miPersonaje))
        console.log(miPersonaje);
        noDisplay3();
        noDisplay5();
        noDisplay7();
        noDisplay8();
        alertaBatalla()
        batallaPiso1(miPersonaje[ultimoCh+1],piso1[0]);
        miCharter=miPersonaje[ultimoCh+1]
       
       
    }
}

function recuperarPersonaje(a){
    let crear= document.getElementById("crearPersonaje");
    let recPers =document.createElement("button");
    recPers.className="btn btn-primary";
    recPers.innerText="Recuperar Personaje"
    crear.append(recPers)
    miCharter=a;
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

    function comenzar(){
        let btnEmpezar=document.getElementById("volver")
        let botonEmpezar = document.createElement("button");
        botonEmpezar.className="btn btn-primary ";
        botonEmpezar.innerText ="Comenzar!"
        btnEmpezar.append(botonEmpezar);
        botonEmpezar.onclick=()=>{
                alertaBatalla();
                batallaPiso1(miPersonaje[ultimoCh],piso1[0]);
                noDisplay5();
                noDisplay6();
        };
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
   //Funciones de Pelea

const ultimoCh=miPersonaje.length-1;
console.log(ultimoCh)

function botonesDeAccion(){
    let batallaBtn=document.getElementById("btnB");
    let botoneraB=document.createElement("div");
    botoneraB.style="display:flex";
    botoneraB.innerHTML =`
    <button value="atacar" id="btnAtac" class="btnAccion d-grid gap-4 col-4 mx-auto btn btn-primary">Atacar</button>
    <button value="magia" id="btnMag" class="btnAccion d-grid gap-4 col-4 mx-auto btn btn-primary">Magia</button>
    <button value="bloquear" id="btnBloc" class="btnAccion d-grid gap-4 col-4 mx-auto btn btn-primary">Bloquear</button>
    `;

  batallaBtn.append(botoneraB)
};

function batallaPiso1(a,b){
    let batalla1=document.getElementById("batalla1");   
    let bt1=document.createElement("div");
    bt1.id="inFigth"
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
            <div id="consolBt" class="card-body">
           
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
    botonesDeAccion();
    batalla(a,b);
    
}

function inFigth(a,b){
    let batalla1=document.getElementById("inFigth");   
    batalla1.innerHTML=`
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
            <div id="consolBt" class="card-body">
           
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
     
   victoriaDerrota(a,b);

}




function batalla(per,enem){

const  golpeBatallaP = per.golpeF
const  magiaBatallaP = per.golpeM
const  golpeBatallaM1 = enem.golpe

let calcularGolpeP = () => Math.round(Math.random() *100 + golpeBatallaP );
const calcularMagiaP = () => Math.round(Math.random() *100 + magiaBatallaP );
const calcularGolpeM1 = () => Math.round(Math.random() *100 + golpeBatallaM1 );
const botonAtac = document.getElementById("btnAtac")
const botonMag = document.getElementById("btnMag")
const botonBlock = document.getElementById("btnBloc")


    while((per.vida >= 0 && enem.vida >= 0)){
            let golpePe = calcularGolpeP()
            let golpeMo = calcularGolpeM1()
            let magiaPe = calcularMagiaP()
            let consola=document.getElementById("consolBt")
            let narrador=document.createElement("div")
            consola.append(narrador)

            botonAtac.onclick=()=>{        
              
                let resul=  enem.vida -= golpePe;
                enem.vida.push=resul;
                
                let resul2=   per.vida -= golpeMo;
                per.vida.push=resul2;
             
                Swal.fire({ 
                title: "Atacas al enemigo y realizas "+golpePe+ "de daño a su vida.",
                showConfirmButton: false,
                timer: 0,
                    })
                setTimeout(()=>
                    Swal.fire({ 
                        title: "El enemigo ataca y realiza  "+golpeMo+ "de daño a tu vida.",
                        showConfirmButton: false,
                            }),500)

                inFigth(per,enem)            
            }
        
        botonMag.onclick=()=>{
            
            consola.innerHTML =`<p>Atacas al enemigo con un golpe magico de ${golpePe}. </p>`
            let resul=  enem.vida -= magiaPe;
                enem.vida.push=resul;
                console.log (`El enemigo te ataca y pierdes ${golpeMo} de vida.`)
            let resul2=   per.vida -= golpePe;
            
                per.vida.push=resul2;
             
                inFigth(per,enem)
            }

            botonBlock.onclick=()=>{
                console.log("Ataque enemigo bloqueado !")
                inFigth(per,enem)
            } 

            break;
           
 }
 
} 
//Determinar Resultado de batalla
function victoriaDerrota(a,b){
    if ( (a.vida  >= 0) && (b.vida <=0)){
      setTimeout(() => {
        alertaVictoria(ciclo);
      }, 1500); 
   
    } else if((b.vida >=0 )&& (a.vida  <= 0)){
        setTimeout(() => {
            alertaDerrota();
          }, 1500); 
       	
    }else if((b.vida <=0 )&& (a.vida  <= 0)){
        setTimeout(() => {
            alertaDerrota();
          }, 1500); 
       	
    }
}
// Alertas de Resultado de Batalla
let ciclo = 0;
function alertaVictoria(a){
    ciclo == 12 ? finalBoss() :
    Swal.fire({
        title: 'Victoria!!!',
        text: 'continua con el proximo desafio',
        imageUrl:("img/personajes-seleccion/victoria.jpg"),
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'img batalla',
        allowOutsideClick: false,
        confirmButtonText: 'Continuar',
        denyButtonText: `Abandonar`,
      }).then((result) => {
        
        if (result.isConfirmed) {
            ciclo ++
            subirStats(miCharter);
            pasarNivel1(miCharter,piso1[a]);

        } else if (result.isDenied) {
            location.reload();
        }})
    }
    function alertaDerrota(){
        Swal.fire({
            title: 'Derrota!!!',
            text: 'Entrena un poco mas y vuelve a intentarlo',
            imageUrl:("img/personajes-seleccion/muerto.png"),
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'img batalla',
            allowOutsideClick: false,
            confirmButtonText: 'Volver',
            denyButtonText: `Abandonar`,
          }).then((result) => {
            
            if (result.isConfirmed) {
                location.reload();
            }      
            })
        }
// Funcion Para aumentar stats entre batallas 
    function subirStats(a){
        a.vida =a.vida + 500*ciclo;
        a.fuerza=a.fuerza+ 2*ciclo ;
       a.magia = a.magia+ 2*ciclo;
       a.golpeF= a.golpeF+20;
       a.golpeM=a.golpeM+20;
    }
//Funcion Para pasar de oponente 
     function pasarNivel1(a,b){
        inFigth(a,b);
        batalla(a,b);
   }     
//Alerta de Final de Juego !
    function finalBoss(){
        Swal.fire({
        title: 'Felicitaciones!!!',
        text: 'Haz despejado la mazmorra',
        imageUrl:("img/monstruos.png/victoriaF.jpg"),
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'img batalla',
        allowOutsideClick: false,
        confirmButtonText: 'Continuar',
        denyButtonText: `Abandonar`,
        }).then((result) => {
        if (result.isConfirmed) {
            console.log("juego terminado")
        }  }   )
        } 

    // Alerta inicio de Juego
    function alertaBatalla(){
        Swal.fire({
            title: 'Preparate!',
            text: 'Afila tu espada y comienza la batalla',
            imageUrl:("img/personajes-seleccion/CrossSword.png"),
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'img batalla',
          })
        }


