const diplomas = [
  {
    name: "Information Technology",
    id: "information-technology",
    modules: [
      {
        name: "C218 UI/UX Design for Apps",
        id: "c218-ui-ux-design-for-apps",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        lecturer: {
          name: "Azhar Kamar",
          position: "Lecturer",
        },
      },
      {
        name: "C346 Mobile App Development",
        id: "c346-mobile-app-development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        lecturer: {
          name: "Derek Lee",
          position: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    modules: [
      {
        name: "C237 Software Application Development",
        id: "c237-software-application-development",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        lecturer: {
          name: "Hannah Lim",
          position: "Lecturer",
        },
      },
      {
        name: "C372 Payment Technologies",
        id: "c372-payment-technologies",
        desc: "This module introduces students to different payment technologies and systems.",
        lecturer: {
          name: "Magdalene Lim",
          position: "Senior Lecturer",
        },
      },
    ],
  },
];

export function getModule({ moduleId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
