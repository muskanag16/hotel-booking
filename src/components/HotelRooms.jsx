import React from 'react';
import { Link } from 'react-router-dom';

const roomsData = [
  {
    id: 1,
    name: 'Deluxe King Room',
    description: 'Spacious room with king-size bed, ocean view, and free Wi-Fi.',
    price: '$250/night',
    image: 'https://api.thegantrylondon.com/wp-content/uploads/2020/08/deluxe-1b-2400x1200.jpg',
  },
  {
    id: 2,
    name: 'Standard Twin Room',
    description: 'Comfortable room with two twin beds, city view, and workspace.',
    price: '$150/night',
    image: 'https://www.discoverasr.com/content/dam/tal/media/images/properties/indonesia/jakarta/fox-lite-hotel-grogol-jakarta/apartmenttypes/fox-grogol-thumbnail-standardtwin.jpg',
  },
  {
    id: 3,
    name: 'Suite with Balcony',
    description: 'Luxurious suite with private balcony, seating area, and minibar.',
    price: '$400/night',
    image: 'https://cdn.thealtairhotel.com/s3-uploads/20211029170555/Altair-1-Bedroom-Suite-1-SM.jpg',
  },
];

const HotelRooms = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-4xl font-primary mb-8 text-center">Rooms & Suites</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {roomsData.map(room => (
          <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <div className="font-bold text-lg">{room.price}</div>
              <Link
                to="/booking"
                className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-accent transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelRooms;
