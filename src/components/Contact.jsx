import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#fdfaf7] text-primary">
      {/* Heading */}
      <div className="text-center py-16 px-4">
        <h2 className="font-primary text-[45px] mb-4">Contact Us</h2>
        <p className="font-secondary text-gray-600 text-lg max-w-xl mx-auto">
          We’d love to hear from you! Whether you're booking a spa, planning a stay, or have questions — we’re here to help.
        </p>
      </div>

      {/* Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 pb-20">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="h3 text-accent">Visit Us</h3>
            <p className="font-secondary text-gray-700">
              Adina Hotel & Spa, Serenity Lane, Udaipur, Rajasthan, India
            </p>
          </div>

          <div>
            <h3 className="h3 text-accent">Call or Email</h3>
            <p className="font-secondary text-gray-700">
              Phone: +91 98765 43210<br />
              Email: support@adinahotel.com
            </p>
          </div>

          <div>
            <h3 className="h3 text-accent">Opening Hours</h3>
            <p className="font-secondary text-gray-700">
              Mon–Sun: 9:00 AM – 9:00 PM
            </p>
          </div>

          <div>
            <h3 className="h3 text-accent">Follow Us</h3>
            <div className="flex gap-4 text-2xl text-accent">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-3 rounded font-secondary w-full" />
            <input type="text" placeholder="Last Name" className="border p-3 rounded font-secondary w-full" />
          </div>
          <input type="email" placeholder="Email" className="border p-3 rounded font-secondary w-full" />
          <textarea placeholder="Your Message..." className="border p-3 rounded font-secondary w-full h-32 resize-none"></textarea>
          <button className="btn btn-lg btn-primary rounded-full w-full">Send Message</button>
        </form>

      </div>

      {/* Google Map Embed */}
      <div className="w-full h-[400px]">
        <iframe
          title="Adina Spa Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.677267196258!2d75.86075731496046!3d24.586793384176847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963747df8720b4d%3A0xf7e367679c1e1789!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1618585190110!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="border-0 w-full h-full"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
