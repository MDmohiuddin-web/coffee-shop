import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import Explore from "@/components/Explore";
import Order from "@/components/Order";
import Header from "@/components/ui/Header";


export default function Home() {
  return (
    <main>
    <Header></Header>
    <Banner></Banner>
    <Explore></Explore>
    <Order></Order>
    <BestSelling></BestSelling>
 
    </main>
  );
}
