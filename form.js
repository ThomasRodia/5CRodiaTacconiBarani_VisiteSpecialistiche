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

        loadSpecialityTabs: () => {
            const specialtyContainer = document.getElementById("specialty-tabs");

    specialties.forEach((specialty, index) => {
        const button = document.createElement("button");
        button.classList.add("specialty-tab");
        button.textContent = specialty;
        button.onclick = () => loadSpecialty(button);
        
        // Rendi il secondo pulsante (Psicologia) attivo inizialmente
        if (index === 1) button.classList.add("active");

        specialtyContainer.appendChild(button);
    });
        },
        
        render: () => {
            for (let key in data) {
                parentElement.innerHTML += `<div>${key}\n<input id="${key}" type="${data[key]}"/></div>` + '\n';
            }
           

           parentElement.innerHTML += "<button type='button' id='submit'>Submit</button>";

            document.querySelector("#submit").onclick = () => {
                const result = Object.keys(data).map((name) => {
                    return document.querySelector("#" + name).value;
                });

                

                callback(result);
            }
            
        }
    }
}


//-----------------------------------------------------------------------------------------------------------------------------------