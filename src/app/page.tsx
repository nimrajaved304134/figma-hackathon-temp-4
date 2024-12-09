
import Discounteditems from "@/components/discounteditems";
import Offer from "@/components/offer";
import Uniquefeatures from "@/components/uniquefeatures";
import Update from "@/components/update";


export default function Home() {
  return (
    <div className="h-full w-screen">
      <Offer/>
      <Uniquefeatures/>
      <Discounteditems/>
      <Update/>

    </div>
  );
}
