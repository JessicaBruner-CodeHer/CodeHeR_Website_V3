import { useModal } from "@/hooks/useModal";

import Navbar from "@/layout/navbar/Navbar";
import Footer from "@/layout/footer/Footer";

import Hero from "@/sections/hero/Hero";
import TrustStrip from "@/sections/truststrip/TrustStrip";
import Services from "@/sections/services/Services";
import About from "@/sections/about/About";

import Modal from "@/ui/modal/Modal";
import QuoteForm from "@/components/forms/quoteform/QuoteForm";

import "./home.css";

function Home() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Navbar openModal={openModal} />

      <Hero openModal={openModal} />
      <TrustStrip />
      <Services openModal={openModal} />
      <About />

          <Modal isOpen={isOpen} onClose={closeModal}>
        <QuoteForm closeModal={closeModal} />
      </Modal>

      <Footer openModal={openModal} />

  
    </>
  );
}

export default Home;
