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
  },
  {
    name: "Dr WATTIEZ Annick",
    displayName: "Dr Wattiez",
    url: "https://www.doctolib.fr/pneumologue/lyon/annick-wattiez",
    photo: annickWattiez,
    specialties: ["pneumologie-generale", "pneumo-pediatrie", "allergologie", "sommeil"],
    specialtyNotes: {
      "pneumo-pediatrie": "(à partir de 10 ans)",
    },
  },
  {
    name: "Dr CAILLET Bruno",
    displayName: "Dr Caillet",
    url: "https://www.doctolib.fr/pneumologue/lyon/bruno-caillet",
    photo: brunoCaillet,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
  },
  {
    name: "Dr BOULEDRAK Karima",
    displayName: "Dr Bouledrak",
    url: "https://www.doctolib.fr/pneumologue/lyon/karima-bouledrak",
    photo: karimaBouledrak,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
  },
  {
    name: "Dr PIEGAY Fabrice",
    displayName: "Dr Piegay",
    url: "https://www.doctolib.fr/pneumologue/lyon/fabrice-piegay",
    photo: fabricePiegay,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
  },
  {
    name: "Dr VEAUDOR Martin",
    displayName: "Dr Veaudor",
    url: "https://www.doctolib.fr/pneumologue/lyon/martin-veaudor",
    photo: martinVeaudor,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
  },
  {
    name: "Dr HANIN Nelson",
    displayName: "Dr Hanin",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/nelson-hanin",
    photo: nelsonHanin,
    specialties: ["pneumologie-generale", "pneumo-pediatrie", "fibroscopie", "sommeil"],
    specialtyNotes: {
      "pneumo-pediatrie": "(à partir de 16 ans)",
    },
  },
  {
    name: "Dr JOUAN Mathilde",
    displayName: "Dr Jouan",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/mathilde-jouan",
    photo: null,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
  },
];

export default team;
