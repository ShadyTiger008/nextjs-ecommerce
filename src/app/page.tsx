import Header from "~/components/@homepage/Header";
import Hero from "~/components/@homepage/hero";
import ShopByCategory from "~/components/@homepage/shop-by-category";
import TopProducts from "~/components/@homepage/top-products";
import Footer from "~/components/shared/footer";
import Newsletter from "~/components/shared/newsletter";

export default function Homepage() {
  return (
    <main className="">
      <Header/>
      <Hero />
      <ShopByCategory />
      <TopProducts />
      <Newsletter />
      <Footer />
    </main>
  );
}
