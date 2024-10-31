// creo Dizionario per le tipologie
const specialties = {
    cardiology: "Cardiologia",
    psychology: "Psicologia",
    oncology: "Oncologia",
    orthopedics: "Ortopedia",
    neurology: "Neurologia"
  };
  
  
  function loadSpecialtyTabs() {
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
  
  