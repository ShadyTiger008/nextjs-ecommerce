import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa6";
import {
  Clock,
  Contact,
  Headset,
  Layers,
  MapPin,
  Rss,
  Send,
  SquareMenu,
} from "lucide-react";

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

export const featuredCategories = [
  {
    id: 1,
    title: "Cake & Milk",
    path: "/shop/cake&milk",
    description: "Discover our wide selection of electronics products.",
  },
  {
    id: 2,
    title: "Coffee & Teas",
    path: "/shop/coffee&teas",
    description: "Discover our wide selection of electronics products.",
  },
  {
    id: 3,
    title: "Pet Foods",
    path: "/shop/pet-foods",
    description: "Discover our wide selection of electronics products.",
  },
  {
    id: 4,
    title: "Vegetables",
    path: "/shop/vegetables",
    description: "Discover our wide selection of electronics products.",
  },
];

export const shopNowBanners = [
  {
    id: 1,
    title: "Everyday Fresh & Clean with Our Products",
    image: "/assets/fresh-clean.png",
    link: "/fresh-clean",
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    image: "/assets/healthy-easy.png",
    link: "/healthy-easy",
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    image: "/assets/organic-product.png",
    link: "/organic-product",
  },
];

export const categories = [
  {
    id: 1,
    title: "Cake & Milk",
    path: "/shop/cake&milk",
    quantity: "26 items",
    image: "",
    bgColor: "#F2FCE4",
  },
  {
    id: 2,
    title: "Orange & Kiwi",
    path: "/shop/orange&kiwi",
    quantity: "28 items",
    image: "",
    bgColor: "#FFFCEB",
  },
  {
    id: 3,
    title: "Peach",
    path: "/shop/peach",
    quantity: "14 items",
    image: "",
    bgColor: "#ECFFEC",
  },
  {
    id: 4,
    title: "Red apple",
    path: "/shop/red-apple",
    quantity: "54 items",
    image: "",
    bgColor: "#FEEFEA",
  },
  {
    id: 5,
    title: "Snack",
    path: "/shop/snacks",
    quantity: "56 items",
    image: "",
    bgColor: "#FFF3EB",
  },
  {
    id: 6,
    title: "Vegetables",
    path: "/shop/vegetables",
    quantity: "72 items",
    image: "",
    bgColor: "#FFF3FF",
  },
  {
    id: 7,
    title: "Strawberry",
    path: "/shop/strawberry",
    quantity: "36 items",
    image: "",
    bgColor: "#F2FCE4",
  },
  {
    id: 8,
    title: "Black plum",
    path: "/shop/black-plum",
    quantity: "123 items",
    image: "",
    bgColor: "#FEEFEA",
  },
  {
    id: 9,
    title: "Custard apple",
    path: "/shop/custard-apple",
    quantity: "34 items",
    image: "",
    bgColor: "#FFFCEB",
  },
  {
    id: 10,
    title: "Coffee & Tea",
    path: "/shop/coffee&tea",
    quantity: "89 items",
    image: "",
    bgColor: "#FEEFEA",
  },
];

export const footerDescriptions = [
  {
    id: 1,
    title: "Address",
    description: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Call Us",
    description: "(+91) - 540-025-124553",
    icon: <Headset className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Email",
    description: "sale@Nest.com",
    icon: <Send className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Hours",
    description: "10:00 - 18:00, Mon - Sat",
    icon: <Clock className="h-5 w-5" />,
  },
];

