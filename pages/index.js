
import { useState } from 'react';

export default function Home() {
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    setAdded(true);
    // LIEN FLUTTERWAVE - tu le changeras plus tard
    window.location.href = "https://flutterwave.com/pay/yedmaw-del";
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center p-4 border-b">
        <span className="text-pink-400 font-serif text-xl tracking-widest">YEDMAW | Beauté</span>
        <div className="flex gap-2">❤️ ↗️</div>
      </header>

      {/* IMAGE PRODUIT */}
      <div className="relative bg-pink-50 p-8">
        <span className="absolute top-4 right-4 bg-pink-400 text-white px-4 py-2 rounded-full font-bold text-center leading-tight">
          ECONOMISEZ<br/><span className="text-2xl">54%</span>
        </span>
        <img 
          src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=600" 
          alt="Appareil DEL"
          className="w-full max-w-sm mx-auto rounded-3xl"
        />
      </div>

      {/* INFOS PRODUIT */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">une peau radieuse à la maison</h1>
        <h2 className="text-pink-400 text-xl mt-1">Appareil DEL</h2>
        
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-400">★★★★★</span>
          <span className="font-bold">4.9/5</span>
          <span className="text-gray-500">(2 341+ avis)</span>
        </div>

        <div className="flex items-baseline gap-4 mt-4">
          <span className="text-4xl font-bold text-pink-500">79,99$</span>
          <span className="text-2xl line-through text-gray-500">129,99$</span>
        </div>
        <p className="text-pink-500 text-sm mt-1">Économisez 50,00$ aujourd'hui</p>

        <button 
          onClick={handleBuy}
          className="w-full bg-pink-400 text-white font-bold py-4 rounded-xl mt-6 text-lg shadow-lg hover:bg-pink-500"
        >
          {added ? "✓ AJOUTÉ !" : "AJOUTER AU PANIER"}
        </button>

        <div className="flex justify-between mt-6 text-center text-xs">
          <div>🚚<br/>livraison gratuite</div>
          <div>🔒<br/>paiement sécurisé</div>
          <div>📅<br/>garantie 30 jours</div>
        </div>
      </div>
    </div>
  );
}
