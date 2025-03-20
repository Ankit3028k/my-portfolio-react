import React, { useState } from 'react';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state
  const [isSent, setIsSent] = useState(false); // To show a success message after submission

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    // Simple validation before sending
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    const phoneNumber = '+918959305284';
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    // After sending, clear the form fields and show success message
    setIsSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
<footer className="contact-section bg-gray-900 text-white  md:mt-14 py-12">

      <div className="container mx-auto max-w-screen-lg px-4">
        <h1 className="text-4xl mb-8 text-center font-bold">Contact Me</h1>
        <div className="contact-info flex flex-col md:flex-row justify-center items-center mb-8">
          <div className="profile-pic">
            <img
              src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/my%20pic/vha9xmkrvuk0ku2cfntg"
              alt="Profile Picture"
              className="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-4 shadow-lg"
            />
          </div>
          <div className="contact-details text-center md:text-left mx-4 flex flex-col">
            <span className="flex items-center mb-2">
              <i className="fas fa-phone"></i>
              <a href="tel:+918959305284" className="text-gray-400 ml-2 hover:text-yellow-500 transition">+91 8959305284</a>
            </span>
            <span className="flex items-center mb-2">
              <i className="fas fa-envelope"></i>
              <a href="mailto:ankitgangrade9617@gmail.com" className="text-gray-400 ml-2 hover:text-yellow-500 transition">ankitgangrade9617@gmail.com</a>
            </span>
          </div>
        </div>
        <div className="contact-form flex flex-col md:flex-row justify-between">
          <div className="map w-full md:w-1/2 mb-4 mx-3">
          <iframe
  src="https://maps.google.com/maps?q=bhopal&output=embed&z=13&t=k"
  style={{ border: 0, width: '90%', height: '300px' }}
  allowFullScreen=""
  loading="lazy"
></iframe>
          </div>
          <form onSubmit={handleWhatsAppSend} className="w-full md:w-1/2 flex flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 mb-3 text-gray-900 rounded border-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 mb-3 text-gray-900 rounded border-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="p-3 mb-3 text-gray-900 rounded border-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className={`p-3 bg-yellow-500 text-gray-900 rounded transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
            </button>
            {isSent && <p className="text-green-400 mt-3">Your message has been sent successfully!</p>}
          </form>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Ankit Gangrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
