const myToken = '4b85f2ba-f4e9-4ad7-8b80-562030ac3c33';
const myKey = 'tesoro';
const booker = createForm(document.getElementById("book"));//form su cui lavorare @simone Tacconi 
const set ='http://ws.progettimolinari.it/cache/set';
const get='http://ws.progettimolinari.it/cache/get';
informazioni={}// dove mettere tutte le info @thomas rodia


const prenota=(dati,noinativo)=>{//dati presi dalla form es=>Data###Orario###Tipo Di Visita###Nome
 let data=dati.split("###");
 if(informazioni[dati]===null){
    return -1;
 }else{
informazioni[dati]=nominativo;
table.render();
return 1;
 }
}


const salvaDati = (data, prenotazioni) => {
    return new Promise((resolve, reject) => {
      prendiDati(myKey, myToken)// prima di salvare i nuovi dati prendi i veccchi dati 
        .then(vecchiDati => {
          const nuoviDati = {
            ...vecchiDati,
            [data]: prenotazioni
          };


          // a questo punto metti sulla cache i nuovi dati 
          fetch(set, {//Da cambiare url 
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
      fetch(get, {// da cambiare
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



// quando la form viene compilata 
  booker.onsubmit((values) => {
  prendiDati(myKey, myToken)// prendi i dati dalla cache
  .then(data => {
    const key = values[0];//prendi la chiave
    if (data[key]) {
      available = data[key];
    }
    const arrayDiff = sottraiArray(available, values.slice(1));
    console.log(arrayDiff);
//da capire cosa fa
    if (positivo(arrayDiff)) {
      response.innerHTML = "ok";
      salvaDati(values[0], arrayDiff).then(() => {
        initTable().then(tableStructure => {
          table1.build(tableStructure);
          table1.render();
        });
      });
    } else {
      response.innerHTML = "ko";// dai errore
    };
  }).then(() => {
    table1.render();//fai la render della tabella
  });
});