document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      siteNav.classList.toggle("is-open");
      const isExpanded = siteNav.classList.contains("is-open");
      menuToggle.setAttribute("aria-expanded", String(isExpanded));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInsideNav = siteNav.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const quoteModal = document.getElementById("quoteModal");
  const quoteFormView = document.getElementById("quoteFormView");
  const quoteThankYouView = document.getElementById("quoteThankYouView");
  const formMessage = document.getElementById("formMessage");
  const quoteForm = document.getElementById("quoteForm");
  const submitBtn = document.getElementById("quoteSubmitBtn");

  const openQuoteButtons = document.querySelectorAll(".open-quote-modal");
  const closeQuoteButton = document.querySelector(".quote-modal-close");
  const modalBackdrop = document.querySelector("[data-close-modal='true']");
  const closeThankYouBtn = document.querySelector(".close-thank-you");

  function setFormMessage(message, type = "error") {
    if (!formMessage) return;
    formMessage.textContent = message;
    formMessage.className = `form-message is-visible is-${type}`;
  }

  function clearFormMessage() {
    if (!formMessage) return;
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  function showFormView() {
    if (quoteFormView) quoteFormView.classList.add("is-active");
    if (quoteThankYouView) quoteThankYouView.classList.remove("is-active");
  }

  function showThankYouView() {
    if (quoteFormView) quoteFormView.classList.remove("is-active");
    if (quoteThankYouView) quoteThankYouView.classList.add("is-active");
  }

  function openQuoteModal() {
    if (!quoteModal) return;
    showFormView();
    clearFormMessage();
    quoteModal.classList.add("is-open");
    quoteModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.remove("is-open");
    quoteModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    showFormView();
    clearFormMessage();
    if (quoteForm) quoteForm.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Request";
    }
  }

  openQuoteButtons.forEach((button) => {
    button.addEventListener("click", openQuoteModal);
  });

  if (closeQuoteButton) {
    closeQuoteButton.addEventListener("click", closeQuoteModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeQuoteModal);
  }

  if (closeThankYouBtn) {
    closeThankYouBtn.addEventListener("click", closeQuoteModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && quoteModal?.classList.contains("is-open")) {
      closeQuoteModal();
    }
  });

  if (quoteForm) {
    quoteForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      clearFormMessage();

      const formData = new FormData(quoteForm);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      try {
        const response = await fetch(quoteForm.action, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });

        const result = (await response.text()).trim().toLowerCase();

        if (result === "success") {
          quoteForm.reset();
          showThankYouView();
        } else {
          setFormMessage("There was a problem submitting your request. Please try again.");
        }
      } catch (error) {
        setFormMessage("There was a problem submitting your request. Please try again.");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Request";
        }
      }
    });
  }

  const serviceCards = document.querySelectorAll(".flip-card");

  function bindMobileCardFlip() {
    if (window.innerWidth <= 700) {
      serviceCards.forEach((card) => {
        if (!card.dataset.bound) {
          card.addEventListener("click", () => {
            const inner = card.querySelector(".flip-card-inner");
            if (!inner) return;

            const isFlipped = inner.style.transform === "rotateY(180deg)";
            inner.style.transform = isFlipped ? "none" : "rotateY(180deg)";
          });

          card.dataset.bound = "true";
        }
      });
    } else {
      serviceCards.forEach((card) => {
        const inner = card.querySelector(".flip-card-inner");
        if (inner) {
          inner.style.transform = "";
        }
      });
    }
  }

  bindMobileCardFlip();
  window.addEventListener("resize", bindMobileCardFlip);
});