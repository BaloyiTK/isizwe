import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message) errors.message = "Message is required";
    else if (formData.message.length < 10) errors.message = "Message must be at least 10 characters long";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate a network request
      try {
        // Replace with actual API call logic
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Your message has been sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        alert("Oops! Something went wrong.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="relative min-h-screen py-20">
      <div className="absolute"></div>
      <div className="absolute top-0 left-0 w-1/3 h-fit"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row shadow-2xl bg-white rounded-lg overflow-hidden">
        {/* Left Section: Contact Info */}
        <div className="bg-[#3A9D9D] text-white flex flex-col justify-center p-10 space-y-8 md:w-1/3">
          <h2 className="text-3xl text-white font-semibold">Contact Information</h2>
          <p className="text-[#E6F1F1] text-lg leading-relaxed">
            Reach out to us anytime. We're here to help and answer your queries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-white text-2xl" />
              <p className="text-[#E6F1F1]">+27 12 3456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-white text-2xl" />
              <p className="text-[#E6F1F1]">info@company.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
              <p className="text-[#E6F1F1]">Company Address, South Africa</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div 
          className="flex-1 p-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/contact-us.png')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Send Us a Message</h2>
          <p className="text-gray-50 mb-8">
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-4">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`p-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61] w-full ${formErrors.name ? 'border-red-500' : ''}`}
                  aria-label="Name"
                />
                {formErrors.name && (
                  <div className="flex items-center space-x-2 mt-1">
                    <FaExclamationTriangle className="text-red-500" />
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  </div>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`p-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61] w-full ${formErrors.email ? 'border-red-500' : ''}`}
                  aria-label="Email"
                />
                {formErrors.email && (
                  <div className="flex items-center space-x-2 mt-1">
                    <FaExclamationTriangle className="text-red-500" />
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full p-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61] ${formErrors.message ? 'border-red-500' : ''}`}
                rows="6"
                aria-label="Message"
              ></textarea>
              {formErrors.message && (
                <div className="flex items-center space-x-2 mt-1">
                  <FaExclamationTriangle className="text-red-500" />
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229170.26269861686!2d27.87485976805945!3d-26.171119091979804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1733251409181!5m2!1sen!2sza"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
