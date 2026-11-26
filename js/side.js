// side.js

const knapper = document.querySelectorAll(".kjopKnapp");
const container = document.getElementById("produktContainer");
const kurvPopup = document.getElementById("kurvPopup");
const kurvKnapp = document.getElementById("kurvKnapp");
const lukkKurv = document.getElementById("lukkKurv");
const fjern = document.getElementsById("fjern");

function oppdaterAntall() {
    document.getElementById("antallKurv").textContent =
    handlekurv.length;
}

for (let produkt of produkter){
    container.innerHTML +=`
    <div class="produktkort">
    <img src= "${produkt.bilde}" alt="${produkt.navn}">
    <h2>${produkt.navn}</h2>
    <p>${produkt.beskrivelse}</p>
    <p>${produkt.pris}kr</p>
    <p>På lager: ${produkt.lager}</p>
    <button class="kjopKnapp" data-id="${produkt.id}">
    Legg i handlekurv
    </button>
 
   </div>
    `;
}; 

let handlekurv = [];

let total = 0;

document.querySelectorAll(".kjopKnapp").forEach(knapp =>{

    knapp.addEventListener("click", () => {

        let id = Number(knapp.dataset.id);
         let valgtProdukt = produkter.find(
              
            
             produkt => produkt.id === id);
        handlekurv.push(valgtProdukt);
       
        console.log("Du valgte:", valgtProdukt.navn+"!");
        console.log(valgtProdukt.pris);
        
           console.log("Produkt-id", valgtProdukt.id);


        console.log("Knappen ble trykket"); 
        oppdaterAntall();
        console.log(handlekurv);
      
        
        
    });
    });
    
function visHandlekurv(){
    
    const liste = document.getElementById("kurvliste");

   liste.innerHTML= "";
    
    if (handlekurv.length === 0){
       liste.innerHTML="<p>Tomt</p>";
     
    }
    else {
    for (let objekt of handlekurv){
        liste.innerHTML +=`
        <p>
        ${objekt.navn}
        -
        ${objekt.pris} kr </p>
        `; 
        total =  objekt.pris + total;
        
    
     
        
    };
liste.innerHTML +=`<p>Total sum: ${total} kr</p>`};

    
  
};

kurvPopup.addEventListener("click", (event) => {
    if (event.target === kurvPopup){
        kurvPopup.style.display = "none";
        
        total = 0;
    }
});
function oppdaterAntall(){
    document.getElementById("antallKurv").textContent =
    handlekurv.length;
}
kurvKnapp.addEventListener("click", () => {

    visHandlekurv();


    kurvPopup.style.display = "flex";
   

});
lukkKurv.addEventListener("click", () => {
    kurvPopup.style.display = "none";
    total = 0;
});



