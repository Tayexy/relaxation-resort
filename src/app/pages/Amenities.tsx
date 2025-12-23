import React from 'react';
import './Amenities.css';

const Amenities: React.FC = () => {
  const amenities = [
    {
      id: 1,
      title: 'Infinity Pool',
      description: 'Stunning infinity pool overlooking the ocean with poolside bar service.',
      image: 'https://images.unsplash.com/photo-1764515185797-b620fc109ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBhbWVuaXRpZXN8ZW58MXx8fHwxNzY1NzkxOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Luxury Spa',
      description: 'Full-service spa with massage therapy, facials, and beauty treatments.',
      image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NzE4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Fine Dining',
      description: 'Multiple restaurants serving international cuisine and local specialties.',
      image: 'https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NjUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment and personal training services available.',
      image: 'https://images.unsplash.com/photo-1764966894766-8b3f125b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFjdGl2aXRpZXMlMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NjU4NzYwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      title: 'Business Center',
      description: 'Fully equipped business center with meeting rooms and conference facilities.',
      image: 'https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NjUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      title: 'Kids Club',
      description: 'Supervised activities and entertainment for children of all ages.',
      image: 'https://images.unsplash.com/photo-1764515185797-b620fc109ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBhbWVuaXRpZXN8ZW58MXx8fHwxNzY1NzkxOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="amenities-page">
      <div className="page-header">
        <h1>Our Amenities</h1>
        <p>Experience world-class facilities and services</p>
      </div>

      <div className="container">
        <div className="amenities-grid">
          {amenities.map(amenity => (
            <div key={amenity.id} className="amenity-card">
              <img src={amenity.image} alt={amenity.title} />
              <div className="amenity-content">
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-services">
          <h2>Additional Services</h2>
          <ul>
            <li>24/7 Concierge Service</li>
            <li>Room Service</li>
            <li>Valet Parking</li>
            <li>Airport Shuttle</li>
            <li>Free Wi-Fi Throughout Property</li>
            <li>Laundry and Dry Cleaning</li>
            <li>Currency Exchange</li>
            <li>Tour and Activity Booking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
