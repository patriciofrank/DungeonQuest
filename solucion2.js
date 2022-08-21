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





function noDisplay(){
   let borrado=document.querySelector("#borrado1") 
    borrado.style= `display:none`;
 }
function noDisplay1(){
    let borrado2=document.querySelector("#opcionesRazas") 
    borrado2.style= `display:none`;
}
function noDisplay2(){
    let borrado2=document.querySelector("#opcionesRazas") 
    borrado2.style= `display:none`;
}

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
   //Seleccion de personaje
}
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

function eligeRaza(){
    let boton=document.getElementsByClassName("btnPrueba")

    const busqueda1=personajes.filter((item)=>(item.raza == (boton.value)));
    
    boton.onclick=()=>{
        
    }
}
function busquedaRaza(choice){
    personajes.filter ((item)=> item.raza == (choice.nombre));
};
// const busqueda1 = cadauna.filter ((b)=> b.clase == (clasePersonaje));
// console.log(busqueda2)
//Hasta aca funciona


// const busqueda2=busqueda1.filter((item)=>(item.clase == (botonP.value)));
// botonP.onclick=()=>{
//     busqueda2;
  
//       console.log(busqueda2)
// }

// function crearPersonaje(){
//     let miCharter=document.getElementById("miPersonaje");
    // let nombrech=document.createElement("div")
    // nombrech.className=("mb-3");
    // nombrech.innerHTML=`  
    // <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Elige el nombre de tu personaje">
    // `;
//     for(const cada of busqueda2){
//         let charter=document.createElement("div");
//         charter.className="card col-sm-6 card col-md-6 col-lg-3";
//         charter.innerHTML=`
//        <div class="card" style="width: 100%;"> 
//             <div>
//               <img src="${cada.imagen}" class="card-img-top" alt="${cada.clase}${cada.raza}">
//             </div>
//             <div class="card-body text-center">
//                 <h5 class="card-title">Clase: ${cada.clase}</h5>
//                 <p class="card-text">Vitada: ${cada.vida}</p>
//                 <p class="card-text">Daño Fisico ${cada.golpeF}</p>
//                 <p class="card-text">Daño Magico ${cada.golpeM}</p>
//                 <p class="card-text">Vitalidad: ${cada.vitalidad}</p>
//                 <p class="card-text">Fuerza ${cada.fuerza}</p>
//                 <p class="card-text">Magia ${cada.magia}</p>
//                 <p class="card-text">Agilidad ${cada.agilidad}</p>
//             </div>
//             <button  value=${cada.clase} class="btnPersonaje btn btn-primary">
//             Prueba
//             </button>
//        </div>
//         `;
//         miCharter.append(charter);
//     }
//     }

//    function crearBoton(array){
//     let botonP=document.createElement("button");
//     botonP.className=("btn btn-primary")
//     botonP.innerText="Elegir"
//     botonP.value=`${array.clase}`
//     slectt.append(botonP)
 
//    }