export const companyLinks = [
  {
    id: 1,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    title: "Delivery Information",
    link: "/delivery-information",
  },
  {
    id: 3,
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 4,
    title: "Terms & Conditions",
    link: "/terms-conditions",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 6,
    title: "Support Center",
    link: "/support-center",
  },
  {
    id: 7,
    title: "Careers",
    link: "/careers",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Account",
    subLinks: [
      { id: 1, title: "Sign In", link: "/login" },
      { id: 2, title: "View Cart", link: "/cart" },
      { id: 3, title: "My Wishlist", link: "/wishlist" },
      { id: 4, title: "Track My Order", link: "/track-order" },
      { id: 5, title: "Help Ticket", link: "/help" },
      { id: 6, title: "Shipping Details", link: "/shipping" },
      { id: 7, title: "Compare Products", link: "/compare" },
    ],
  },
  {
    id: 2,
    title: "Corporate",
    subLinks: [
      { id: 1, title: "Become a Vendor", link: "/become-vendor" },
      { id: 2, title: "Affiliate Program", link: "/affiliate-program" },
      { id: 3, title: "Farm Business", link: "/farm-business" },
      { id: 4, title: "Farm Careers", link: "/farm-careers" },
      { id: 5, title: "Our Suppliers", link: "/suppliers" },
      { id: 6, title: "Accessibility", link: "/accessibility" },
      { id: 7, title: "Promotions", link: "/promotions" },
    ],
  },
  {
    id: 3,
    title: "Popular",
    subLinks: [
      { id: 1, title: "Milk & Flavoured Milk", link: "/mil&flavoured-milk" },
      { id: 2, title: "Butter and Margarine", link: "/butter&margarine" },
      { id: 3, title: "Eggs Substitutes", link: "/eggs-substitutes" },
      { id: 4, title: "Marmalades", link: "/marmalades" },
      { id: 5, title: "Sour Cream and Dips", link: "/sour-cream&dips" },
      { id: 6, title: "Tea & Kombucha", link: "/tea&kombucha" },
      { id: 7, title: "Cheese", link: "/cheese" },
    ],
  },
];

export const paymentGateways = [
  {
    id: 1,
    title: "Visa",
    logo: "/assets/payment-gateways/visa.png",
    link: "https://www.visa.com",
    description: "Securely accept payments via Visa.",
  },
  {
    id: 2,
    title: "MasterCard",
    logo: "/assets/payment-gateways/mastercard.png",
    link: "https://www.mastercard.com",
    description: "Securely accept payments via MasterCard.",
  },
  {
    id: 3,
    title: "Maestro",
    logo: "/assets/payment-gateways/maestro.png",
    link: "https://www.maestrocard.com",
    description: "Securely accept payments via Maestro.",
  },
  {
    id: 4,
    title: "American Express",
    logo: "/assets/payment-gateways/american-express.png",
    link: "https://www.americanexpress.com",
    description: "Securely accept payments via American Express.",
  },
];

export const contactDetails = [
  {
    id: 1,
    title: "1900 - 6666",
    description: "Working 8:00 - 22:00",
    link: "",
  },
  { id: 2, title: "1900 - 8888", description: "24/7 Support Center", link: "" },
];

export const socialMediaLinks = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    title: "Pinterest",
    link: "https://www.pinterest.com",
    icon: <FaPinterestP />,
  },
  {
    id: 5,
    title: "Youtube",
    link: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
];

export const featureDetails = [
  {
    id: 1,
    title: "Best prices & offers",
    description: "orders ₹500 or more",
    image: "/assets/offer.png",
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "24/7 amazing service",
    image: "/assets/free-delivery.png",
  },
  {
    id: 3,
    title: "Great daily deal",
    description: "When you sign up",
    image: "/assets/daily-deal.png",
  },
  {
    id: 4,
    title: "Wide assortment",
    description: "Mega Discounts",
    image: "/assets/assortment.png",
  },
  {
    id: 5,
    title: "Easy Returns",
    description: "Within 30 days",
    image: "/assets/returns.png",
  },
];

export const topSellingProducts = [
  {
    id: 1,
    title: "Fresh Organic Carrot",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/carrot.png",
    link: "/product/carrot",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Farm Fresh Capsicum",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/capcicum.png",
    link: "/product/capcicum",
    rating: 4.3,
  },
  {
    id: 3,
    title: "Juicy Alphonso Mango",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/mango.png",
    link: "/product/mango",
    rating: 4.6,
  },
];

export const trendingProducts = [
  {
    id: 1,
    title: "Ripe Organic Banana",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/banana.png",
    link: "/product/banana",
    rating: 4.7,
  },
  {
    id: 2,
    title: "Fresh Red Fruits Mix",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/red-fruit.png",
    link: "/product/red-fruit",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Ground Organic Cinnamon",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/cinnamon.png",
    link: "/product/cinnamon",
    rating: 4.4,
  },
];

