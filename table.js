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
            header += data.map(t => `<th>${t}</th>`).join(""); 
            header += "</thead><tbody>";
            console.log(parentElement);
            parentElement.innerHTML = header;
        },
        crea: (listadata, hours) => {
            console.log("List data = "+ listadata);
            let Row = "";
            let key= Object.keys(listadata);//ottieni le chiavi del dizionario che dovrà essere formato da data###ora###nome
            /*
            listadata{
            21/10/2024###8:rodia,
            21/10/2024###9:tacconi,
            21/10/2024###10:"",
            22/10/2024###8:nobili }
            */
        
           
            for (let i = 0; i < 5; i++) {
             let valoreorariotabella=[];
             for(let j=0;j<key.length();j++){
             let val=key[j].split("###");
             if(val[1]==hours[i]){
             valoreorariotabella=listadata[key];
             }
           }

                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td>"+valoreorariotabella[0]+"</td>" + "<td>"+valoreorariotabella[1]+"</td>" + "<td>"+valoreorariotabella[2]+"</td>"+ "<td>"+valoreorariotabella[3]+"</td>" + "<td>"+valoreorariotabella[4]+"</td>" + "</tr>" + "\n";
                Row += htmlRow;
              
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
table.crea(hours.length, hours); 
