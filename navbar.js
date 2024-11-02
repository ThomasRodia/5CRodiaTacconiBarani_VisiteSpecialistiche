// specialtyTabs.js

// Dizionario delle specialità
const specialties = {
    cardiology: "Cardiologia",
    psychology: "Psicologia",
    oncology: "Oncologia",
    orthopedics: "Ortopedia",
    neurology: "Neurologia",
};

// Funzione per creare i tab delle specialità
const createSpecialtyTabs = (parentElement) => {
    let activeIndex = 2;

    return {
        build: () => {
            return Object.keys(specialties).map((key, index) => {
                let buttonClass = 'specialty-tab';
                if (index === activeIndex) {
                    buttonClass += ' active';
                }
                return `<button class="${buttonClass}" onclick="specialtyTabs.setActive(${index})">
                    ${specialties[key]}
                </button>`;
            }).join('');
        },
        render: function () {
            parentElement.innerHTML = this.build();
        },
        setActive: function (index) {
            activeIndex = index;
            this.render();
            table.show(true); // Mostra la tabella quando si seleziona una specialità
        }
    };
};

// Componente per il pulsante di prenotazione
const createBookButton = (parentElement) => {
    return {
        render: () => {
            parentElement.innerHTML = `<button class="book-button" onclick="bookAppointment()">Prenota</button>`;
        }
    };
};

// Inizializzazione dei componenti al caricamento della pagina
const specialtyTabs = createSpecialtyTabs(document.getElementById("specialty-tabs"));
const bookButton = createBookButton(document.getElementById("controls"));

document.addEventListener("DOMContentLoaded", () => {
    specialtyTabs.render();
    bookButton.render();
});
