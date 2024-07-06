import Link from 'next/link';
import React from 'react'
import { SlArrowDown } from "react-icons/sl";

type Props = {}

const leftSideLinks = [
  {
    id: 1,
    label: "About Us",
    link: "/about-us"
  },
  {
    id: 1,
    label: "My Account",
    link: "/account"
  },
  {
    id: 1,
    label: "Wishlist",
    link: "/wishlist"
  },
  {
    id: 1,
    label: "Order Tracking",
    link: "/order-tracking"
  },
]

const Header = (props: Props) => {
  return (
    <section className="hidden md:flex flex-row items-center justify-between border border-b text-mutedTxt  text-xs px-20 py-2 font-semibold">
      {/* Left side links */}
      <div className='flex flex-row gap-2 divide-x-2'>
        {leftSideLinks.map((link) => (
          <Link className='pl-2' key={link.id} href={link.link}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Highlight part */}
      <span>100% Secure delivery without contacting the courier</span>

      {/* Details and settings */}
      <div className="flex flex-row gap-2 divide-x-2">
        <span>
          Need help? Call Us: <span className="text-theme">+ 1800 900</span>
        </span>
        <div className="flex flex-row items-center justify-center gap-1 px-2">
          <span>English</span>
          <SlArrowDown />
        </div>
        <div className="flex flex-row items-center justify-center gap-1 px-2">
          <span>USD</span>
          <SlArrowDown />
        </div>
      </div>
    </section>
  );
}

export default Header