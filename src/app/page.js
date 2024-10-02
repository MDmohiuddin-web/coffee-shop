import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import ClientTestimonial from "@/components/ClientTestimonial";
import Explore from "@/components/Explore";
import Instant from "@/components/Instant";
import Order from "@/components/Order";
import Review from "@/components/Review";
import Header from "@/components/ui/Header";



export default function Home() {
  return (
    <main>
   
    <Banner></Banner>
    <Explore></Explore>
    <Order></Order>
    <BestSelling></BestSelling>
    <Instant></Instant>
    <ClientTestimonial></ClientTestimonial>
    <Review></Review>
  
 
    </main>
  );
}
