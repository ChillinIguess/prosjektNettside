


const container = document.getElementById("produktContainer");

for (let produkt of produkter){
    container.innerHTML +=`
    <div class="produktkort">
    img src="${produkt.bilde}" alt="${produkt.navn}">
    <h2>${produkt.navn}</h2>
    <p>${produkt.beskrivelse}</p>
    <p>${produkt.pris}kr</p>
    <p>På lager: ${produkt.lager}</p>
   </div>
    `;
}
