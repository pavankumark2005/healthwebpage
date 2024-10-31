// src/app/components/footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  