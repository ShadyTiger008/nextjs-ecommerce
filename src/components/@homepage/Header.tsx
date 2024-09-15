import React from 'react'
import HeaderTop from '../header/header-top';
import HeaderMid from '../header/header-mid';
import { HeartIcon, Menu } from 'lucide-react';
import Image from 'next/image';
import { CartIcon } from '../icons';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { navLinks } from '~/config/data';
import Link from 'next/link';
import HeaderBottom from '../header/header-bottom';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="relative">
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
      <div className="max-w-screen flex w-full flex-row items-center justify-between px-6 py-3 shadow md:px-10 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="space-y-4 p-6 text-center">
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Nest Logo"
                  width={100}
                  height={50}
                  className="block"
                />
              </div>
              <SheetTitle className="text-lg font-semibold text-gray-800">
                Welcome to Nest
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-500">
                Nest is a multi-vendor eCommerce platform offering a wide range
                of products from multiple sellers, all in one place.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <nav className="flex flex-col space-y-5 text-lg">
                {navLinks.map((navLink) => (
                  <Link
                    key={navLink.id}
                    href={navLink.path}
                    className="flex flex-row items-center gap-2 transition-colors duration-300 hover:text-theme"
                  >
                    {navLink.icon}
                    <span>{navLink.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <Image src="/images/logo.png" alt="logo" width={150} height={50} />
        <div className="flex flex-row gap-5">
          <div className="relative flex flex-row items-center justify-center gap-2">
            <HeartIcon />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-theme p-1 text-center text-xs text-white">
              4
            </span>
          </div>
          <div className="relative flex flex-row items-center justify-center gap-2">
            <CartIcon />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-theme p-1 text-center text-xs text-white">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header