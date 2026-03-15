import { useEffect } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains("modal-backdrop")) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">

        <button
          className="modal-close"
          onClick={handleCloseClick}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal-content">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;
