import pierreBombaron from "../assets/medecins/pierreBombaron.jpg";
import amandineVialDupuy from "../assets/medecins/amandineVialDupuy.jpg";
import annickWattiez from "../assets/medecins/annickWattiez.jpg";
import brunoCaillet from "../assets/medecins/brunoCaillet.jpg";
import karimaBouledrak from "../assets/medecins/karimaBouledrak.jpg";
import fabricePiegay from "../assets/medecins/fabricePiegay.jpg";
import martinVeaudor from "../assets/medecins/martinVeaudor.jpg";
import nelsonHanin from "../assets/medecins/nelsonHanin.jpg";

const team = [
  {
    name: "Dr BOMBARON Pierre",
    displayName: "Dr Bombaron",
    url: "https://www.doctolib.fr/pneumologue/lyon/pierre-bombaron",
    photo: pierreBombaron,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    description: null, // À compléter
  },
  {
    name: "Dr VIAL-DUPUY Amandine",
    displayName: "Dr Vial-Dupuy",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/amandine-vial-dupuy-rillieux-la-pape",
    photo: amandineVialDupuy,
    specialties: ["pneumologie-generale", "pneumo-pediatrie", "allergologie", "sommeil"],
    specialtyNotes: {
      "pneumo-pediatrie": "(à partir de 6 ans)",
    },
    description:
      "Le Dr Vial-Dupuy pratique la pneumologie et l'allergologie générale chez l'enfant à partir de 6 ans et chez l'adulte. Elle prend en charge les pathologies respiratoires, en particulier l'asthme et l'apnée du sommeil, mais aussi les pathologies allergologiques telles que les allergies respiratoires, alimentaires, ou médicamenteuses.",
  },
  {
    name: "Dr WATTIEZ Annick",
    displayName: "Dr Wattiez",
    url: "https://www.doctolib.fr/pneumologue/lyon/annick-wattiez",
    photo: annickWattiez,
    specialties: [
      "pneumologie-generale",
      "pneumo-pediatrie",
      "allergologie",
      "fibroscopie",
      "sommeil",
    ],
    specialtyNotes: {
      "pneumo-pediatrie": "(à partir de 10 ans)",
    },
    description:
      "Le Dr Wattiez pratique la pneumologie et l'allergologie respiratoire chez l'adulte et chez l'enfant à partir de 10 ans. Elle prend en charge les pathologies respiratoires en général avec une spécificité dans l'apnée du sommeil.",
  },
  {
    name: "Dr CAILLET Bruno",
    displayName: "Dr Caillet",
    url: "https://www.doctolib.fr/pneumologue/lyon/bruno-caillet",
    photo: brunoCaillet,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    description: null, // À compléter
  },
  {
    name: "Dr BOULEDRAK Karima",
    displayName: "Dr Bouledrak",
    url: "https://www.doctolib.fr/pneumologue/lyon/karima-bouledrak",
    photo: karimaBouledrak,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    specialtyNotes: {
      sommeil: "(Polysomnographie)",
    },
    description: null, // À compléter
  },
  {
    name: "Dr PIEGAY Fabrice",
    displayName: "Dr Piegay",
    url: "https://www.doctolib.fr/pneumologue/lyon/fabrice-piegay",
    photo: fabricePiegay,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    description: null, // À compléter
  },
  {
    name: "Dr VEAUDOR Martin",
    displayName: "Dr Veaudor",
    url: "https://www.doctolib.fr/pneumologue/lyon/martin-veaudor",
    photo: martinVeaudor,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    specialtyNotes: {
      fibroscopie: "(EBUS - Échoendoscopie)",
    },
    description: null, // À compléter
  },
  {
    name: "Dr HANIN Nelson",
    displayName: "Dr Hanin",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/nelson-hanin",
    photo: nelsonHanin,
    specialties: ["pneumologie-generale", "pneumo-pediatrie", "fibroscopie", "sommeil"],
    specialtyNotes: {
      "pneumo-pediatrie": "(à partir de 16 ans)",
      sommeil: "(Polysomnographie)",
    },
    description:
      "Le Dr Hanin pratique la pneumologie générale chez l'enfant à partir de 12 ans et chez l'adulte. Il prend en charge les pathologies respiratoires en général avec une spécificité dans l'apnée du sommeil et les appareillages nocturnes avancés.",
  },
  {
    name: "Dr JOUAN Mathilde",
    displayName: "Dr Jouan",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/mathilde-jouan",
    photo: null,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    specialtyNotes: {
      sommeil: "(Polysomnographie)",
    },
    description: null, // À compléter
  },
];

export default team;
