import { useState } from "react";

export default function CabinetsClient({ cabinets }) {
  const [selected, setSelected] = useState(cabinets[0]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Nos cabinets</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Retrouvez nos différents cabinets médicaux répartis dans la ville.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Cartes gauche */}
          <div className="space-y-4">
            {cabinets.map((c) => (
              <button
                key={c.id}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition ${
                  selected.id === c.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
                onClick={() => setSelected(c)}
              >
                <img src={c.logo} alt={c.name} className="w-12 h-12 object-contain" />
                <span className="text-lg font-medium">{c.district}</span>
              </button>
            ))}
          </div>

          {/* Carte droite */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-lg mb-4 object-cover w-full h-56"
            />
            <h3 className="text-2xl font-bold mb-1">{selected.name}</h3>
            <p className="text-gray-600 mb-4">{selected.description}</p>
            <a
              href={selected.mapsUrl}
              target="_blank"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
