import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import UseCases from "@/components/UseCases";
import Differentiation from "@/components/Differentiation";
import Offers from "@/components/Offers";
import Process from "@/components/Process";
import RoiCalculator from "@/components/RoiCalculator";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import BookingProvider from "@/components/BookingProvider";

export default function Home() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <UseCases />
        <Differentiation />
        <Offers />
        <Process />
        <RoiCalculator />
        <Founder />
        <FAQ />
        <BlogSection />
        <PreFooterCTA />
      </main>
      <Footer />
    </BookingProvider>
  );
}
