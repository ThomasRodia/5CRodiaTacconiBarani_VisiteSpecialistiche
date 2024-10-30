//-----------------------------------------------------------------------------------------------------------------------------



// Creata la form
const createForm = (parentElement) => {
    let data;
    let callback = null;

    return {
        setLabels: (labelsAndType) => {
            data = labelsAndType;
        },
        onsubmit: (callbackInput) => {
            callback = callbackInput
        },

        
        
        render: () => {
            for (let key in data) {
                parentElement.innerHTML += `<div>${key}\n<input id="${key}" type="${data[key]}"/></div>` + '\n';
            }

            parentElement.innerHTML += "<button type='button' id='prenota'>Prenota</button>";

            document.querySelector("#submit").onclick = () => {
                const result = Object.keys(data).map((name) => {
                    return document.querySelector("#" + name).value;
                });

                document.querySelector("#prenota").onclick = () => {
                    const result = Object.keys(data).map((name) => {
                        return document.querySelector("#" + name).value;
                    });
                    
                    
                };


                callback(result);
            }
            
        }
            
    }
}


//-----------------------------------------------------------------------------------------------------------------------------------