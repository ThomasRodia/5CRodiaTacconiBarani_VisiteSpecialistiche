const createTabella = (parentElement) => {
    let data = null;
    console.log(parentElement);
    let header = "";
    
    return {
        build: (dati) => {
            data = dati;
        },
        creaheader: () => {
            header = "<table class='table' border='1'><thead>";
            header += "<th>ORE</th>";
            header += data.map(t => `<th>${t}</th>`).join(""); // Uso corretto delle template literals
            header += "</thead><tbody>";
            console.log(parentElement);
            parentElement.innerHTML = header;
        },
        crea: (listadata, hours) => {
            console.log("List data = "+ listadata);
            let Row = "";
            let key= Object.keys(listadata);//ottieni le chiavi del dizionario che dovrà essere formato da data###ora###nome 
            for (let i = 0; i < listadata; i++) {
                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "</tr>" + "\n";
                Row += htmlRow;
              //  console.log("ciao", Row);
            }
            parentElement.innerHTML = header + Row + "</tbody></table>"; // Aggiungi le righe alla tabella
        },
        aggiorna:(dizz)=>{
            let qualcosa;
            for(let i=0;i<qualcosa;i++){
                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "</tr>" + "\n";
                Row += htmlRow;
            }
        }
    };
}

console.log(document);

let table = createTabella(document.getElementById("tabelle"));
table.build(["LUNEDÌ", "MARTEDÌ", "MERCOLEDÌ", "GIOVEDÌ", "VENERDÌ"]);
table.creaheader();
let hours = ["8", "9", "10", "11", "12"];
table.crea(hours.length, hours); // Passa la lunghezza di hours per creare il numero corretto di righe
