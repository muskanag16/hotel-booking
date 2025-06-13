import React from 'react';

const dishes = [
  {
    name: 'Grilled Salmon',
    description: 'Fresh salmon grilled to perfection, served with lemon butter sauce and seasonal vegetables.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1BBovn0Ea0nW-fDMZ4XxdPNPWuEYKit_9Q&s',
  },
  {
    name: 'Classic Margherita Pizza',
    description: 'Stone-baked pizza topped with fresh mozzarella, tomatoes, and basil.',
    image: 'https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg',
  },
 {
    name: 'Paneer Tikka Masala',
    description: 'Grilled paneer cubes cooked in a rich, creamy tomato-based gravy with Indian spices.',
    image: 'https://c.ndtvimg.com/2024-07/rvdidqqo_paneer-tikka_120x90_01_July_24.jpg',
  },
  {
    name: 'Vegan Buddha Bowl',
    description: 'A colorful bowl of quinoa, chickpeas, avocado, roasted vegetables, and tahini dressing.',
    image: 'https://www.sunglowkitchen.com/wp-content/uploads/2023/03/tofu-buddha-bowls-peanut-sauce-8-1.jpg',
  },
];

const Restaurant = () => {
  return (
    <div className="text-primary">

      {/* Hero */}
      {/* <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold uppercase">Gourmet Dining</h1>
        </div>
      </section> */}
      <section
  className="h-[60vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
>
  <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center px-4">
    
    {/* Heading with Gilda Display font */}
    <h1 className="text-white text-4xl md:text-5xl font-primary font-bold uppercase">
      Gourmet Dining
    </h1>
    
    {/* Quote with Barlow font */}
    <p className="text-gray-200 font-secondary text-base md:text-lg mt-4 max-w-xl">
      "Good food is the foundation of genuine happiness." – Auguste Escoffier
    </p>
    
  </div>
</section>

      {/* Description */}
      {/* <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Elevated Cuisine, Exquisite Flavors</h2>
        <p className="text-gray-600">
          At our restaurant, culinary artistry meets comfort. Savor every bite of our carefully curated dishes,
          made with fresh, local ingredients and international flair.
        </p>
      </section> */}
      <section className="py-12 px-6 text-center max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold mb-4">Elevated Cuisine, Exquisite Flavors</h2>
  <p className="text-gray-600">
    At our restaurant, culinary artistry meets comfort. Savor every bite of our carefully curated dishes,
    made with fresh, local ingredients and international flair.
  </p>
</section>

      {/* Menu Items */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-500 text-sm">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Chef's Quote Section */}
<section className="bg-accent text-white py-16 px-6 text-center">
        <h2 className="font-primary text-3xl md:text-4xl mb-4">From the Chef’s Table</h2>
        <p className="font-secondary text-lg max-w-2xl mx-auto">
          “Each dish we prepare reflects a journey — from the soil to your plate. With every bite, we aim to bring joy and meaning.”
        </p>
        <div className="mt-4 italic text-[#f4e5d6] font-secondary">~ Chef Anaya Kapoor, Head Chef</div>
      </section>

      {/* Dining Experience Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="font-primary text-3xl md:text-4xl mb-6">The Adina Experience</h2>
        <p className="font-secondary text-gray-700 max-w-2xl mx-auto mb-8">
          Our ambiance is designed to complement your culinary experience. Whether it’s a romantic dinner or a family celebration, every detail matters.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🍷', title: 'Curated Wine Selection', text: 'Premium wines to pair with every dish.' },
            { icon: '🎵', title: 'Live Music Nights', text: 'Evenings with live jazz and acoustic performances.' },
            { icon: '🕯️', title: 'Candlelit Dining', text: 'Intimate lighting for special occasions.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded shadow-md">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-primary text-xl text-accent mb-1">{item.title}</h3>
              <p className="font-secondary text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
<section className="bg-[#f4e5d6] py-16 px-6">
  <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
    <h2 className="font-primary text-3xl md:text-4xl mb-4 text-accent">
      Reserve Your Table
    </h2>
    <p className="font-secondary text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
      Join us for a culinary experience like no other. Whether it's an anniversary, celebration, or quiet evening, we’ll make it special.
    </p>

    {/* Normal-sized button */}
    <button className="bg-accent hover:bg-accent-hover text-white font-secondary text-sm uppercase px-6 py-3 rounded-full transition">
      Book Now
    </button>
  </div>
</section>

    </div>
  );
};

export default Restaurant;
