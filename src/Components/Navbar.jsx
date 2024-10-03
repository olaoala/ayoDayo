import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex font-bold justify-center space-x-8 py-4 bg-transparent">
      <a href="#rsvp" className="text-sm text-rose-gold hover:text-chocolate">RSVP</a>
      <a href="#story" className="text-sm text-rose-gold hover:text-chocolate">Our Love Story</a>
      <a href="#registry" className="text-sm text-rose-gold hover:text-chocolate">Registry</a>
    </nav>
  );
};

export default Navbar;
