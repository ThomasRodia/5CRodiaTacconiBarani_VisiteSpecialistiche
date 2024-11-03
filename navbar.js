

const specialties = {
  cardiology: "Cardiologia",
  psychology: "Psicologia",
  oncology: "Oncologia",
  orthopedics: "Ortopedia",
  neurology: "Neurologia"
};

const tableDataBySpecialty = {
  cardiology: {},
  psychology: {},
  oncology: {},
  orthopedics: {},
  neurology: {}
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
    },
    setTableForActiveSpecialty: async function() {
      const activeSpecialtyKey = Object.keys(specialties)[activeIndex];
      const specialtyData = await creaDizionarioSettimana(activeSpecialtyKey); // Ottieni i dati specifici
      table.crea(specialtyData, hours); 
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
  specialtyTabs.render();
  bookButton.render();
});
