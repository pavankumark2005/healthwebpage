// src/app/components/navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">My Website</Link>
        <div>
          <Link href="/" className="text-white px-4">Home</Link>
          <Link href="/about" className="text-white px-4">About</Link>
          <Link href="/contact" className="text-white px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
