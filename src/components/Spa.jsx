
import React from 'react';

const spaServices = [
  {
    id: 1,
    title: 'Aromatherapy Massage',
    description: 'Relax with essential oils blended for healing and calm.',
    icon: '🕯️',
  },
  {
    id: 2,
    title: 'Hot Stone Therapy',
    description: 'Melt tension with warm stones placed on energy points.',
    icon: '🔥',
  },
  {
    id: 3,
    title: 'Detox Facial',
    description: 'Reveal radiant skin with our botanical facial treatment.',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Hydrotherapy Bath',
    description: 'Soak in a mineral bath that restores balance and energy.',
    icon: '💧',
  },
  {
    id: 5,
    title: 'Reflexology',
    description: 'Stimulate foot reflex zones for holistic healing.',
    icon: '🦶',
  },
  {
    id: 6,
    title: 'Ayurvedic Therapy',
    description: 'Ancient healing techniques to balance your inner energy.',
    icon: '🧘‍♀️',
  },
];

const Spa = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://www.hotelkralj.rs/wp-content/uploads/2016/10/spa-wellness-kamenje.png')" }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-primary mb-4">Spa & Wellness</h1>
            <p className="text-white font-secondary text-lg max-w-2xl mx-auto">
              “Peace comes from within. Relax. Refresh. Renew.”
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-primary text-[45px] text-primary mb-4">Our Signature Treatments</h2>
          <p className="font-secondary text-gray-600 text-lg">
            Discover holistic therapies crafted to nurture mind, body, and spirit.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {spaServices.map(service => (
            <div
              key={service.id}
              className="bg-[#fdfaf7] border border-[#e8e4e1] rounded-xl p-8 shadow-sm hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="h3 text-accent">{service.title}</h3>
              <p className="text-gray-700 font-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-primary text-[40px] text-primary mb-10">Why Choose Our Spa?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Expert Therapists</h3>
              <p className="font-secondary text-gray-600">
                Trained professionals with experience in holistic and modern techniques.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Natural Products</h3>
              <p className="font-secondary text-gray-600">
                We only use organic oils and skin-safe ingredients sourced sustainably.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Peaceful Ambience</h3>
              <p className="font-secondary text-gray-600">
                Experience serenity in our luxurious, zen-inspired environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      

    
     
      <section className="py-16 bg-accent text-white text-center flex flex-col items-center justify-center">
  <h2 className="font-primary text-4xl mb-4">Ready to Rejuvenate?</h2>
  <p className="font-secondary text-lg mb-8 max-w-xl">
    Book your spa session today and begin your journey to total relaxation.
  </p>
  <div>
    <button className="btn btn-lg btn-white rounded-full text-primary font-semibold hover:bg-[#e2e2e2]">
      Book a Treatment
    </button>
  </div>
</section>

    </div>
  );
};

export default Spa;
