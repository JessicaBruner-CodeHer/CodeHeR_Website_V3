import { useState } from "react";

const useModal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName = "default") => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const isOpen = activeModal !== null;

  return {
    activeModal,
    isOpen,
    openModal,
    closeModal
  };
};

export default useModal;