export const recentlyAdded = [
  {
    id: 1,
    title: "Pepperidge Farm Cookies",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/pepperidge.png",
    link: "/product/pepperidge",
    rating: 4.3,
  },
  {
    id: 2,
    title: "Mixed Berry Blend",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/berry-blend.png",
    link: "/product/berry-blend",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Oroweat Whole Grain Bread",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/oroweat.png",
    link: "/product/oroweat",
    rating: 4.4,
  },
];

export const topRated = [
  {
    id: 1,
    title: "Buffalo Wings Sauce",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/buffalo-wings.png",
    link: "/product/buffalo-wings",
    rating: 4.7,
  },
  {
    id: 2,
    title: "Kettle Corn Popcorn",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/kettle-corn.png",
    link: "/product/kettle-corn",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Fresh Juicy Orange",
    currentPrice: "₹150",
    actualPrice: "₹170",
    image: "/assets/products/orange.png",
    link: "/product/orange",
    rating: 4.6,
  },
];

export const dealsOfTheDayProducts = [
  {
    id: 1,
    title: `Seeds of Change Organic Quinoa,
Brown, & Red Rice`,
    description: "NestFood",
    currentPrice: "₹320",
    actualPrice: "₹450",
    image: "/assets/products/quinoa.png",
    link: "/product/pineapple",
    rating: 4.3,
  },
  {
    id: 2,
    title: `Perdue Simply Smart Organics
Gluten Free`,
    description: "Old El Paso",
    currentPrice: "₹150",
    actualPrice: "₹230",
    image: "/assets/products/organics.png",
    link: "/product/sweet-potatoes",
    rating: 4.4,
  },
  {
    id: 3,
    title: `Signature Wood-Fired Mushroom
and Caramelized`,
    description: "Progresso",
    currentPrice: "₹99",
    actualPrice: "₹399",
    image: "/assets/products/mushroom.png",
    link: "/product/sweet-potatoes",
    rating: 3.1,
  },
  {
    id: 4,
    title: `Simply Lemonade with Raspberry
Juice`,
    description: "Yoplait",
    currentPrice: "₹345",
    actualPrice: "₹450",
    image: "/assets/products/lemonade.png",
    link: "/product/sweet-potatoes",
    rating: 4.5,
  },
];

export const bestSellProducts = [
  {
    id: 1,
    title: `All Natural Italian-Style
Chicken Meatballs`,
    currentPrice: "₹1450",
    actualPrice: "₹2000",
    sold: "90",
    quantity: "120",
    image: "/assets/products/chicken-meatballs.png",
    link: "/product/chicken-metaballs",
    seller: "Hodo Foods",
    rating: 4.8,
    tag: "Save 35%",
    tagClr: "#3BB77E",
  },
  {
    id: 2,
    title: `Angie’s Boomchickapop Sweet
and womnies`,
    currentPrice: "₹350",
    actualPrice: "₹500",
    sold: "90",
    quantity: "120",
    image: "/assets/products/boomchickapop.png",
    link: "/product/boomchickapop",
    seller: "Hodo Foods",
    rating: 4.2,
    tag: "Sale",
    tagClr: "#67BCEE",
  },
  {
    id: 3,
    title: `Foster Farms Takeout Crispy
Classic`,
    currentPrice: "₹1250",
    actualPrice: "₹1500",
    sold: "90",
    quantity: "120",
    image: "/assets/products/veggie-pop.png",
    link: "/product/veggie-pop",
    seller: "Hodo Foods",
    rating: 3.3,
    tag: "Best Sale",
    tagClr: "#F59758",
  },
  {
    id: 4,
    title: `Blue Diamond Almonds Lightly
Salted`,
    currentPrice: "₹450",
    actualPrice: "₹1000",
    sold: "90",
    quantity: "120",
    image: "/assets/products/almonds.png",
    link: "/product/almonds",
    seller: "Hodo Foods",
    rating: 4.1,
    tag: "Save 15%",
    tagClr: "#F74B81",
  },
];
