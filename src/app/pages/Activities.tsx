import React from 'react';
import './Activities.css';

const Activities: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: 'Water Sports',
      description: 'Jet skiing, parasailing, windsurfing, and kayaking adventures.',
      image: 'https://images.unsplash.com/photo-1764966894766-8b3f125b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFjdGl2aXRpZXMlMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NjU4NzYwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Varies',
      difficulty: 'All Levels'
    },
    {
      id: 2,
      title: 'Yoga & Meditation',
      description: 'Morning yoga sessions on the beach with certified instructors.',
      image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NzE4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '1 hour',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Scuba Diving',
      description: 'Explore the vibrant underwater world with our expert diving instructors.',
      image: 'https://images.unsplash.com/photo-1764515185797-b620fc109ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBhbWVuaXRpZXN8ZW58MXx8fHwxNzY1NzkxOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3-4 hours',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Cooking Classes',
      description: 'Learn to prepare local dishes with our executive chef.',
      image: 'https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NjUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2 hours',
      difficulty: 'All Levels'
    },
    {
      id: 5,
      title: 'Beach Volleyball',
      description: 'Join friendly matches on our professional beach volleyball court.',
      image: 'https://images.unsplash.com/photo-1764966894766-8b3f125b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFjdGl2aXRpZXMlMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NjU4NzYwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '1 hour',
      difficulty: 'All Levels'
    },
    {
      id: 6,
      title: 'Island Tours',
      description: 'Guided tours to explore local culture, markets, and scenic spots.',
      image: 'https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjU4NjUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Full Day',
      difficulty: 'Easy'
    }
  ];

  return (
    <div className="activities-page">
      <div className="page-header">
        <h1>Activities & Entertainment</h1>
        <p>Endless adventures and unforgettable experiences</p>
      </div>

      <div className="container">
        <div className="activities-intro">
          <p>
            From thrilling water sports to relaxing wellness programs, our resort offers a wide
            range of activities to suit every interest and skill level. Our experienced staff
            ensures your safety while you create lasting memories.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map(activity => (
            <div key={activity.id} className="activity-card">
              <img src={activity.image} alt={activity.title} />
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <div className="activity-details">
                  <span className="detail">
                    <strong>Duration:</strong> {activity.duration}
                  </span>
                  <span className="detail">
                    <strong>Level:</strong> {activity.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="evening-entertainment">
          <h2>Evening Entertainment</h2>
          <div className="entertainment-list">
            <div className="entertainment-item">
              <h4>Live Music</h4>
              <p>Enjoy live performances every evening at our beachfront bar.</p>
            </div>
            <div className="entertainment-item">
              <h4>Cultural Shows</h4>
              <p>Experience traditional dance and music performances twice weekly.</p>
            </div>
            <div className="entertainment-item">
              <h4>Movie Nights</h4>
              <p>Outdoor cinema screenings under the stars every Friday.</p>
            </div>
            <div className="entertainment-item">
              <h4>DJ Parties</h4>
              <p>Dance the night away with our resident DJ on Saturdays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
