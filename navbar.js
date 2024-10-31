// creo Dizionario per le tipologie
/*const specialties = {
    cardiology: "Cardiologia",
    psychology: "Psicologia",
    oncology: "Oncologia",
    orthopedics: "Ortopedia",
    neurology: "Neurologia"
  };
  */
  


// Dizionario per le tipologie
const specialties = {
    cardiology: "Cardiologia",
    psychology: "Psicologia",
    oncology: "Oncologia",
    orthopedics: "Ortopedia",
    neurology: "Neurologia"
  };
  
  
  const createSpecialtyTabs = (parentElement) => {
    let activeIndex = 2; // L'indice del tab attivo iniziale
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
      render: function() {
        parentElement.innerHTML = this.build();
      },
      setActive: function(index) {
        activeIndex = index;
        this.render();
      }
    };
  };
  
  // Componente per creare il pulsante di prenotazione
  const createBookButton = (parentElement) => {
    return {
      render: () => {
        parentElement.innerHTML = `
          <button class="book-button" onclick="bookAppointment()">Prenota</button>
        `;
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
  
 /* function loadSpecialtyTabs() {
    const specialtyContainer = document.getElementById("specialty-tabs");
  
    // Creazione dei pulsanti utilizzando Object.keys per ottenere le chiavi del dizionario
    let buttonsHTML = '';
    Object.keys(specialties).forEach((key, index) => {
        let buttonClass = 'specialty-tab';
        
        if (index === 2) {
            buttonClass += ' active'; // Aggiunge ' active' se l'indice è 2
        }
        
        buttonsHTML += `<button class="${buttonClass}" onclick="loadSpecialty(this)">
            ${specialties[key]}
        </button>`;
    });
    
  
    
    specialtyContainer.innerHTML = buttonsHTML;
  }
  
  // Funzione per aggiornare la specialità selezionata e la classe `active`
  function loadSpecialty(selectedButton) {
    // Rimuove la classe `active` da tutti i pulsanti
    document.querySelectorAll('.specialty-tab').forEach(tab => {
        tab.classList.remove('active');
    });
  
    // Aggiunge la classe `active` al pulsante cliccato
    selectedButton.classList.add('active');
  }
  
  
  // Inizializza i pulsanti delle specialità al caricamento della paginaf
  document.addEventListener("DOMContentLoaded", loadSpecialtyTabs);
  
  
  function createPrenota() {
    document.getElementById("controls").innerHTML = `
        <button class="book-button" onclick="bookAppointment()">Prenota</button>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", createPrenota);
  
  */