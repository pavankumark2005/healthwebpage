"use client";

import { useRouter } from 'next/router';
import Navbar from '../../components/navbar'; // Update to the correct relative path if needed
import Footer from '../../components/footer'; // Update to the correct relative path if needed
import { useEffect, useState } from 'react';

type Medicine = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

export default function MedicineDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [medicine, setMedicine] = useState<Medicine | null>(null);

  useEffect(() => {
    // Only fetch data if router is ready and id is defined
    if (router.isReady && id) {
      fetch(`/data/medicines.json`)
        .then((response) => response.json())
        .then((data) => {
          const selectedMedicine = data.medicines.find(
            (med: Medicine) => med.id === parseInt(id as string, 10)
          );
          setMedicine(selectedMedicine);
        })
        .catch((error) => console.error("Error fetching medicine details:", error));
    }
  }, [router.isReady, id]);

  if (!medicine) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">{medicine.name}</h1>
        <img src={medicine.image} alt={medicine.name} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-600 my-4">{medicine.description}</p>
        <p className="font-bold text-lg mb-6">{medicine.price}</p>

        {/* Payment Button */}
        <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition duration-300">
          Proceed to Payment
        </button>
      </main>
      <Footer />
    </div>
  );
}
