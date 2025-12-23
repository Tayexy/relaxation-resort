import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Spa Facilities Opening',
      date: 'December 10, 2025',
      description: 'We are excited to announce our brand new spa facilities with world-class treatments.',
      image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NzE4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Winter Special Offers',
      date: 'December 5, 2025',
      description: 'Book now and save up to 30% on our premium rooms this winter season.',
      image: 'https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NjUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Water Sports Activities',
      date: 'November 28, 2025',
      description: 'Try our new water sports activities including kayaking, jet skiing, and parasailing.',
      image: 'https://images.unsplash.com/photo-1764966894766-8b3f125b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFjdGl2aXRpZXMlMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NjU4NzYwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Relaxation Resort</h1>
          <p>Experience luxury and tranquility in our beachfront paradise</p>
          <Link to="/booking" className="cta-button">Book Your Stay</Link>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Your Dream Vacation Awaits</h2>
          <p>
            Escape to paradise at our luxurious beachfront resort. With world-class amenities,
            exciting activities, and unparalleled service, we offer the perfect getaway for
            families, couples, and solo travelers alike.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🏊 Pool & Beach</h3>
              <p>Infinity pools and private beach access</p>
            </div>
            <div className="feature-card">
              <h3>🍽️ Fine Dining</h3>
              <p>Multiple restaurants with international cuisine</p>
            </div>
            <div className="feature-card">
              <h3>💆 Spa & Wellness</h3>
              <p>Full-service spa and fitness center</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Activities</h3>
              <p>Water sports, yoga, and entertainment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="news-grid">
            {newsItems.map(item => (
              <div key={item.id} className="news-card">
                <img src={item.image} alt={item.title} />
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
