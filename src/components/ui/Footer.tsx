import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-transparent border-t border-primary">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-600">
          &copy; {currentYear} HNIN THIRI SAN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
