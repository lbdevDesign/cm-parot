import pierreBombaron from "../assets/medecins/pierreBombaron.jpg";
import amandineVialDupuy from "../assets/medecins/amandineVialDupuy.jpg";
import annickWattiez from "../assets/medecins/annickWattiez.jpg";
import brunoCaillet from "../assets/medecins/brunoCaillet.jpg";
import karimaBouledrak from "../assets/medecins/karimaBouledrak.jpg";
import fabricePiegay from "../assets/medecins/fabricePiegay.jpg";
import martinVeaudor from "../assets/medecins/martinVeaudor.jpg";
import nelsonHanin from "../assets/medecins/nelsonHanin.jpg";
import mathildeJouan from "../assets/medecins/mathildeJouan.jpg";

const team = [
  {
    name: "Dr BOMBARON Pierre",
    displayName: "Dr Bombaron",
    url: "https://www.doctolib.fr/pneumologue/lyon/pierre-bombaron",
    photo: pierreBombaron,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    description:
      "Le Dr Bombaron prend en charge les pathologies respiratoires de l'adulte et de l'adolescent à partir de 12 ans. Il assure en consultation le diagnostic et le suivi des maladies respiratoires chroniques, de l'oncologie thoracique et des syndromes d'apnées du sommeil. Il exerce au cabinet de la rue Duquesne, à la clinique Lyon-Nord Rillieux et à l'Hôpital Privé Jean Mermoz où il participe à la prise en charge des pathologies respiratoires et oncologiques, dans le cadre de bilans spécialisés ou de situations aiguës.",
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
    description:
      "Le Dr Caillet prend en charge les pathologies respiratoires de l'adolescent à partir de 12 ans et de l'adulte. Il assure en consultation (Hôpital Privé Jean Mermoz et cabinet rue Duquesne) le diagnostic et le suivi des maladies respiratoires chroniques et des syndromes d'apnées du sommeil. Il exerce à l'Hôpital Privé Jean Mermoz, où il participe à la prise en charge des pathologies respiratoires et oncologiques, dans le cadre de bilans spécialisés ou de situations aiguës.",
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
    description:
      "Le Dr Bouledrak prend en charge les pathologies respiratoires de l'adolescent à partir de 12 ans et de l'adulte. Elle assure le diagnostic et le suivi des maladies respiratoires, ainsi que la prise en charge de l'oncologie thoracique et des troubles respiratoires du sommeil, notamment l'apnée du sommeil. Elle exerce également à l'Hôpital Privé Jean Mermoz, où elle participe à la prise en charge des pathologies respiratoires et oncologiques, dans le cadre de bilans spécialisés ou de situations aiguës.",
  },
  {
    name: "Dr PIEGAY Fabrice",
    displayName: "Dr Piegay",
    url: "https://www.doctolib.fr/pneumologue/lyon/fabrice-piegay",
    photo: fabricePiegay,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil", "allergologie"],
    description:
      "Le Dr Piégay exerce la pneumologie générale de l'adulte (à partir de 16 ans). Il assure le diagnostic et le suivi des maladies respiratoires notamment chroniques, en particulier asthme, pathologies interstitielles et oncologie thoracique.",
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
    description:
      "Le Dr Veaudor prend en charge les pathologies respiratoires de l'adulte. Il assure en consultation le diagnostic et le suivi des maladies respiratoires chroniques et des syndromes d'apnées du sommeil. Il exerce à l'Hôpital Privé Jean Mermoz, où il participe à la prise en charge des pathologies respiratoires et oncologiques, dans le cadre de bilans spécialisés ou de situations aiguës. Il assure également une prise en charge complète des cancers pulmonaires à la Clinique Charcot.",
  },
  {
    name: "Dr HANIN Nelson",
    displayName: "Dr Hanin",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/nelson-hanin",
    photo: nelsonHanin,
    specialties: ["pneumologie-generale", "pneumo-pediatrie", "fibroscopie", "sommeil", "allergologie"],
    specialtyNotes: {
      "pneumo-pediatrie": "(à partir de 12 ans)",
      sommeil: "(Polysomnographie)",
    },
    description:
      "Le Dr Hanin pratique la pneumologie générale chez l'enfant à partir de 12 ans et chez l'adulte. Il prend en charge les pathologies respiratoires en général avec une spécificité dans l'apnée du sommeil et les appareillages nocturnes avancés.",
  },
  {
    name: "Dr JOUAN Mathilde",
    displayName: "Dr Jouan",
    url: "https://www.doctolib.fr/pneumologue/rillieux-la-pape/mathilde-jouan",
    photo: mathildeJouan,
    specialties: ["pneumologie-generale", "oncologie", "fibroscopie", "sommeil"],
    specialtyNotes: {
      sommeil: "(Polysomnographie)",
    },
    description:
      "Le Dr Jouan prend en charge les pathologies respiratoires de l'adolescent à partir de 12 ans et de l'adulte. Elle assure en consultation le diagnostic et le suivi des maladies respiratoires chroniques et des syndromes d'apnées du sommeil. Elle exerce à l'Hôpital Privé Jean Mermoz, où elle participe à la prise en charge des pathologies respiratoires et oncologiques, dans le cadre de bilans spécialisés ou de situations aiguës.",
  },
];

export default team;
