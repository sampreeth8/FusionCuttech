import "../styles/RequestQuote.css"; // Import the styles

const RequestQuote: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null; // If modal is closed, return nothing

  return (
    <div className="quote-modal-overlay">
      <div className="quote-modal">
        {/* ✅ Close Button */}
        <button className="quote-close-btn" onClick={onClose}>
          &times;
        </button>

        {/* ✅ Background Image */}
        <div className="quote-background">
          {/* ✅ Title */}
          <h2 className="quote-title">Request a Quote</h2>

          {/* ✅ Form */}
          <form className="quote-form">
            <div className="quote-form-group">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Company Name" required />
            </div>
            <div className="quote-form-group">
              <input
                type="tel"
                placeholder="Phone number - e.g. 18885555555"
                required
              />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea placeholder="I am looking for" required></textarea>

            {/* ✅ Submit Button */}
            <button type="submit" className="quote-submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
