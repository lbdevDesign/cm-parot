import { useState } from "react";
import Link from "./Link";

export default function CabinetsClient({ cabinets }) {
  const [selected, setSelected] = useState(cabinets[0]);

  return (
    <section className="py-16 scroll-mt-16" id="our-offices">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-2 w-full mx-auto text-center">Nos cabinets</h2>
        <p className="text-gray-600 mb-8 max-w-2xl w-full mx-auto text-center">
          Retrouvez nos différents cabinets médicaux répartis dans la ville.
        </p>

        <div className="flex flex-col w-full gap-8">
          {/* Cartes gauche */}
          <div className="space-y-4 flex gap-2 justify-center flex-wrap md:gap-4">
            {cabinets.map((c) => (
              <button
                key={c.id}
                className={`mb-0 w-44 flex items-center cursor-pointer gap-4 p-2 rounded border transition md:p-4 ${
                  selected.id === c.id
                    ? "border-transparent bg-[#37A4B3] text-white"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
                onClick={() => setSelected(c)}
              >
                {/* <img src={c.logo} alt={c.name} className="w-12 h-12 object-contain" /> */}
                <span className="text-lg w-full font-medium text-center">{c.district}</span>
              </button>
            ))}
          </div>

          {/* Carte droite */}
          <div className="rounded border border-gray-200 p-6 bg-white flex-1">
            <img
              src={selected.image?.src || selected.image}
              alt={selected.name}
              className="rounded mb-4 object-cover w-full h-100"
            />
            <h3 className="text-2xl font-bold mb-1">{selected.name}</h3>
            <p className="text-gray-600 mb-4">{selected.description}</p>
            <Link href={selected.mapsUrl} target="_blank" variant="button">
              Voir sur Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
