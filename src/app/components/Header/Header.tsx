'use client';
import Link from 'next/link';
import Image from 'next/image';
import voltrangerlogo from '../../assets/images/voltrangerlogo.jpg'
import { MenuIcon, CloseIcon } from './styledComponent';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    };
  return (
    <header className={`bg-back-color shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} bg-vista-blue`}>
      <nav className="mx-auto px-4 lg:px-8 2xl:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              <Image src={voltrangerlogo} alt="Voltranger Logo" className="w-24 h-10" />
            </Link>
          </div>
          
          <div className="hidden sm:block">
            <div className="flex space-x-4 lg:space-x-8">
              <Link href="/" className="text-white hover:bg-celeste hover:text-caribbean px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about" className="text-white hover:bg-celeste hover:text-caribbean px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/contact" className="text-white hover:bg-celeste hover:text-caribbean px-3 py-2 rounded-md">
                Contact
              </Link>
              <Link href="/login" className="text-black bg-fire-brick hover:bg-lavender hover:text-caribbean px-3 py-2 rounded-md">
                Login
              </Link>
            </div>
          </div>
          <div className="sm:hidden flex items-center gap-4">
            <Link href="/login" className="text-black bg-fire-brick hover:bg-lavender hover:text-caribbean px-3 py-2 rounded-md">
              Login
            </Link>
            <MenuIcon isOpen={isOpen} onClick={toggleMenu} />
            <CloseIcon isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-black block hover:bg-celeste hover:text-caribbean px-3 py-2 rounded-md" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" className="text-black block hover:bg-celeste hover:text-caribbean px-3 py-2 rounded-md" onClick={closeMenu}>
                About   
              </Link>
              <Link href="/contact" className="text-black block hover:bg-celeste hover:text-caribbean px-3 py-2 rounded-md" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 