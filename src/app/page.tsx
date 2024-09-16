import BestSellers from "~/components/@homepage/child/best-sellers";
import DealsOfTheDay from "~/components/@homepage/deals-of-the-day";
import FeaturedProducts from "~/components/@homepage/featured-products";
import Header from "~/components/@homepage/Header";
import Hero from "~/components/@homepage/hero";
import ShopByCategory from "~/components/@homepage/shop-by-category";
import TopProducts from "~/components/@homepage/top-products";
import Footer from "~/components/shared/footer";
import Newsletter from "~/components/shared/newsletter";

export default function Homepage() {
  return (
    <main className="">
      <Header />
      <Hero />
      <ShopByCategory />
      <TopProducts />
      <BestSellers />
      <DealsOfTheDay />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </main>
  );
}
