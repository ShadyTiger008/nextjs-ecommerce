import Hero from "~/components/@homepage/hero";
import ShopByCategory from "~/components/@homepage/shop-by-category";
import TopProducts from "~/components/@homepage/top-products";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";
import Navbar from "~/components/shared/navbar";
import Newsletter from "~/components/shared/newsletter";

export default function Homepage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Header />
      <Navbar />
      <Hero />
      <ShopByCategory />
      <TopProducts />
      <Newsletter />
      <Footer />
    </main>
  );
}
