// tabella.js

const createTabella = (parentElement) => {
    let data = null;
    let header = "";
    let newrow = [];
    
    // Funzione per mostrare o nascondere la tabella
    const showTable = (show) => {
        if (show) {
            parentElement.style.display = "block";
        } else {
            parentElement.style.display = "none";
        }
    };
    
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
            newrow = listadata;
            let Row = "";
            for (let i = 0; i < newrow; i++) {
                let htmlRow = `<tr><td>${hours[i]}</td><td></td><td></td><td></td><td></td><td></td></tr>\n`;
                Row += htmlRow;
            }
            parentElement.innerHTML = header + Row + "</tbody></table>";
        },
        show: (shouldShow) => showTable(shouldShow)
    };
};

// Inizializzazione della tabella con i giorni e le ore
let table = createTabella(document.getElementById("tabelle"));
table.build(["LUNEDÌ", "MARTEDÌ", "MERCOLEDÌ", "GIOVEDÌ", "VENERDÌ"]);
table.creaheader();
let hours = ["8", "9", "10", "11", "12"];
table.crea(5, hours);
table.show(false);  // Nascondi la tabella inizialmente

/*

// Crea la tabella
const createTablepipo = (parentElement) => {
    let data;
    return {
        build: (dataInput) => {
            data = dataInput;
        },
        render: () => {
            let htmlTable = "<table>";
            htmlTable += data.map((row) =>
                "<tr>" + row.map((col) =>
                    "<td>" + col + "</td>"
                ).join("")
            ).join("") + "</tr>";
            htmlTable += "</table";
            parentElement.innerHTML = htmlTable;
        }
    }
}

const initTable = () => {
    return new Promise((resolve) => {
        let tableStructure = [Object.keys(creaBase())];
        
        const getDateKey = (date) => {
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        };

        prendiDati(myKey, myToken)
            .then(data => {
                const dataMonth = {};
                for (let i = 0; i < 30; i++) {
                    const d = new Date();
                    d.setDate(d.getDate() + i);
                    const key = getDateKey(d);
                    dataMonth[key] = !data[key] ? Object.values(struttura_albergo) : data[key];
                    tableStructure.push([key, ...dataMonth[key]]);
                }
                resolve(tableStructure);
            });
    });
}
//----------------------------------------------------------------------------------------------------------------


*/
