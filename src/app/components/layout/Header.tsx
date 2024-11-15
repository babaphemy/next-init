import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <nav>
      <Link href="/">Home</Link> | <Link href="/contact">Contact Us</Link>
    </nav>
  </header>
);

export default Header;
