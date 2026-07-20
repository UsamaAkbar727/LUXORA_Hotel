import Navbar from "@/components/luxora/Navbar";
import Hero from "@/components/luxora/Hero";
import FeaturedExperiences from "@/components/luxora/FeaturedExperiences";
import TheSpace from "@/components/luxora/TheSpace";
import UpcomingEvents from "@/components/luxora/UpcomingEvents";
import Gallery from "@/components/luxora/Gallery";
import SignatureCocktails from "@/components/luxora/SignatureCocktails";
import CustomerReviews from "@/components/luxora/CustomerReviews";
import PressAwards from "@/components/luxora/PressAwards";
import Membership from "@/components/luxora/Membership";
import ReservationCTA from "@/components/luxora/ReservationCTA";
import FAQ from "@/components/luxora/FAQ";
import InstagramGallery from "@/components/luxora/InstagramGallery";
import OurStory from "@/components/luxora/OurStory";
import Footer from "@/components/luxora/Footer";
import DownloadProject from "@/components/luxora/DownloadProject";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <OurStory />
      <FeaturedExperiences />
      <TheSpace />
      <UpcomingEvents />
      <Gallery />
      <SignatureCocktails />
      <CustomerReviews />
      <PressAwards />
      <Membership />
      <ReservationCTA />
      <FAQ />
      <InstagramGallery />
      <div className="mt-auto">
        <Footer />
      </div>
      <DownloadProject />
    </main>
  );
}
