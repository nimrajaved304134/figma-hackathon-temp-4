import Leatestblog from "@/components/blog";
import Categories from "@/components/categories";
import Discounteditems from "@/components/discounteditems";
import HeroSection from "@/components/herosection";
import LatestProducts from "@/components/latestproducts";
import Offer from "@/components/offer";
import TrendingProducts from "@/components/trendingproducts";
import Uniquefeatures from "@/components/uniquefeatures";
import Update from "@/components/update";


export default function Home() {
  return (
    <div className="h-full w-screen">
      <HeroSection/>
      <LatestProducts/>
      <Offer/>
      <Uniquefeatures/>
      <TrendingProducts/>
      <Discounteditems/>
      <Categories/>
      <Update/>
      <Leatestblog/>

    </div>
  );
}
