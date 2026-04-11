import useModal from "@/hooks/useModal";

import Navbar from "@/layout/navbar/Navbar";
import Footer from "@/layout/footer/Footer";

import Hero from "@/sections/hero/Hero";
import TrustStrip from "@/sections/truststrip/TrustStrip";
import Services from "@/sections/services/Services";
import About from "@/sections/about/About";
import ProjectCta from "@/sections/projectcta/ProjectCta";

import Modal from "@/ui/modal/Modal";
import QuoteForm from "@/components/forms/quoteform/QuoteForm";

import "./home.css";

const Home = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Navbar onQuoteClick={openModal} />

      <main className="home-main">
        <Hero onQuoteClick={openModal} />
        <TrustStrip />
        <Services />
        
        <About />
        <ProjectCta onQuoteClick={openModal} />
      </main>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <QuoteForm />
      </Modal>

      <Footer />
    </>
  );
};

export default Home;