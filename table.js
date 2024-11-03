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
            console.log("List data = ");
            console.log(listadata);
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
             for(let j=0;j<key.length;j++){
            //    console.log("key[j] = "+key[j]);
             let val=key[j].split("###");
            // console.log("VAL = "+ val)
            // console.log("VAL 1 = "+ val[1])
             if(val[1]==hours[i]){
                console.log("chiave = "+ key[j])
                console.log("list data di key = "+listadata[key[j]]);
             valoreorariotabella.push(listadata[key[j]]);
             }
           }
           console.log(hours);
           console.log(valoreorariotabella);
                let htmlRow = "<tr><td>" + hours[i] + "</td>" + "<td>"+valoreorariotabella[0]+"</td>" + "<td>"+valoreorariotabella[1]+"</td>" + "<td>"+valoreorariotabella[2]+"</td>"+ "<td>"+valoreorariotabella[3]+"</td>" + "<td>"+valoreorariotabella[4]+"</td>" + "</tr>" + "\n";
                Row += htmlRow;
              
            }
            parentElement.innerHTML = header + Row + "</tbody></table>"; // Aggiungi le righe alla tabella
        },
        
    };
}

console.log(document);

let table = createTabella(document.getElementById("tabelle"));
table.build(["LUNEDÌ", "MARTEDÌ", "MERCOLEDÌ", "GIOVEDÌ", "VENERDÌ"]);
table.creaheader();
let hours = ["8", "9", "10", "11", "12"];
let test={
    "21/10/2024###8":"Thomas",
    "21/10/2024###9":"Thomas",
    "21/10/2024###10":"Thomas",
    "21/10/2024###11":"Thomas",
    "21/10/2024###12":"Thomas",
    "22/10/2024###8":"Thomas",
    "22/10/2024###9":"Thomas",
    "22/10/2024###10":"Thomas",
    "22/10/2024###11":"Thomas",
    "22/10/2024###12":"Thomas",
    "23/10/2024###8":"Thomas",
    "23/10/2024###9":"Thomas",
    "23/10/2024###10":"Thomas",
    "23/10/2024###11":"Thomas",
    "23/10/2024###12":"Thomas",
    "24/10/2024###8":"Thomas",
    "24/10/2024###9":"Thomas",
    "24/10/2024###10":"Thomas",
    "24/10/2024###11":"Thomas",
    "24/10/2024###12":"Thomas",
    "25/10/2024###8":"Thomas",
    "25/10/2024###9":"Thomas",
    "25/10/2024###10":"Thomas",
    "25/10/2024###11":"Thomas",
    "25/10/2024###12":"Thomas",

}
table.crea(test, hours); 
