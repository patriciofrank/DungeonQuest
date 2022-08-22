   let nombreElegido;
   let miPersonaje=[]
   if(localStorage.getItem("miPersonaje")!=null){
      
    recuperarPersonaje();

   }
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
        <div class="card" style="width: 100%;">
            <img src="${cadauna.imagen}" class="card-img-top text-center" alt="Imagen${cadauna}">
                <div class="card-body text-center">
                <h5 class="card-title">Raza: ${cadauna.nombre}</h5>
                <p class="card-text"><b>Descripcion :</b></br> ${cadauna.desc}</p>
                </div>
            <div class="text-center">
                <button id="btn${cadauna.nombre}" class=" btn btn-primary" value="${cadauna.nombre}" >Elegir Raza</a>
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
console.log("tu personaje :"+miPersonaje)

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

function elegirNombre(){
        let charterName=document.getElementById("input")
        nombreElegido=charterName.value;
        miPersonaje[0].nombre=nombreElegido
        console.log(nombreElegido)
         if(nombreElegido!=""){
            let nombrePersonaje=document.getElementById("nombre")
            let nombreAsignado=document.createElement("h2")
            nombreAsignado.innerText=`${nombreElegido}`
            nombrePersonaje.append(nombreAsignado)
    }
    crearPersonaje();
    console.log(miPersonaje)
    
}
function crearPersonaje(){
    let crear= document.getElementById("crearPersonaje");
    let botonCrear = document.createElement("button");
    botonCrear.className="btn btn-primary ";
    botonCrear.innerText ="Crear"
    crear.append(botonCrear);

    botonCrear.onclick=()=>{
        localStorage.setItem("miPersonaje",JSON.stringify(miPersonaje))
        console.log(miPersonaje);
    }
}

function recuperarPersonaje(){
    let recPers =document.createElement("button");
    recPers.className="btn-primary";
    recPers.innerText="Recuperar Personaje"
    recPers.onclick=()=>{

        miEleccion(miPersonaje)
    }

}