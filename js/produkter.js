let handlekurv = [];


const produkter = [
    {id: 1, 
        navn: "Tastatur",
         pris: 599,
          bilde: "bilder/tastatur.jpg",
           beskrivelse: "Et enkelt tastatur",
            lager: 4},

    {id: 2,
         navn: "Mus",
          pris: 299,
           bilde: "bilder/mus.jpg",
            beskrivelse: "mus med tråd",
             lager: 8},

    {id: 3,
         navn: "Skjerm",
          pris: 2499,
           bilde: "bilder/skjerm.svg",
            beskrivelse: "24 tommers skjerm",
             lager: 3},

    {id: 4,
         navn: "RAM",
          pris: 1300,
           bilde: "bilder/ram.jpg",
            beskrivelse: "RAM moduell",
             lager: 6 }
];

handlekurv.push(produkter[2]);
console.log(handlekurv)

