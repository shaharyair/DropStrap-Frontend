"use client";

import React, { useState, useEffect } from "react";
import { HiUser, HiShoppingBag, HiBars3, HiXMark } from "react-icons/hi2";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import dropLogo from "public/dropLogo.png";

function Navbar() {
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setOpenMobileNavbar(!openMobileNavbar);
  };

  const closeMobileNavbar = () => {
    setOpenMobileNavbar(false);
  };

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenMobileNavbar(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("resize", closeOnResize);
    };
  });

  return (
    <>
      <div className=' sticky flex h-28 w-full items-center justify-center'>
        <div className='tranistion-max-width container mx-5 flex items-center justify-between bg-backgroundBlack duration-500'>
          <div
            onClick={toggleMobileNavbar}
            className='cursor-pointer lg:hidden'
          >
            {openMobileNavbar ? (
              <HiXMark className='text-3xl text-dropLogo' />
            ) : (
              <HiBars3 className='text-3xl text-dropLogo' />
            )}
          </div>
          <div
            className={`absolute ${
              openMobileNavbar ? "left-1/4" : "-left-3/4"
            } top-0 h-screen w-3/4 -translate-x-1/3 bg-navbarBlack px-7 pt-32 transition-left duration-500 lg:static lg:order-2 lg:mr-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:p-0`}
          >
            <nav className=' mb-40 lg:m-0'>
              <ul className=' flex flex-col items-start justify-center gap-3 text-left text-xl text-dropLogo lg:flex-row lg:items-center lg:gap-5 lg:text-center'>
                <li>
                  <Link
                    href='/'
                    className='block px-2 py-1'
                    onClick={closeMobileNavbar}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/shop'
                    className='block px-2 py-1'
                    onClick={closeMobileNavbar}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href='/reviews'
                    className='block px-2 py-1'
                    onClick={closeMobileNavbar}
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='block px-2 py-1'
                    onClick={closeMobileNavbar}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              href='/account'
              className='inline-block lg:hidden'
              onClick={closeMobileNavbar}
            >
              <div className='mb-10 flex items-center gap-3'>
                <HiUser className='text-2xl text-dropLogo' />
                <p className='text-lg text-dropLogo'>Sign In</p>
              </div>
            </Link>
            <div className='flex gap-4 lg:hidden'>
              <Link href='/' onClick={closeMobileNavbar}>
                <FaInstagram className='text-3xl text-dropLogo' />
              </Link>
              <Link href='/' onClick={closeMobileNavbar}>
                <FaFacebook className='text-3xl text-dropLogo' />
              </Link>
              <Link href='/' onClick={closeMobileNavbar}>
                <FaTiktok className='text-3xl text-dropLogo' />
              </Link>
              <Link href='/' onClick={closeMobileNavbar}>
                <FaYoutube className='text-3xl text-dropLogo' />
              </Link>
            </div>
          </div>
          <Link
            href='/'
            className='ml-6 lg:ml-0 lg:mr-3'
            onClick={closeMobileNavbar}
          >
            <Image src={dropLogo} width={150} alt='logo' priority />
          </Link>
          <div className='flex items-center justify-center gap-5 lg:order-3'>
            <Link href='/account' onClick={closeMobileNavbar}>
              <HiUser className='text-2xl text-dropLogo lg:text-3xl' />
            </Link>
            <Link href='/cart' onClick={closeMobileNavbar}>
              <HiShoppingBag className='text-2xl text-dropLogo lg:text-3xl' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
