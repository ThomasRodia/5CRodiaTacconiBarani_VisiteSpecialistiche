

const specialties = {
  "Cardiologia": "",
  "Psicologia": "",
  "Oncologia": "",
  "Ortopedia": "",
  "Neurologia": ""
};

const tableDataBySpecialty = {
  cardiology: "",
  psychology: "",
  oncology: "",
  orthopedics: "",
  neurology: ""
};

const createSpecialtyTabs = (parentElement) => {
  let activeIndex = 2; 
  return {
    build: () => {
      return Object.keys(specialties).map((key, index) => {
        let buttonClass = 'specialty-tab';
        if (index === activeIndex) {
          buttonClass += ' active';
          console.log("Prova"); 
        }
        
        return `<button class="${buttonClass}" onclick="specialtyTabs.setTableForActiveSpecialty('${key}')">
          ${key}
        </button>`;
      }).join('');
    },
    render: function() {
      parentElement.innerHTML = this.build();
      this.setTableForActiveSpecialty();
    },
    
    setTableForActiveSpecialty: async function(index) {
      activeIndex = index;
      Tipologia=index;
      //const activeSpecialtyKey = Object.keys(specialties)[activeIndex];
      let specialtyData = await creaDizionarioSettimana(specialties); // Ottieni i dati specifici
     console.log("specialtyData" +specialtyData);
     console.info(hours);
      table.crea(specialtyData, hours,index); 
      
    }
  };
};




const createBookButton = (parentElement) => {
  return {
    render: () => {
      parentElement.innerHTML = `
        <div style="display: flex; justify-content: center;">
          <button class="book-button" id="bookAppointmentButton">Prenota</button>
        </div>
      `;
     
      document.getElementById("bookAppointmentButton").addEventListener("click", () => {
        createBookingModal();
      });
    }
  };
};

const specialtyTabs = createSpecialtyTabs(document.getElementById("specialty-tabs"));
const bookButton = createBookButton(document.getElementById("controls"));

document.addEventListener("DOMContentLoaded", () => {

  specialtyTabs.setTableForActiveSpecialty("Oncologia");
  specialtyTabs.render();
  bookButton.render();
});
