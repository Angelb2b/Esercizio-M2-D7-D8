/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//PRIMA PARTE
/* Qui si inizia con una funzione per inseire al suo interno il ciclo 'for' di ricerca per località e posizione */
function jobsearcher(location, position) {
  let result = [];
  for (let i = 0; i < jobs.length; i++) {
    /* Come richiesto la ricerca è stata resa 'case insensitive' in modo da non essere influenzata da lettere minuscole e maiuscole quando l'utente va a riempire i campi di cui ha bisogno */
    let localita = jobs[i].location.toLowerCase();
    let titolo = jobs[i].title.toLowerCase();
    /* All'interno di questo ciclo inserendo questo 'if' ho permesso al ciclo di filtrare i risultati includendo qualsiasi inseirmento scritto dall'utente per poi essere inserito nel result */
    if (titolo.includes(position) && localita.includes(location)) {
      result.push({
        title: jobs[i].title,
        location: jobs[i].location,
      })
    }
  }
  let count = result.length;
  return { result, count };
}

// SECONDA PARTE
/* Per fare in modo che le funzioni sopra potessano interagire con il DOM bisogna indicare da prima le nuove variabili e poi catturando gli ellementi presenti nell'HTML.
Tutto questo per raccogliere le richieste dell'utente e mostrare poi i risutati sottoforma di lista */
let titoli = document.getElementById("tname");
let luoghi = document.getElementById("lname");
let button = document.getElementById("btn");
let input = document.getElementsByClassName("myInput");
let risultato = document.getElementById("output");
/* Una volta creati gli array bisogna creare la funzione che va a prendere i risultati della prima parte andando a restituire gli output sottoforma di lista */
function output() {
  let search = jobsearcher(luoghi.value, titoli.value);
  /* Per aiutare l'utente è utile sottolineargli che per cercare quello che vuole deve completare almeno uno dei campi di ricerca,
  pertanto bisogna indirizzarlo alla compilazione di almeno un campo di ricerca ed è stato fatto con un 'if' 'else' */
  if (luoghi.value === "" && titoli.value === "") {
    window.alert("Riempi almeno uno dei due campi!")
  } else {
    for (let i = 0; i < search.count; i++) {
      let text = document.createElement("li");
      text.innerText = "Titolo:\n" + "-" + search.result[i].title + "\n\n" +
        "Luogo:\n" + "-" + search.result[i].location;
      risultato.appendChild(text);
    }
    /* Infine con quanto sotto si mostreranno i risultati trovati */
    let contatore = document.createElement("p");
    contatore.innerText = search.count + " Risultati trovati";
    risultato.appendChild(contatore);
  }
}
/* Per evitare di mantenere tutte le ricerche che si fannno con questa funzione si sovrascrive ogni ricerca */
function pulizia() {
  risultato.innerHTML = "";
}
/* Infine per dare il via a tutto bisogna aggiungere degli eventListener così da rendere il tutto funzionabile */
function main() {
  button.addEventListener('click', () => {
    pulizia();
    output();
  });
  /* Per rendere l'esperienza dell'utente più facile ho aggiunto una semplice pressione del tasto invio per avviare la ricerca */
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
      }
    });
  }
}
window.onload = main();