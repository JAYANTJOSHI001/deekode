'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold hover:text-blue-700 ${isScrolled ? 'text-blue-600' : 'text-white'} transition-colors duration-300`}>
           <Image src={isScrolled ? `http://res.cloudinary.com/du7a1obsy/image/upload/v1736924373/prwzumzwo3mcr3t3qgkh.svg` : `http://res.cloudinary.com/du7a1obsy/image/upload/v1736923974/fe7g5ghjoktqoln2rp9r.svg`} alt="Logo" width={40} height={40} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-200 hover:text-white'}
                ${
                pathname === item.href ? 'font-bold text-blue-600' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`${isScrolled ? 'text-blue-600' : 'text-white'} transition-colors duration-300`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2 ${
                    pathname === item.href ? 'font-bold text-blue-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

