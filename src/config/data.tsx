import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { Contact, Layers, Rss, SquareMenu } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: <IoHomeOutline />,
    options: [
      {
        id: "1a",
        title: "Featured Articles",
        href: "/home/featured",
        description:
          "Browse our handpicked featured articles for the latest insights.",
      },
      {
        id: "1b",
        title: "Latest News",
        href: "/home/news",
        description: "Stay updated with the latest news and trends.",
      },
      {
        id: "1c",
        title: "Popular Topics",
        href: "/home/popular",
        description: "Explore the most popular topics in the industry.",
      },
      {
        id: "1d",
        title: "Editor's Picks",
        href: "/home/editors-picks",
        description: "Discover the articles our editors recommend.",
      },
    ],
  },
  {
    id: 2,
    label: "About",
    path: "/about",
    icon: <MdOutlineScreenSearchDesktop />,
    options: [],
  },
  {
    id: 3,
    label: "Shop",
    path: "/shop",
    icon: <CiShop />,
    options: [
      {
        id: "3a",
        title: "New Arrivals",
        href: "/shop/new-arrivals",
        description: "Check out the latest products in our shop.",
      },
      {
        id: "3b",
        title: "Best Sellers",
        href: "/shop/best-sellers",
        description: "Browse our best-selling products that customers love.",
      },
      {
        id: "3c",
        title: "Discounts",
        href: "/shop/discounts",
        description: "Enjoy our special offers and discounts.",
      },
      {
        id: "3d",
        title: "Gift Cards",
        href: "/shop/gift-cards",
        description: "Purchase gift cards for your loved ones.",
      },
    ],
  },
  {
    id: 4,
    label: "Vendors",
    icon: <FaUsers />,
    path: "/vendors",
    options: [
      {
        id: "4a",
        title: "Vendor Registration",
        href: "/vendors/registration",
        description: "Register as a vendor and start selling your products.",
      },
      {
        id: "4b",
        title: "Vendor Dashboard",
        href: "/vendors/dashboard",
        description: "Manage your listings and sales in your vendor dashboard.",
      },
      {
        id: "4c",
        title: "Partnerships",
        href: "/vendors/partnerships",
        description: "Explore partnership opportunities with our platform.",
      },
    ],
  },
  {
    id: 5,
    label: "Mega menu",
    icon: <SquareMenu />,
    path: "/menu",
    options: [
      {
        id: "5a",
        title: "Categories",
        href: "/menu/categories",
        description: "Explore various categories of products and services.",
      },
      {
        id: "5b",
        title: "Trending Now",
        href: "/menu/trending",
        description: "See what's currently trending on our platform.",
      },
      {
        id: "5c",
        title: "Top Brands",
        href: "/menu/brands",
        description: "Shop from the top brands available on our platform.",
      },
      {
        id: "5d",
        title: "Exclusive Deals",
        href: "/menu/deals",
        description: "Get access to exclusive deals and limited-time offers.",
      },
    ],
  },
  {
    id: 6,
    label: "Blog",
    icon: <Rss />,
    path: "/blog",
    options: [
      {
        id: "6a",
        title: "Latest Posts",
        href: "/blog/latest",
        description: "Read the latest posts and insights from our blog.",
      },
      {
        id: "6b",
        title: "Categories",
        href: "/blog/categories",
        description: "Browse our blog by categories and topics.",
      },
      {
        id: "6c",
        title: "Popular Posts",
        href: "/blog/popular",
        description: "Check out the most popular blog posts.",
      },
      {
        id: "6d",
        title: "Contributors",
        href: "/blog/contributors",
        description: "Learn more about the contributors behind our blog.",
      },
    ],
  },
  {
    id: 7,
    label: "Pages",
    icon: <Layers />,
    path: "/pages",
    options: [
      {
        id: "7a",
        title: "FAQ",
        href: "/pages/faq",
        description: "Find answers to frequently asked questions.",
      },
      {
        id: "7b",
        title: "Terms of Service",
        href: "/pages/terms",
        description: "Read our terms of service.",
      },
      {
        id: "7c",
        title: "Privacy Policy",
        href: "/pages/privacy",
        description: "Understand how we handle your privacy and data.",
      },
      {
        id: "7d",
        title: "Contact Support",
        href: "/pages/support",
        description: "Reach out to our support team for assistance.",
      },
    ],
  },
  {
    id: 8,
    label: "Contact",
    path: "/contact",
    icon: <Contact />,
    options: [],
  },
];
