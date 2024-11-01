
const createTabella = (parentElement) => {
    let data=null;
    console.log(parentElement)
    let header="";
    let newrow = [];
    return {
        build:(dati)=>{
            data=dati;
            
        },
        creaheader:()=>{       
            header = "<table class='table' border='1'><thead>";
            header += "<th>ORE</th>";
            header += data.map(t => `<th>${t}</th>`).join("");
            header += "</thead><tbody>";
            console.log(parentElement);
            parentElement.innerHTML = header;
        },
        crea: (listadata, hours) => {
            newrow = listadata;
            console.log(newrow);
            let Row = "";
            for (let i=0;i<newrow;i++) {
                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "<td></td>" + "</tr>" + "\n";
                Row += htmlRow;
                console.log("ciao",Row) 
            }
            parentElement.innerHTML = header + Row + "</tbody></table>";
        }
    }
}
console.log(document)

let table = createTabella(document.getElementById("tabelle"));
table.build( ["LUNEDÌ", "MARTEDÌ", "MERCOLEDÌ", "GIOVEDÌ", "VENERDÌ"]);
table.creaheader();
let hours = ["8", "9", "10", "11", "12"];
table.crea(5, hours);
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
