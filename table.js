const get = 'https://ws.cipiaceinfo.it/cache/get';
const createTabella = (parentElement) => {
    let data = null;
    let currentDate = new Date(); 
    let header = "";

    return {
        build: (dati) => {
            data = dati;
        },
        creaheader: () => {
            header = "<table class='table' border='1'><thead>";
            header += "<th>ORE</th>";
            header += data.map(t => `<th>${t}</th>`).join("");
            header += "</thead><tbody>";
            parentElement.innerHTML = header;
        },
        crea: (listadata, hours) => {
            let Row = "";
            let key = Object.keys(listadata);

            for (let i = 0; i < 5; i++) {
                let valoreorariotabella = [];
                for (let j = 0; j < key.length; j++) {
                    let val = key[j].split("###");
                    if (val[1] == hours[i]) {
                        valoreorariotabella.push(listadata[key[j]]);
                    }
                }
                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td>" + valoreorariotabella.join("</td><td>") + "</td></tr>\n";
                Row += htmlRow;
            }
            parentElement.innerHTML = header + Row + "</tbody></table>"; 
        },
        setCurrentDate: (newDate) => {
            currentDate = newDate;
        },
        getCurrentDate: () => {
            return currentDate;
        }
    };
};

async function getDatesForCurrentWeek(currentDate) {
    let dates = [];
    let oggi = new Date(currentDate); 

    for (let i = 0; i < 5; i++) {
        let giorno = ("0" + oggi.getDate()).slice(-2);
        let mese = ("0" + (oggi.getMonth() + 1)).slice(-2);
        let anno = oggi.getFullYear();
        dates.push(`${giorno}/${mese}/${anno}`);
        oggi.setDate(oggi.getDate() + 1); 
    }
    return dates;
}

async function updateTable() {
    let dates = await getDatesForCurrentWeek(table.getCurrentDate());
    table.build(dates);
    table.creaheader();

    let hours = ["8", "9", "10", "11", "12"];
    let test = {  };

    table.crea(test, hours);
}

// Inizializza la tabella
let table = createTabella(document.getElementById("tabelle"));
updateTable(); 


const createButtons = () => {
    const previousButton = document.createElement("button");
    previousButton.textContent = "Precedente";
    previousButton.onclick = () => {
        let currentDate = table.getCurrentDate();
        currentDate.setDate(currentDate.getDate() - 1); // Diminuisci di un giorno
        table.setCurrentDate(currentDate); 
        updateTable(); 
    };

    const nextButton = document.createElement("button");
    nextButton.textContent = "Successivo";
    nextButton.onclick = () => {
        let currentDate = table.getCurrentDate();
        currentDate.setDate(currentDate.getDate() + 1); // Aumenta di un giorno
        table.setCurrentDate(currentDate); 
        updateTable(); 
    };

    document.body.appendChild(previousButton);
    document.body.appendChild(nextButton);
};

createButtons(); 
