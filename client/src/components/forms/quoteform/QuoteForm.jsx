import { useState } from "react";
import Button from "@/ui/button/Button";
import siteConfig from "@/assets/constants/siteConfig";
import "./quoteform.css";


const initialFormState = {
  name: "",
  email: "",
  organization: "",
  projectType: "",
  message: ""
};

const initialStatusState = {
  type: "",
  message: ""
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatusState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousState) => ({
      ...previousState,
      [name]: value
    }));

    if (status.type) {
      setStatus(initialStatusState);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setStatus(initialStatusState);

    try {
      const response = await fetch(
        `${siteConfig.api.baseUrl}${siteConfig.api.quoteEndpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setFormData(initialFormState);
      setStatus({
        type: "success",
        message: "Your quote request was submitted successfully."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <h2 className="quote-form-title">Request a Quote</h2>

      <div className="quote-form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            autoComplete="name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            autoComplete="email"
          />
        </div>

        <div className="form-field">
          <label htmlFor="organization">Organization</label>
          <input
            id="organization"
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            disabled={isSubmitting}
            autoComplete="organization"
          />
        </div>

        <div className="form-field">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select a project</option>
            <option value="new-site">New Website</option>
            <option value="rebuild">Website Rebuild</option>
            <option value="maintenance">Maintenance</option>
            <option value="hosting">Hosting</option>
            <option value="support">Technical Support</option>
          </select>
        </div>
      </div>

      <div className="form-field form-message">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {status.message ? (
        <div
          className={`form-status form-status--${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      ) : null}

      <div className="quote-form-actions">
        <Button
          type="submit"
          variant="primary"
          label={isSubmitting ? "Submitting..." : "Submit Request"}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default QuoteForm;
