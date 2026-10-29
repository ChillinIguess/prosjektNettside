
function oppdaterAntall() {
    document.getElementById("antallKurv").textContent =
    handlekurv.length;
}

const knapper = document.querySelectorAll(".kjopKnapp");
const container = document.getElementById("produktContainer");

for (let produkt of produkter){
    container.innerHTML +=`
    <div class="produktkort">
    img src="${produkt.bilde}" alt="${produkt.navn}">
    <h2>${produkt.navn}</h2>
    <p>${produkt.beskrivelse}</p>
    <p>${produkt.pris}kr</p>
    <p>På lager: ${produkt.lager}</p>
    <button class="kjopKnapp" data-id="$(produkt.id)">
    Legg i handlekurv
    </button>
 
   </div>
    `;
}

document.querySelectorAll(".kjopKnapp").forEach(knapp =>{

    knapp.addEventListener("click", () => {

        let id = Number(knapp.dataset.id);
         let valgtProdukt = produkter.find(
            
            
             produkt => produkt.id === id)
             console.log("Produkt-id", id)
         ;
        handlekurv.push(valgtProdukt);
        oppdaterAntall();
        console.log(valgtProdukt);
        


        console.log("Knappen ble trykket");
    });
    });

function oppdaterAntall(){
    document.getElementById("antallKurv").textContent =
    handlekurv.length;
}