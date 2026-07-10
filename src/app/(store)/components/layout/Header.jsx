"use client"
import { ChevronLeft, ChevronRight, Heart, Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { menuData } from '../Data/menuData'
import MegaMenu from './MegaMenu'
import FurnitureMenu from './MenuGrid/FurnitureMenu'
import Image from 'next/image'

// Mobile Menu Component
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setExpandedCategory(null)
  }

  const toggleCategory = (handle) => {
    setExpandedCategory(expandedCategory === handle ? null : handle)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setExpandedCategory(null)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-white hover:opacity-70 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed left-0 top-0 h-screen w-full max-w-xs bg-[#3B1E03] text-white transform transition-transform duration-300 z-50 lg:hidden overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#7f351a]">
          <h2 className="font-semibold text-sm">Menu</h2>
          <button onClick={closeMenu} className="p-2 hover:opacity-70 transition">
            <X size={24} />
          </button>
        </div>

        {/* Top Links */}
        <div className="border-b border-[#7f351a] p-4">
          <Link href="/" onClick={closeMenu} className="block py-2 hover:opacity-70 transition text-sm">
            Our Story
          </Link>
          <Link href="/" onClick={closeMenu} className="block py-2 hover:opacity-70 transition text-sm">
            Bulk Queries
          </Link>
          <Link href="/" onClick={closeMenu} className="block py-2 hover:opacity-70 transition text-sm">
            Inspiration
          </Link>
        </div>

        {/* Main Menu Items */}
        <nav className="p-4">
          {menuData.map((menu) => (
            <div key={menu.handle} className="border-b border-[#7f351a]">
              <button
                onClick={() => toggleCategory(menu.handle)}
                className="w-full flex justify-between items-center py-3 hover:opacity-70 transition"
              >
                <Link
                  href={`/shop/${menu.handle}`}
                  onClick={closeMenu}
                  className="font-medium text-left flex-1 text-sm"
                >
                  {menu.title}
                </Link>
                {menu.categories?.length > 0 && (
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${expandedCategory === menu.handle ? 'rotate-180' : ''
                      }`}
                  />
                )}
              </button>

              {/* Subcategories */}
              {expandedCategory === menu.handle && menu.categories?.length > 0 && (
                <div className="bg-[#2d1602] pl-4 py-2">
                  {menu.categories.map((category) => (
                    <div key={category.title} className="mb-3">
                      <h3 className="font-semibold text-xs py-2 text-orange-100">
                        {category.title}
                      </h3>
                      <div className="pl-2 space-y-1">
                        {category.items?.map((item) => (
                          <Link
                            key={item.handle}
                            href={`/shop/${item.handle}`}
                            onClick={closeMenu}
                            className="block py-1 text-xs text-gray-300 hover:text-white transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Links */}
        <div className="border-t border-[#7f351a] p-4 mt-4">
          <Link href="/account" onClick={closeMenu} className="block py-2 hover:opacity-70 transition text-sm">
            Account
          </Link>
          <Link href="/wishlist" onClick={closeMenu} className="block py-2 hover:opacity-70 transition text-sm">
            Wishlist
          </Link>
          <Link href="/cart" onClick={closeMenu} className="block py-2 hover:opacity-70 transition text-sm">
            Cart
          </Link>
        </div>
      </div>
    </>
  )
}

// Header Component
function Header() {

  const message = [
    "Stay-In Season Sale",
    "Prepaid orders - Get 5% off with LIVING5",
    "10% off only on Setups with code SETUPS10",
    "Living Shapes is now on Ajio Luxe",
    "Flat 20% Off"
  ]

  const [currentindex, setCurrentindex] = useState(0)
  const [activeMenu, setActiveMenu] = useState('')

  // Banner carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentindex((prev) => (prev + 1) % message.length);
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Banner navigation
  const handleNext = () => {
    setCurrentindex((prev) => (prev + 1) % message.length)
  }
  const handlePrev = () => {
    setCurrentindex((prev) => prev === 0 ? message.length - 1 : prev - 1)
  }



  const currentPage = usePathname()


  return (
    <>
      <header className={currentPage === "/" ? "bg-transparent absolute top-0 w-full z-50 " : "z-50  bg-[#3B1E03] text-white w-full relative top-0"}>

        {/* Top Banner */}
        <div className='w-full border-b border-[#7f351a] pt-2'>
          <div className='flex w-[87%] mx-auto justify-between items-center pb-4 text-white'>
            <button className='cursor-pointer hover:opacity-70' onClick={handlePrev}>
              <ChevronLeft size={20} />
            </button>
            <p className='text-center flex-1 text-xs sm:text-sm'>{message[currentindex]}</p>
            <button className='cursor-pointer hover:opacity-70' onClick={handleNext}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Top Navigation */}
        <div className="py-5 w-full border-b border-[#7f351a]">
          <div className='w-[90%] mx-auto flex justify-between items-center gap-4'>

            {/* Left Links - Hidden on mobile */}
            <div className='hidden lg:flex justify-center gap-6 text-sm'>
              <Link href={"/"} className='hover:opacity-70 transition text-white'>Our Story</Link>
              <Link href={"/"} className='hover:opacity-70 transition text-white'>Bulk Queries</Link>
              <Link href={"/"} className='hover:opacity-70 transition text-white'>Inspiration</Link>
            </div>

            {/* Logo */}
            <div className='flex justify-center flex-1 lg:flex-none'>
              <Link href={'/'}>
                <Image
                  src="https://livingshapes.in/cdn/shop/files/Layer_3.webp?v=1779959975&width=260"
                  alt="Living Shapes"
                  width={260}
                  height={80}
                  className='w-24 sm:w-28 lg:w-32 mx-auto'
                />
              </Link>
            </div>

            {/* Right Icons */}
            <div className='flex justify-center gap-4 lg:gap-6'>
              <Link href={"/wishlist"} className='hidden sm:block hover:opacity-70 transition text-white'>
                <Heart size={18} className='sm:w-5 sm:h-5' />
              </Link>
              <Link href={"/account"} className='hidden sm:block hover:opacity-70 transition text-white'>
                <User size={18} className='sm:w-5 sm:h-5' />
              </Link>
              <Link href={"/search"} className='hidden sm:block hover:opacity-70 transition text-white'>
                <Search size={18} className='sm:w-5 sm:h-5' />
              </Link>
              <Link href={"/cart"} className='hidden sm:block hover:opacity-70 transition text-white'>
                <ShoppingCart size={18} className='sm:w-5 sm:h-5' />
              </Link>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>

        {/* Main Navigation Menu - Desktop Only */}
        <div className='hidden lg:block w-full pt-4 pb-4 '
          onMouseLeave={() => setActiveMenu(null)}>
          <nav className="w-[70%] mx-auto flex gap-7 justify-between font-extralight ">
            {menuData.map((v) => (
              <div
                key={v.handle}
                className="relative"
                onMouseEnter={() => setActiveMenu(v.handle)}

              >
                {/* Menu Title */}

                <Link
                  href={`/shop/${v.handle}`}
                  className="font-medium text-white hover:opacity-70 transition py-2 text-[13px] whitespace-nowrap"
                >
                  {v.title}
                </Link>


              </div>
            ))}
          </nav>
          {activeMenu && (
            <MegaMenu activeMenu={activeMenu} />

          )}
        </div>

      </header>
    </>
  )
}

export default Header
