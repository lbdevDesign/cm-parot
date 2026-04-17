import parotDuquesne from "../assets/cliniques/centreDuquesne.jpg";
import parotCharcot from "../assets/cliniques/centreCharcot.jpg";
import parotMermoz from "../assets/cliniques/centreMermoz.jpg";
import parotRilleux from "../assets/cliniques/centreRilleux.jpg";
import duquesnneMob from "../assets/cliniques/duquesnneMob.jpg";
import charcotMob from "../assets/cliniques/charcotMob.jpg";
import mermozMob from "../assets/cliniques/mermozMob.jpg";
import rilleuxMob from "../assets/cliniques/rilleuxMob.jpg";

const cabinets = [
  {
    id: 1,
    name: "Parot - Duquesne",
    district: "Duquesne",
    description: "54 Rue Duquesne, 69006 Lyon",
    image: parotDuquesne,
    imageMob: duquesnneMob,
    logo: "imgSlot.png",
    hours: "Lun - Ven: 8h - 18h",
    mapsUrl: "https://maps.app.goo.gl/b86pVfsgpgrCJSX97",
    phone: "04 78 94 24 74",
    email: "secretariat@centremedicalparot.fr",
  },
  {
    id: 2,
    name: "Parot - Charcot",
    district: "Charcot",
    description: "51 Rue Commandant Charcot, 69110 Sainte-Foy-lès-Lyon",
    image: parotCharcot,
    imageMob: charcotMob,
    logo: "imgSlot.png",
    hours: "Lun - Ven: 8h - 18h",
    mapsUrl: "https://maps.app.goo.gl/dh84879fLTujPNVs6",
    phone: "04 78 94 24 74",
    email: "secretariat@centremedicalparot.fr",
  },
  {
    id: 3,
    name: "Parot - Mermoz",
    district: "Mermoz",
    description: "11 Rue Edouard Nieuport, 69008 Lyon",
    image: parotMermoz,
    imageMob: mermozMob,
    logo: "imgSlot.png",
    hours: "Lun - Ven: 8h - 18h",
    mapsUrl: "https://maps.app.goo.gl/aUro1PMNwxkdr7bdA",
    phone: "04 78 94 24 74",
    email: "secretariat.mermoz@centremedicalparot.fr",
  },
  {
    id: 4,
    name: "Parot - Rillieux",
    district: "Rillieux",
    description: "65 Rue des Contamines, 69140 Rillieux-la-Pape",
    image: parotRilleux,
    imageMob: rilleuxMob,
    logo: "/imgSlot.png",
    hours: "Lun - Ven: 8h - 18h",
    mapsUrl: "https://maps.app.goo.gl/mbuYFTrBJPFdojp3A",
    phone: "04 72 01 45 70",
    email: "sec.pneumo.rilleux@gmail.com",
  },
];

export default cabinets;
