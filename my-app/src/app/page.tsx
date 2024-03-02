import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
 <main className="bg-black  antialiased  bg-grid-white/[0.02] min-h-screen">

  <HeroSection/>
  <FeaturedCourses/>
  <WhyChoseUs/>
  <TestimonialCards/>
  <UpcomingWebinars/>
  


 
 </main>
  );
}
