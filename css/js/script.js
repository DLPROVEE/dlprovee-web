/*====================================
DL PROVEE
JavaScript
====================================*/

/*=========================
HEADER AL HACER SCROLL
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});


/*=========================
BOTÓN VOLVER ARRIBA
=========================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
FORMULARIO → WHATSAPP
=========================*/

const form = document.getElementById("quoteForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value;
const empresa=document.getElementById("empresa").value;
const correo=document.getElementById("correo").value;
const telefono=document.getElementById("telefono").value;
const mensaje=document.getElementById("mensaje").value;

const texto=

`Hola DL Provee.

Mi nombre es ${nombre}

Empresa: ${empresa}

Correo: ${correo}

Teléfono: ${telefono}

Solicitud:

${mensaje}`;

window.open(

`https://wa.me/573133667358?text=${encodeURIComponent(texto)}`,

"_blank"

);

});

}


/*=========================
AÑO AUTOMÁTICO FOOTER
=========================*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
