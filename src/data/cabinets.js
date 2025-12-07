import parotDuquesne from "../assets/cliniques/cliniqueDuquesne.jpg";
import parotCharcot from "../assets/cliniques/cliniqueCharcot.jpg";
import parotMermoz from "../assets/cliniques/cliniqueMermoz.jpg";
import parotRilleux from "../assets/cliniques/cliniqueRilleux.jpg";

const cabinets = [
  {
    id: 1,
    name: "Parot - Duquesne",
    district: "Duquesne",
    description: "54 Rue Duquesne, 69006 Lyon",
    image: parotDuquesne,
    logo: "imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/b86pVfsgpgrCJSX97"
  },
  {
    id: 2,
    name: "Parot - Charcot",
    district: "Charcot",
    description: "51 Rue Commandant Charcot, 69110 Sainte-Foy-lès-Lyon",
    image: parotCharcot,
    logo: "imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/dh84879fLTujPNVs6"
  },
  {
    id: 3,
    name: "Parot - Mermoz",
    district: "Mermoz",
    description: "11 Rue Edouard Nieuport, 69008 Lyon",
    image: parotMermoz,
    logo: "imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/aUro1PMNwxkdr7bdA"
  },
  {
    id: 4,
    name: "Parot - Rillieux",
    district: "Rillieux",
    description: "65 Rue des Contamines, 69140 Rillieux-la-Pape",
    image: parotRilleux,
    logo: "/imgSlot.png",
    mapsUrl: "https://maps.app.goo.gl/mbuYFTrBJPFdojp3A"
  }
];

export default cabinets;