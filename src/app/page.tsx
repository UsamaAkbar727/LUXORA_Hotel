"use client";

import { useState } from "react";
import Navbar from "@/components/luxora/Navbar";
import Hero from "@/components/luxora/Hero";
import OurStory from "@/components/luxora/OurStory";
import FeaturedExperiences from "@/components/luxora/FeaturedExperiences";
import InteractiveMenu from "@/components/luxora/InteractiveMenu";
import SeatingMap from "@/components/luxora/SeatingMap";
import DressCodePolicy from "@/components/luxora/DressCodePolicy";
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
import Footer from "@/components/luxora/Footer";
import ConciergeBar from "@/components/luxora/ConciergeBar";
import ReservationModal from "@/components/luxora/ReservationModal";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-luxora-bg selection:bg-luxora-gold selection:text-black">
      <Navbar onReserveClick={openReservation} />
      <Hero onReserveClick={openReservation} />

      <div id="story">
        <OurStory />
      </div>

      <FeaturedExperiences />

      <InteractiveMenu onReserveClick={openReservation} />

      <SeatingMap onReserveZone={() => openReservation()} />

      <TheSpace />

      <DressCodePolicy />

      <UpcomingEvents />

      <Gallery />

      <SignatureCocktails onReserveClick={openReservation} />

      <CustomerReviews />

      <PressAwards />

      <Membership />

      <ReservationCTA onOpenModal={openReservation} />

      <FAQ />

      <InstagramGallery />

      <div className="mt-auto">
        <Footer />
      </div>

      {/* Replacement for generic AI button: Live VIP Concierge Bar */}
      <ConciergeBar onOpenReservation={openReservation} />

      {/* Global Interactive Table & Suite Reservation Modal */}
      <ReservationModal isOpen={isReservationOpen} onClose={closeReservation} />
    </main>
  );
}
