"use client";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Medicine = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

export default function Home() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    // Fetch the data from the JSON file in the public directory
    fetch('/data/medicines.json')
      .then(response => response.json())
      .then(data => setMedicines(data.medicines))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Medicine Store!</h1>

        <h2 className="text-xl font-semibold mb-4">Available Medicines:</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={medicine.image} alt={medicine.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{medicine.name}</h2>
                <p className="text-sm text-gray-600">{medicine.description}</p>
                <p className="font-bold mt-2">{medicine.price}</p>
                <Link href={`/medicines/${medicine.id}`} className="mt-2 inline-block bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

  
      <Footer />
    </div>
  );
}
