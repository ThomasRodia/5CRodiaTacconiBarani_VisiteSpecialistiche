
const myToken = '4b85f2ba-f4e9-4ad7-8b80-562030ac3c33';
const myKey = 'tesoro';


// creo Dizionario per le tipologie
const specialties = {
  cardiology: "Cardiologia",
  psychology: "Psicologia",
  oncology: "Oncologia",
  orthopedics: "Ortopedia",
  neurology: "Neurologia"
};


function loadSpecialtyTabs() {
  const specialtyContainer = document.getElementById("specialty-tabs");

  // Creazione dei pulsanti utilizzando Object.keys per ottenere le chiavi del dizionario
  let buttonsHTML = '';
  Object.keys(specialties).forEach((key, index) => {
      buttonsHTML += `<button class="specialty-tab${index === 2 ? ' active' : ''}" onclick="loadSpecialty(this)">
          ${specialties[key]}
      </button>`;
  });

  
  specialtyContainer.innerHTML = buttonsHTML;
}

// Funzione per aggiornare la specialità selezionata e la classe `active`
function loadSpecialty(selectedButton) {
  // Rimuove la classe `active` da tutti i pulsanti
  document.querySelectorAll('.specialty-tab').forEach(tab => {
      tab.classList.remove('active');
  });

  // Aggiunge la classe `active` al pulsante cliccato
  selectedButton.classList.add('active');
}


// Inizializza i pulsanti delle specialità al caricamento della paginaf
document.addEventListener("DOMContentLoaded", loadSpecialtyTabs);


/*
const struttura_albergo = {
  data: 10,
  Nominativo: 5
}

let informazioni = {};

function sottraiArray(arr1, arr2) {
  return arr1.map((num, index) => num - arr2[index]);
}

function positivo(arr) {
  return arr.every(num => num >= 0);
}






function controllaCamere(dati) {
  let key = Object.keys(struttura_albergo);
  let info = dati.split(",");
  if (informazioni[info[0]] == ! null) {
    if (
      informazioni[info[0]][key[0]] > info[1] &&
      informazioni[info[0]][key[1]] > info[2] &&
      informazioni[info[0]][key[2]] > info[3]) {
      informazioni[info[0]][key[1]] -= info[1];
      informazioni[info[0]][key[2]] -= info[2];
      informazioni[info[0]][key[3]] -= info[3];
    } else {
      console.log("Impossibile effettuare prenotazione")
    }
  } else {
    informazioni[info[0]] = struttura_albergo;
    controllacamere(dati);
  }
};

function render() {
  camera_singola_input.value = "";
  camera_doppia_input.value = "";
  camera_suit_input.value = "";

  let key = Object.keys(struttura_albergo);
  let chiavi = Object.keys(informazioni);
  let size = chiavi.length;
  let tab = [["Date", key[0], key[1], key[3]]]

  for (let i = 0; i < size; i++) {
    let arr = [chiavi[i], informazioni[chiavi[i]][key[0]], informazioni[chiavi[i]][key[1]], informazioni[chiavi[i]][key[2]]]
    tab.push(arr);
  }

  table1.build(tab);
  table1.rendert();
}









const creaBase = () => {
  let tipiStanze = { "Data": "date" };
  Object.keys(struttura_albergo).forEach(e => tipiStanze[e] = "text");
  return tipiStanze;
}








const table1 = createTable(document.getElementById('tabella'));
const response = document.getElementById("response");
const booker = createForm(document.getElementById("book"));

booker.onsubmit((values) => {

  let available = Object.values(struttura_albergo);

  // Controlla che nn ci siano gia prenotazioni nella cache
  prendiDati(myKey, myToken)
    .then(data => {
      const key = values[0];
      if (data[key]) {
        available = data[key];
      }
      const arrayDiff = sottraiArray(available, values.slice(1));
      console.log(arrayDiff);

      if (positivo(arrayDiff)) {
        response.innerHTML = "ok";
        salvaDati(values[0], arrayDiff).then(() => {
          initTable().then(tableStructure => {
            table1.build(tableStructure);
            table1.render();
          });
        });
      } else {
        response.innerHTML = "ko";
      };
    }).then(() => {
      table1.render();
    });

});


const salvaDati = (data, camere) => {
  return new Promise((resolve, reject) => {
    prendiDati(myKey, myToken)
      .then(vecchiDati => {
        const nuoviDati = {
          ...vecchiDati,
          [data]: camere
        };
        fetch('http://ws.progettimolinari.it/cache/set', {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "key": myToken
          },
          body: JSON.stringify({
            key: myKey,
            value: JSON.stringify(nuoviDati)
          })
        })
          .then(r => r.json())
          .then(result => {
            resolve(result);
          })
          .catch(error => reject(error));
      })
      .catch(error => reject(error));
  });
}





const prendiDati = (myKey, myToken) => {
  return new Promise((resolve, reject) => {
    fetch('http://ws.progettimolinari.it/cache/get', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "key": myToken
      },
      body: JSON.stringify({
        key: myKey
      })
    })
      .then(r => r.json())
      .then(r => {
        const data = JSON.parse(r.result);
        resolve(data);
      })
      .catch(error => reject(error));
  });
}

booker.setLabels(creaBase());
booker.render();


initTable().then(tableStructure => {
  table1.build(tableStructure);
  table1.render();

});

*/
// -----------------------------------------------------------------------------------------------